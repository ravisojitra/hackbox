export const FILES = {
  '/public/index.html': {
    code: `<!DOCTYPE html>
    <html>
        <head>
            <title>Example</title>
        </head>
        <body>
            <div id="root"></div>
        </body>
    </html>`
  },
  '/src/index.tsx': {
    code: `import React from 'react';
    import ReactDOM from 'react-dom';
    
    ReactDOM.render(<h1>hello world!</h1>, document.getElementById('root'));
    `,
      'src/index.css': `body {
      margin: 0;
      padding: 0;
    }
    `
  },
  '/package.json': {
    code: `{
    "name": "hackbox",
    "author": "Ameer Jhan",
    "dependencies": {}
}
`
  }
} as any;
