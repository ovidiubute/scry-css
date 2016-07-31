module.exports = {
  input: {
    '/test/fixtures/typical-stylesheet.less': [
      '',
      'body {',
      'background: white;',
      'color: #fff;',
      '}',
      '',
      'a {',
      'color:#ddd;',
      '}',
      '',
      'h1, h2, h3, h4, h5, h6 {',
      'color: @color-black_dark;',
      '}',
      '',
    ]
  },
  output: [
    {
      "filePath":"/test/fixtures/typical-stylesheet.less",
      "propertyDefinitions":[
        {
          "lineNumber":3,
          "property":"background",
          "value":"white"
        },
        {
          "lineNumber":4,
          "property":"color",
          "value":"#fff"
        },
        {
          "lineNumber":8,
          "property":"color",
          "value":"#ddd"
        }
      ]
    }
  ]
}
