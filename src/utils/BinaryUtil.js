class BinaryUtil {
    static text2Bin = (string) => string.split('').map((char) => char.charCodeAt(0).toString(2)).join(' ');

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
