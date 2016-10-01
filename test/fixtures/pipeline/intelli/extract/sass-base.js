const path = require('path')

const absolutePath1 = path.resolve('test/fixtures/pipeline/intelli/extract/has-variables.sass')
const absolutePath2 = path.resolve('test/fixtures/pipeline/intelli/extract/no-variables.sass')

module.exports = {
  input: {
    "test/fixtures/pipeline/intelli/extract": [
      absolutePath1,
      absolutePath2,
    ],
    "test/fixtures/pipeline/find-candidates": []
  },
  output: {
    [absolutePath1]: [
      {
        "variable": "global-white-space",
        "value": "nowrap",
        "lineNumber": 8,
      },
      {
        "variable": "global-font-family",
        "value": "Helvetica",
        "lineNumber": 10,
      },
      {
        "variable": "global-background",
        "value": "#fff",
        "lineNumber": 12,
      }
    ],
    [absolutePath2]: []
  }
}
