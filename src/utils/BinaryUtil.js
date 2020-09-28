class BinaryUtil {
    // static text2Bin = (string) => string.split('').map((char) => char.charCodeAt(0).toString(2)).join(' ');
    static text2Bin = (text, byte = 6) => {
      const bit = byte * 8;
      const characters = text.split('');

      const binary = characters.map((char) => {
        const binary = char.charCodeAt(0).toString(2);
        const pad = Math.max(8 - binary.length, 0);
        // Just to make sure it is 8 bits long.
        return '0'.repeat(pad) + binary;
      }).join('');

      return this.getFilling(bit - binary.length, '0') + binary;
    }

    static num2Bin = (num, byte = 2) => {
      const bit = byte * 8;

      // Positize number to maintain the length of binary to only the significant part
      let positiveValue;
      if (num >= 0) {
        positiveValue = num;
      } else {
        positiveValue = num * -1;
      }

      // Convert num to binary
      const binary = (positiveValue >>> 0).toString(2);

      const remainingBitsLength = bit - binary.length;

      if (num >= 0) {
        return this.getFilling(remainingBitsLength, '0') + binary;
      }
      const invertedBinary = binary.replace(/1/g, '2').replace(/0/g, '1').replace(/2/g, '0');
      return this.getFilling(remainingBitsLength, '1') + invertedBinary;
    };

    static dec2Bin = (dec, byte = 4) => {
      // Positize number to maintain the length of binary to only the significant part
      let positiveValue;
      if (dec >= 0) {
        positiveValue = dec;
      } else {
        positiveValue = dec * -1;
      }

      const exponentMemoryAllocation = 8;
      const significantMemoryAllocation = byte * 8 - exponentMemoryAllocation - 1;

      // Convert the input into binary
      const binary = parseFloat(positiveValue).toString(2);

      // Find the exponent required for normalization
      const exponent = binary.includes('.') ? binary.indexOf('.') - 1 : 0;

      // Find the exponent binary form with bias component
      const biasExponent = 127 + exponent;
      let biasExponentBinary = parseInt(biasExponent).toString(2);
      biasExponentBinary = this.getFilling(8 - biasExponentBinary.length, '0') + biasExponentBinary;

      // Get the signification part
      let significant = binary.replace('.', '').slice(1);

      while (true) {
        const lastChar = significant.charAt(significant.length - 1);
        if (lastChar === '0') {
          significant = significant.slice(0, -1);
        } else {
          break;
        }
      }

      const sign = dec >= 0 ? 0 : 1;

      const decBinary = sign + biasExponentBinary + significant;

      return decBinary + this.getFilling(significantMemoryAllocation - significant.length, '0');
    }

    static getFilling = (remainingLength, character) => {
      let filling = '';
      for (let i = 0; i < remainingLength; i++) {
        filling = filling.concat(character);
      }
      return filling;
    }
}

export default BinaryUtil;
