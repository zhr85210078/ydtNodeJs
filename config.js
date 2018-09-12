var path = require('path');

module.exports = {
    server: {
      listenPort: 4000,                                   
      tmplUrl: path.join(__dirname, 'src/views'),      
      staticUrl: path.join(__dirname, 'src'),
      faviconUrl: path.join(__dirname, 'src/img', 'logo.ico')                         
    }
  };