var fs = require('fs');

fs.open('ukinode.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

fs.writeFile('ukinode.txt', 'It is a full scholarship based Accelerator program for Coding in Jaffna, Sri Lanka targeting students who has completed Advanced Level examinations and don’t have access to university education or any other form of vocational education.', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
