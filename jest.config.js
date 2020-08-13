module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/src/test/jest/config/CSSStub.js',
    '\\.(css|less)$': '<rootDir>/src/test/jest/config/CSSStub.js',
  },
};
