const fs = require('fs');
const exec = require('child_process').exec;

// Create file called newfile.txt
fs.writeFile('newfile.txt', 'Hello World!', (err) => {
  if (err) throw err;
  // console.log('File created successfully!');
});

// Then print contents of directory according to instructions above

// Execute 'ls -p' command
exec('ls -p', (error, stdout, stderr) => {
  if (error) {
    console.error('exec error: ${error}');
    return;
  }

  // Split the output into an array and remove empty strings
  const files = stdout.split('\n').filter((file) => file);

  // Create new file names that don't end with '/'
  // and join them to concatenate into a string separate by ','
  const fileList = files
    .filter((file) => !file.endsWith('/'))
    .map((file) => `${file}`)
    .join(', ');

  console.log(fileList);
});
