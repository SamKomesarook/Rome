/* eslint-disable object-curly-newline */
class CodeStyleProcessor {
  constructor() {
    this.styleCodes = [
      { name: 'error', color: '#bf616a', bold: false, italic: false },
      { name: 'macroWrappers', color: '#a3b1bf', bold: true, italic: false }, // For start and end keywords
      { name: 'attributes', color: '#cb886e', bold: true, italic: false },
    ];

    this.hasStart = false;
    this.hasEnd = false;
  }

  buildStyleSpan = (styleName, content) => {
    const selectedStyle = this.styleCodes.find((element) => element.name === styleName);
    return `<span style='color: ${selectedStyle.color}'>${content}</span>`;
  };

  styleStart = (line) => {
    if (line.match(/^start{?$/)) {
      this.hasStart = true;
      return line.replace(/^start{?$/, this.buildStyleSpan('macroWrappers', line));
    }
    return line.replace(line, this.buildStyleSpan('error', line));
  };

  styleEnd = (line) => {
    if (line.match(/^end{?$/)) {
      this.hasEnd = true;
      return line.replace(/^end{?$/, this.buildStyleSpan('macroWrappers', line));
    }
    return line.replace(line, this.buildStyleSpan('error', line));
  };

  styleSet = (line) => {
    const attribute = line.replace(/^(set\()/, '').replace(/\)$/, '');
    // Only style the attribute inside the brackets
    return `set(${this.buildStyleSpan('attributes', `${attribute}`)}${line.match(/\)$/) ? ')' : ''}`;
  };

  updateColor = (lines) => {
    this.hasStart = false;
    this.hasEnd = false;

    const styledLines = lines.map((line) => {
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

      if (line.match(/^(set\()([A-Z]+)*\)?/)) {
      // if (line.match(/^(set\()/)) {
        return this.styleSet(line);
      }

      return line;
    });

    styledLines.unshift('<div>');
    styledLines.push('</div>');
    const output = styledLines.join('</div><div>');
    return output;
  };
}

export default CodeStyleProcessor;
