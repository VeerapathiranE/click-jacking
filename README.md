
# Clickjacking Attack & Prevention

Educational demo that shows a clickjacking (UI redressing) scenario and how to prevent it using HTTP headers.

> **Warning:** For learning only. Do not test sites without explicit permission.

---

## What this repo contains
- `server.js` — Express server that serves the **target** (victim) page. Toggle `ENABLE_PROTECTION` to enable/disable defenses.
- `public/target.html` — Victim page (simulated sensitive action).
- `public/attacker.html` — Attacker page that frames the victim and places a transparent overlay.
- `README.md` — this file.

---

## Prerequisites
- Node.js & npm installed (LTS recommended)
- Git (optional)
- Python (optional, for simple static server) or `npx http-server` available

---

## Quick start (local)
1. Open a terminal and go to project root:
```bash
cd /path/to/clickjacking-demo

2)Install dependencies:

npm install


3)Start the target server (port 3000):

npm start
# or: node server.js
# Server serves /target and /attacker on port 3000 by default


4)Serve attacker page on a different origin (port 4000) — run in a new terminal:

Option A (npx):

npx http-server ./public -p 4000


Option B (Python):

cd public
python -m http.server 4000


5)Open in your browser:

Victim (local target): http://localhost:3000/target

Attacker (cross-origin): http://localhost:4000/attacker.html

Toggle protection (how to configure)

Open server.js and find:

const ENABLE_PROTECTION = true; // or false


true — server will add headers (X-Frame-Options: SAMEORIGIN and Content-Security-Policy: frame-ancestors 'self') to prevent framing.

false — server will not set framing headers (simulates a vulnerable site).

After changing this value, restart the server (Ctrl+C then npm start).
