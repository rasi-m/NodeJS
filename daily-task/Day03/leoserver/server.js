import http from 'http';
import url from 'url';


const port = 3000;
const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/home') {
    // Serve the booking form
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
      <head><title>movie bookings</title></head>
      <body>
        <h2>Leo Movie Booking...</h2>
        <form method="GET" action="/submit">
        <input type="text" name="uname" placeholder="Enter your name" required>
        <input type="text" name="movie" placeholder="Enter movie name" required>
    
        <button type="submit">Book Movie</button>
        </form>
      </body> 
      </html>
    `);
  } else if (req.url.startsWith('/submit')) {
    const parsedUrl = url.parse(req.url, true);
    const data = parsedUrl.query;
    console.log('Booking Details:', data);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Thank you for booking, ${data.uname}!</h1><p>Movie: ${data.movie}</p>`);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(port,()=>{
    console.log(` Server running... http://localhost:${port}/`);
})


