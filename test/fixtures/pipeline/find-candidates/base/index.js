module.exports = {
  input: {
    '/test/fixtures/typical-stylesheet.less': [
      {
        string: '',
        isEmpty: true,
        lineNumber: 1
      },
      {
        string: 'body {',
        isEmpty: true,
        lineNumber: 2
      },
      {
        string: 'background: white;',
        lineNumber: 3
      },
      {
        string: 'color: #fff;',
        lineNumber: 4
      },
      {
        string: '}',
        lineNumber: 5
      },
      {
        string: '',
        isEmpty: true,
        lineNumber: 6
      },
      {
        string: 'a {',
        lineNumber: 7
      },
      {
        string: 'color: #ddd;',
        lineNumber: 8
      },
      {
        string: '}',
        isEmpty: false,
        lineNumber: 9
      },
      {
        string: '',
        isEmpty: true,
        lineNumber: 10
      },
      {
        string: 'h1, h2, h3, h4, h5, h6 {',
        lineNumber: 11
      },
      {
        string: 'color: @color-black_dark;',
        lineNumber: 12
      },
      {
        string: '}',
        lineNumber: 13
      },
      {
        string: '',
        isEmpty: true,
        lineNumber: 14
      },
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
