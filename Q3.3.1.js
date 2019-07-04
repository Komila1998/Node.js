var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is a joint initiative by Yarl IT Hub and SERVE Foundation. ', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
