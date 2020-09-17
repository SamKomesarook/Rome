class BinaryUtil {
    // static text2Bin = (string) => string.split('').map((char) => char.charCodeAt(0).toString(2)).join(' ');
    static text2Bin = (input, byte = 6) => {
      const bit = byte * 8;
      const characters = input.split('');

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

    static dec2Bin = (dec, byte = 2) => {
      const bit = byte * 8;
      const binary = (dec >>> 0).toString(2);

      const remainingBitsLength = bit - binary.length;
      let remainingBits = '';
      for (let i = 0; i < remainingBitsLength; i++) {
        remainingBits = remainingBits.concat('0');
      }
      return remainingBits.concat(binary);
    };
}

export default BinaryUtil;
