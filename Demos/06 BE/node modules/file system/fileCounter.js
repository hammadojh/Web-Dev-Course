// Accept a command-line argument for the directory path.
// Read the contents of the directory using fs.readdir.
// Filter for files with a specific file extension (e.g., .txt, .jpg).
// Count and print the number of files with the specified extension.


const fs = require('fs');
const path = require('path');

// Check command-line arguments
if (process.argv.length !== 3) {
    console.error('Usage: node countFiles.js <directory>');
    process.exit(1);
}

const directory = process.argv[2];

// Read the directory
fs.readdir(directory, (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${err}`);
        process.exit(1);
    }

    // Filter for specific file extension (e.g., .txt)
    const fileExtensionToCount = '.txt';
    const matchingFiles = files.filter((file) =>
        file.endsWith(fileExtensionToCount)
    );

    console.log(`Number of ${fileExtensionToCount} files: ${matchingFiles.length}`);
});
