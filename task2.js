const fs = require('fs')
const path = require('path')
 const newPath = path.join(__dirname,'output.txt')

 const content = "hello world"
 fs.writeFile('newPath', content, err => {
    if (!err) {
      console.error('file saved ');
    } else {
      console.log('error')
    }
  });