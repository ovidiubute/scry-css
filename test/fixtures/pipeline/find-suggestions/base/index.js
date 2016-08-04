const path = require('path')

module.exports = {
  input: {
    candidatesByFile: require('../../find-candidates/base').output,
    intelliByFile: require('../../intelli/extract/base').output,
    config: {
      stack: 'LESS',
      fileExtension: '.less'
    }
  },
  output: {
    "suggestionData": [
      {
        "propertyDefinitions": [
          {
            "lineNumber": 3,
            "property": "background",
            "value": "white",
            "suggestions": [
              {
                "dirPath": path.resolve("test/fixtures/pipeline/intelli/extract/has-variables.less"),
                "suggestions": [
                  {
                    "variable": "global-background",
                    "value": "#fff",
                    "lineNumber": 12
                  }
                ]
              },
              {
                "dirPath": path.resolve("test/fixtures/pipeline/intelli/extract/no-variables.less"),
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
                "dirPath": path.resolve("test/fixtures/pipeline/intelli/extract/has-variables.less"),
                "suggestions": []
              },
              {
                "dirPath": path.resolve("test/fixtures/pipeline/intelli/extract/no-variables.less"),
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
                "dirPath": path.resolve("test/fixtures/pipeline/intelli/extract/has-variables.less"),
                "suggestions": []
              },
              {
                "dirPath": path.resolve("test/fixtures/pipeline/intelli/extract/no-variables.less"),
                "suggestions": []
              }
            ]
          }
        ],
        "filePath": path.resolve("/test/fixtures/typical-stylesheet.less")
      }
    ]
}
}
