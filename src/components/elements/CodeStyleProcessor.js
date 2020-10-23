class CodeStyleProcessor {
  constructor() {
    this.colorCodes = {
      error: '#bf616a',
      macroWrapper: '#a3b1bf', // For start and end keywords
      typeDeclaration: '#6bdfff', // For text inside set()
      arguement: '#cb886e', // For text inside brackets ()
      string: '#9ab584', // For text inside  ("")
      number: '#b08cac', // For digits inside ()
      comment: '#5e6a83', // For text after #
    };

    this.spanRegEx = /<\/?span[^>]*>/g;
    this.startRegEx = /^start$/;
    this.endRegEx = /^end$/;
    this.setRegEx = /^set\(.+/;
    this.stringRegEx = /^"[^"]*"$|^'[^']*'$|^“[^”]*”$|^‘[^’]*’$/;
    this.numberRegEx = /^[\d]+\.[\d]+$|^[\d]+$/;
    this.completedBracketsRegEx = /\([^()]+\)/g;
    this.openingBracketRegEx = /\([^()]+/g;

    this.hasStart = false;
    this.hasEnd = false;
  }

  applyStyle = (color, content, shouldOverwriteInnerStyle = false) => {
    let result = content;

    const firstClosingSpanRegex = /^[^<]*<\/span>/;
    const lastOpeningSpanRegex = /<span[^>]*>[^<]*$/;

    const firstOpeningSpanTag = result.match(firstClosingSpanRegex)?.[0];
    const lastOpeningSpanTag = result.match(lastOpeningSpanRegex)?.[0];

    // Remove all style inside the content
    if (shouldOverwriteInnerStyle) {
      result = result.replace(this.spanRegEx, '');
    }

    // Shifting the lastOpeningSpanTag to the end of content
    if (lastOpeningSpanTag) {
      result.replace(lastOpeningSpanRegex, '');
      result = result.concat(lastOpeningSpanTag);
    }

    // Shifting the firstOpeningSpanTag to the start of content
    if (firstOpeningSpanTag) {
      result.replace(firstClosingSpanRegex, '');
      result = firstOpeningSpanTag.concat(result);
    }

    return `<span style='color: ${color}'>${result}</span>`;
  }

  /**
   * Split up a line into 3 pieces:
   * 1. Before openingParenthesis
   * 2. Between openingParenthesis and closing parenthesis
   * 3. After closingParenthesis
   *
   * @param { String } root
   * @param { String } openingParenthesis
   * @param { String } closingParenthesis
   */
  separateParts = (root, openingParenthesis, closingParenthesis) => {
    // Separate the root into 2 parts, before and after openingParenthesis
    const phase1Result = root.split(openingParenthesis);
    while (phase1Result.length > 2) { // Merging everything after openingParenthesis
      phase1Result[1] = phase1Result[1] + openingParenthesis + phase1Result[2];
      phase1Result.splice(2, 1);
    }

    // Separate the phase1Result[1] into 2 parts, before and after closingParenthesis
    const phase2Result = phase1Result[1].split(closingParenthesis);
    while (phase2Result.length > 2) { // Merging everything after closingParenthesis
      phase2Result[1] = phase2Result[1] + closingParenthesis + phase2Result[2];
      phase2Result.splice(2, 1);
    }

    phase1Result[1] = phase2Result;
    return phase1Result.flat(Infinity);
  }

  formatComment = (line) => this.applyStyle(this.colorCodes.comment, line)

  formatStart = (line) => {
    if (line.match(this.startRegEx)) {
      this.hasStart = true;
      return line.replace(this.startRegEx, this.applyStyle(this.colorCodes.macroWrapper, line));
    }
    return line.replace(line, this.applyStyle(this.colorCodes.error, line));
  };

  formatEnd = (line) => {
    if (line.match(this.endRegEx)) {
      this.hasEnd = true;
      return line.replace(this.endRegEx, this.applyStyle(this.colorCodes.macroWrapper, line));
    }
    return line.replace(line, this.applyStyle(this.colorCodes.error, line));
  };

  formatSet = (line) => {
    const attribute = line.match(this.setRegEx)[0]
      .replace(/^set\(/, '')
      .replace(/\).*/, '')
      .replace(this.spanRegEx, '');
    if (attribute === 'string'
    || attribute === 'character'
    || attribute === 'integer'
    || attribute === 'float'
    || attribute === 'long') {
      const formattedAttribute = this.applyStyle(this.colorCodes.typeDeclaration, `${attribute}`);
      const optionalEndBracket = line.replace(/set\([^)]*/, '');
      return `set(${formattedAttribute}${optionalEndBracket === null ? '' : optionalEndBracket}`;
    }
    return line;
  };

  /**
   * Format arguments inside brackers ()
   *
   * @param { String } line
   * @param { Number } i
   */
  formatArguments = (line, i = 0) => {
    let maskedLine = line;
    let argumentIndex = i;
    const formattedArgumentsPairs = []; // Store { key, fullFormattedArgument }

    // Find the argument within brackets.
    // Prioritize argument with both () brackets first then opening bracket alone
    let argumentWithBrackets = maskedLine.match(this.completedBracketsRegEx);
    if (!argumentWithBrackets) {
      argumentWithBrackets = maskedLine.match(this.openingBracketRegEx);
    }

    argumentWithBrackets.forEach((argumentWithBracket) => {
      const argument = argumentWithBracket.replace(/\(|\)/g, '');

      let formattedArgument = '';
      if (argument.match(this.numberRegEx)) {
        formattedArgument = this.applyStyle(this.colorCodes.number, argument);
      } else if (argument.match(this.stringRegEx)) {
        formattedArgument = this.applyStyle(this.colorCodes.string, argument);
      } else {
        formattedArgument = this.applyStyle(this.colorCodes.arguement, argument);
      }

      // Create an id/key unique to the current argument
      const key = `__${argumentIndex}__${(new Date()).toString().replace(/\(|\)/g, '')}__${argumentIndex}__`;

      /* Replace the current argument with a unique key,
      so that we can temporarily remove the brackets of the current argument
      and continue to apply style to other arguments */
      maskedLine = maskedLine.replace(argumentWithBracket, key);

      // Store key-value pair for formattedArgument to restore it later
      formattedArgumentsPairs.push({
        key,
        fullFormattedArgument: `(${formattedArgument}${argumentWithBracket.match(/\)/) ? ')' : ''}`,
      });

      argumentIndex += 1;
    });

    // Check if there is another argument in brackets to format
    if (maskedLine.match(this.openingBracketRegEx)) {
      maskedLine = this.formatArguments(maskedLine, argumentIndex);
    }

    // Restore formatted argument
    formattedArgumentsPairs.forEach((pair) => {
      maskedLine = maskedLine.replace(pair.key, pair.fullFormattedArgument);
    });

    return maskedLine;
  };

  renderStyle = (lines) => {
    this.hasStart = false;
    this.hasEnd = false;

    const formattedLines = lines.map((line) => {
      // NOTE: line is textOnly, while formattedLine is line with <span>.
      // It is important to separate them to prevent unwanted bugs.

      let formattedLine = line;

      // Make empty line a separate line
      if (line === '') return '<br>';

      // Comment
      if (line.match(/^#/)) {
        return this.formatComment(formattedLine);
      }

      // Start
      if (!this.hasStart) {
        return this.formatStart(formattedLine);
      }

      // End
      if (line.match(this.endRegEx) || this.hasEnd) {
        return this.formatEnd(formattedLine);
      }

      // Attribute
      if (line.match(this.openingBracketRegEx)) {
        formattedLine = this.formatArguments(formattedLine);
        // formattedLine = this.formatAttribute(formattedLine);
      }

      // Set
      if (line.match(this.setRegEx)) {
        formattedLine = this.formatSet(formattedLine);
      }

      return formattedLine;
    });

    formattedLines.unshift('<div>');
    formattedLines.push('</div>');
    const output = formattedLines.join('</div><div>');
    return output;
  };
}

export default CodeStyleProcessor;
