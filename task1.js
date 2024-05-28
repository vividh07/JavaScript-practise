const fs = require('fs');

 const data = fs.readFile('example.txt', 'UTF-8', (err, data) => {
    if (!err) {
        console.log(data);
    } else {
        console.error('Error reading the file:', err);
    }
});