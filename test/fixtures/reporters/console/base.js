const path = require('path')
const os = require('os')

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
                "suggestions": [
                  {
                    "variable": "global-background",
                    "value": "#fff",
                    "lineNumber": 12
                  }
                ]
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
  output: [
    '--> /test/fixtures/typical-stylesheet.less',
    '    Line #3 : [background: white;]',
    `    ==> ${path.resolve('test/fixtures/pipeline/intelli/extract/has-variables.less')}`,
    '        Line #12 : @global-background: #fff',
    `    ==> ${path.resolve('test/fixtures/pipeline/intelli/extract/no-variables.less')}`,
    '        No suggestions!',
    '    Line #4 : [color: #fff;] : No suggestions!',
    '    Line #8 : [color: #ddd;] : No suggestions!'
  ].join(os.EOL)
}
