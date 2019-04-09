module.exports = {
  verbose: true,
  collectCoverage: false,
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  setupFilesAfterEnv: ['./rtl.setup.js']
}
