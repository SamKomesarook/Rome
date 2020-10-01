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

    static dec2Bin = (input) => {
      const floatNum = parseFloat(input);

      const buffer = new ArrayBuffer(4);
      new DataView(buffer).setFloat32(0, floatNum);
      const bytes = new Uint8Array(buffer);

      // 0 - positive, 1 - negative
      const signBit = (bytes[0] >> 7);
      const exp = (bytes[0] << 1) | (bytes[1] >> 7);
      // expected: 126 , in binary 01111110

      // The most significant bit is 1 and is ommited, so we put it back here
      const sig = (((bytes[1] & 0x7F) | 0x80) << 16) | (bytes[2] << 8) | bytes[3];

      return signBit + this.toBits(exp, 8).join('') + this.toBits(sig, 23).join('');
    }

    /**
     * Getting bit sequence of an input number
     */
    static toBits = (n, bitCount) => {
      let x = n;
      const bs = [];
      for (let b = 0; b < bitCount; b++) {
        x = n >> b;
        bs.push(x & 0x01);
      }
      return bs.reverse();
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
