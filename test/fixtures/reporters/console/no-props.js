const path = require('path')
const colour = require('colour')

module.exports = {
  input: {
    "suggestionData": [
      {
        "propertyDefinitions": [],
        "filePath": path.resolve("/test/fixtures/typical-stylesheet.less")
      }
    ]
  },
  output: 'Sorry, no suggestions available.'.italic.white
}
