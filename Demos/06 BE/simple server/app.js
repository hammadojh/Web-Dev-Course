// Import the 'http' module to create an HTTP server.
const http = require('http');

// Import the 'fs' module to work with the file system.
const fs = require('fs');

// Import the 'path' module to work with file paths.
const path = require('path');

// Define the hostname and port number for the server to listen on.
const hostname = '127.0.0.1';
const port = 3005;

// Create an HTTP server using the 'http' module. This server will handle incoming requests.
const server = http.createServer((req, res) => {
  
    // Create a file path to the 'index.html' file using the current directory (__dirname).
  const filePath = path.join(__dirname, 'index.html');

  // Read the content of the 'index.html' file asynchronously.
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // If there's an error reading the file, set the response status code to 500 (Internal Server Error).
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
      console.error(err); // Log the error to the console.
    } else {
      // If the file is successfully read, set the response status code to 200 (OK).
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html'); // Set the content type to HTML.
      res.end(data); // Send the content of the 'index.html' file as the response.
    }
  });
});

// Start the server and make it listen on the specified hostname and port.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});