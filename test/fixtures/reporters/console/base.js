const path = require('path')
const os = require('os')
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
    '--> ' + '/test/fixtures/typical-stylesheet.less'.underline,
    '    ' + 'background'.blue + ': '.bold + 'white'.white + '; '.bold + '(line 3)'.grey,
    `    --> ${path.resolve('test/fixtures/pipeline/intelli/extract/has-variables.less')}`.bold,
    '        ' + '@global-background'.red + ': '.bold + '#fff'.yellow + '; '.bold + '(line 12)'.bold,
    '    ' + 'color'.blue + ': '.bold + '#fff'.white + '; '.bold + '(line 4)'.grey,
    '    ' + 'Sorry, no suggestions available.'.italic.white,
    '    ' + 'color'.blue + ': '.bold + '#ddd'.white + '; '.bold + '(line 8)'.grey,
    '    ' + 'Sorry, no suggestions available.'.italic.white,
  ].join(os.EOL)
}
