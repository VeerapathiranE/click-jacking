
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
