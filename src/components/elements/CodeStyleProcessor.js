class CodeStyleProcessor {
  constructor() {
    this.colorCodes = {
      error: '#bf616a',
      macroWrapper: '#a3b1bf', // For start and end keywords
      typeDeclaration: '#6bdfff',
      attribute: '#cb886e',
      word: '#9ab584',
      number: '#b08cac',
      comment: '#5e6a83',
    };

    this.spanRegEx = /<\/?span[^>]*>/g;
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
      content.replace(/<\/?span[^>]*>/g, '');
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
    if (line.match(/^start{?$/)) {
      this.hasStart = true;
      return line.replace(/^start{?$/, this.applyStyle(this.colorCodes.macroWrapper, line));
    }
    return line.replace(line, this.applyStyle(this.colorCodes.error, line));
  };

  formatEnd = (line) => {
    if (line.match(/^end{?$/)) {
      this.hasEnd = true;
      return line.replace(/^end{?$/, this.applyStyle(this.colorCodes.macroWrapper, line));
    }
    return line.replace(line, this.applyStyle(this.colorCodes.error, line));
  };

  formatSet = (line) => {
    const attribute = line.match(/^(set\().+/)[0].replace(/^(set\()/, '').replace(/\).*/, '').replace(this.spanRegEx, '');
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

  formatAttribute = (line) => {
    if (line.match(/\([^)]+/)) {
      const parts = this.separateParts(line, '(', ')');
      const formattedAttribute = this.applyStyle(this.colorCodes.attribute, `${parts[1]}`);

      // If there is value after the closing bracket
      if (parts[2]) {
        parts[2] = this.formatAttribute(parts[2]);
      }

      return `${parts[0]}(${formattedAttribute}${parts[2] === undefined ? '' : (`)${parts[2]}`)}`;
    }
    return line;
  };

  formatNumber = (line) => {
    const number = line.replace(this.spanRegEx).match(/[\d]+\.?[\d]*|[\d]+/)[0];
    return line.replace(number, this.applyStyle(this.colorCodes.number, number));
  }

  formatQuoteContent = (line) => {
    const quoteContent = line.replace(this.spanRegEx).match(/"[^"]*"|'[^']*'|“[^”]*”|‘[^’]*’/)[0];
    return line.replace(quoteContent, this.applyStyle(this.colorCodes.word, quoteContent));
  }

  updateColor = (lines) => {
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
      if (line.match(/^end{?$/) || this.hasEnd) {
        return this.formatEnd(formattedLine);
      }

      // Attribute
      if (line.match(/\([^)]\)?/)) {
        formattedLine = this.formatAttribute(formattedLine);
      }

      // Set
      if (line.match(/^(set\().+/)) {
        formattedLine = this.formatSet(formattedLine);
      }

      // Integer, float, long
      if (line.match(/[\d]+\.?[\d]*|[\d]+/)) {
        formattedLine = this.formatNumber(formattedLine);
      }

      // String and character
      if (line.match(/"[^"]*"|'[^']*'|“[^”]*”|‘[^’]*’/)) {
        formattedLine = this.formatQuoteContent(formattedLine);
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
