// Problem 1: Working with fs & path

// Objective: Create a Node.js program that reads a directory's contents, filters for specific file extensions, and copies them to a new directory.

// Requirements:

// Accept two command-line arguments: the source directory path and the target directory path.
// Read the contents of the source directory using fs.readdir.
// Filter for files with specific extensions (e.g., .txt, .jpg).
// Copy the filtered files to the target directory while preserving their original names.

const fs = require('fs');
const path = require('path');

// Check command-line arguments
if (process.argv.length !== 4) {
    console.error('Usage: node copyFiles.js <sourceDirectory> <targetDirectory>');
    process.exit(1);
}

const sourceDir = process.argv[2];
const targetDir = process.argv[3];

// Read the source directory
fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${err}`);
        process.exit(1);
    }

    // Filter for specific file extensions
    const validExtensions = ['.txt', '.jpg'];
    const filteredFiles = files.filter((file) =>
        validExtensions.includes(path.extname(file).toLowerCase())
    );

    // Copy filtered files to the target directory
    filteredFiles.forEach((file) => {
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, file);

        fs.copyFile(sourcePath, targetPath, (err) => {
            if (err) {
                console.error(`Error copying file: ${err}`);
            } else {
                console.log(`Copied: ${file}`);
            }
        });
    });
});