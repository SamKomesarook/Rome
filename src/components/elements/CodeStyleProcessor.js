/* eslint-disable object-curly-newline */
class CodeStyleProcessor {
  constructor() {
    this.colorCodes = {
      error: '#bf616a',
      macroWrappers: '#a3b1bf', // For start and end keywords
      attributes: '#cb886e',
      words: '#9ab584',
    };

    this.hasStart = false;
    this.hasEnd = false;
  }

  applyColor = (color, content) => `<span style='color: ${color}'>${content}</span>`;

  styleStart = (line) => {
    if (line.match(/^start{?$/)) {
      this.hasStart = true;
      return line.replace(/^start{?$/, this.applyColor(this.colorCodes.macroWrappers, line));
    }
    return line.replace(line, this.applyColor(this.colorCodes.error, line));
  };

  styleEnd = (line) => {
    if (line.match(/^end{?$/)) {
      this.hasEnd = true;
      return line.replace(/^end{?$/, this.applyColor(this.colorCodes.macroWrappers, line));
    }
    return line.replace(line, this.applyColor(this.colorCodes.error, line));
  };

  styleSet = (line) => {
    const attribute = line.replace(/^(set\()/, '').replace(/\)$/, '');
    // Only style the attribute inside the brackets
    const styledAttribute = this.applyColor(this.colorCodes.attributes, `${attribute}`);
    const optionalEndBracket = line.match(/\)$/) ? ')' : '';
    return `set(${styledAttribute}${optionalEndBracket}`;
  };

  styleQuoteContent = (line) => {
    const quoteContent = line.match(/"[^"]*"|'[^']*'|“[^”]*”|‘[^’]*’/);
    return line.replace(quoteContent[0], this.applyColor(this.colorCodes.words, quoteContent));
  }

  updateColor = (lines) => {
    this.hasStart = false;
    this.hasEnd = false;

    const styledLines = lines.map((line) => {
      let styledLine = line;

      // Make empty line a separate line
      if (line === '') return '<br>';

      // Apply style to start keyword and anything before that
      if (!this.hasStart) {
        return this.styleStart(line);
      }

      // Apply style to end keyword and anything before that
      if (line.match(/^end{?$/) || this.hasEnd) {
        return this.styleEnd(line);
      }

      if (line.match(/^(set\()[A-Z]+\)?/)) {
        return this.styleSet(line);
      }

      // Apply style to string and character
      if (line.match(/"[^"]*"|'[^']*'|“[^”]*”|‘[^’]*’/)) {
        styledLine = this.styleQuoteContent(line);
      }

      return styledLine;
    });

    styledLines.unshift('<div>');
    styledLines.push('</div>');
    const output = styledLines.join('</div><div>');
    return output;
  };
}

export default CodeStyleProcessor;
