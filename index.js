const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Log incoming requests
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  // Set response status code
  res.statusCode = 200;

  // Handle different endpoints
  if (req.url === '/') {
    const msg = 'Hello Node!\n';
    res.end(msg);
  } else if (req.url === '/about') {
    const msg = 'About Page\n';
    res.end(msg);
  } else {
    const msg = '404 - Not Found\n';
    res.statusCode = 404;
    res.end(msg);
  }
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

// Error handling
server.on('error', (err) => {
  console.error('Server error:', err);
});
