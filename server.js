const express = require('express');
const helmet = require('helmet');
const frameguard = require('frameguard');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// === Toggle protection here ===
// Set to true to enable defense (Helmet + X-Frame-Options / CSP).
// Set to false to simulate a vulnerable site that can be framed.
const ENABLE_PROTECTION = true;

if (ENABLE_PROTECTION) {
  app.use(helmet());
  app.use(frameguard({ action: 'sameorigin' }));

  app.use((req, res, next) => {
    res.setHeader(
      'Content-Security-Policy',
      "frame-ancestors 'self'"
    );
    next();
  });
}
 else {
  // Intentionally do NOT set X-Frame-Options or CSP frame-ancestors,
  // simulating a site vulnerable to clickjacking.
  app.use((req, res, next) => {
    next();
  });
}

// Routes
app.get('/', (req, res) => {
  res.redirect('/target');
});

app.get('/target', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'target.html'));
});

app.get('/attacker', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'attacker.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/ (Protection: ${ENABLE_PROTECTION})`);
});
