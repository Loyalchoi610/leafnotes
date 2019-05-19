var path = require('path');

module.exports = {
  entry: './src/leafNotes.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
