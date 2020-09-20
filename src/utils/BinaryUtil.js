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

      const remainingBitsLength = bit - binary.length;
      let remainingBits = '';
      for (let i = 0; i < remainingBitsLength; i++) {
        remainingBits = remainingBits.concat('0');
      }
      return remainingBits.concat(binary);
    }

    static num2Bin = (num, byte = 2) => {
      const bit = byte * 8;
      const binary = (num >>> 0).toString(2);

      const remainingBitsLength = bit - binary.length;
      let remainingBits = '';
      for (let i = 0; i < remainingBitsLength; i++) {
        remainingBits = remainingBits.concat('0');
      }
      return remainingBits.concat(binary);
    };

    static dec2Bin = (dec, byte = 4) => {
      const exponentMemoryAllocation = 8;
      const significantMemoryAllocaiton = byte * 8 - exponentMemoryAllocation - 1;

      // Convert the input into binary
      const binary = dec.toString(2);

      // Find the exponent required for normalization
      const exponent = binary.indexOf('.') - 1;

      // Find the exponent binary form with bias component
      const biasExponent = Math.pow(2, exponentMemoryAllocation - 1) - 1 + exponent;
      const biasExponentBinary = biasExponent.toString(2);

      // Get the signification part
      const significant = binary.replace('.', '').slice(1);

      const sign = dec >= 0 ? 0 : 1;

      const decBinary = sign + biasExponentBinary + significant;

      let remainingBits = '';
      for (let i = 0; i < significantMemoryAllocaiton; i++) {
        remainingBits = remainingBits.concat('0');
      }
      return decBinary + remainingBits;
    }
}

export default BinaryUtil;
