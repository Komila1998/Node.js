var fs = require('fs');

fs.rename('mynewfile1.txt', 'ukinodejsexercise1.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
