// note: package.json uses this workaround to pass yarn command-line arguments
//  to the first command in a series of a && b && c commands
const fs = require('fs');
const { exec } = require("child_process");

const commandArgs = process.argv.slice(2);
const validTargets = ['dev', 'prod'];

let sourcePath;
const destPath = '.env';

// 1 - Validation
if (commandArgs.length !== 1) {
  console.error(`Error: Unexpected number of arguments. 1 expected.`);
  process.exitCode = 1;
  return;
}
if (validTargets.includes(commandArgs[0])) {
  sourcePath = `.env.${commandArgs[0]}`;
} else {
  console.error(`Error: Invalid deployment target. Try deploy dev or deploy prod`);
  process.exitCode = 2;
  return;
}

// 2 - Use the correct Firebase project for this deployment target
// destination.txt will be created or overwritten by default.
fs.copyFile(sourcePath, destPath, (err) => {
  if (err) {
    console.error(`Error: Could not copy source ${sourcePath} to destination ${destPath}`);
    process.exitCode = 3;
    return;
  }
  // Success!
  console.log(`Copied ${sourcePath} to ${destPath}`);
  process.exitCode = 0;
});