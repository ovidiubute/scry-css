const path = require('path')
const colour = require('colour')

module.exports = {
  input: {
    "suggestionData": [
      {
        "propertyDefinitions": [
          {
            "lineNumber": 3,
            "property": "background",
            "value": "white",
            "suggestions": [
              {
                "filePath": path.resolve("test/fixtures/pipeline/intelli/extract/has-variables.less"),
                "suggestions": []
              },
              {
                "filePath": path.resolve("test/fixtures/pipeline/intelli/extract/no-variables.less"),
                "suggestions": []
              }
            ]
          },
          {
            "lineNumber": 4,
            "property": "color",
            "value": "#fff",
            "suggestions": [
              {
                "filePath": path.resolve("test/fixtures/pipeline/intelli/extract/has-variables.less"),
                "suggestions": []
              },
              {
                "filePath": path.resolve("test/fixtures/pipeline/intelli/extract/no-variables.less"),
                "suggestions": []
              }
            ]
          },
          {
            "lineNumber": 8,
            "property": "color",
            "value": "#ddd",
            "suggestions": [
              {
                "filePath": path.resolve("test/fixtures/pipeline/intelli/extract/has-variables.less"),
                "suggestions": []
              },
              {
                "filePath": path.resolve("test/fixtures/pipeline/intelli/extract/no-variables.less"),
                "suggestions": []
              }
            ]
          }
        ],
        "filePath": path.resolve("/test/fixtures/typical-stylesheet.less")
      }
    ]
  },
  output: 'Sorry, no suggestions available.'.italic.grey
}
