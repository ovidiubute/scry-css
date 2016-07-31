const path = require('path')

const absolutePath1 = path.resolve('test/fixtures/pipeline/intelli/extract/has-variables.less')
const absolutePath2 = path.resolve('test/fixtures/pipeline/intelli/extract/no-variables.less')

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
        "value": "nowrap"
      },
      {
        "variable": "global-font-family",
        "value": "Helvetica"
      }
    ],
    [absolutePath2]: []
  }
}
