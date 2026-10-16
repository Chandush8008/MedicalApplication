# MediGuide

India-focused healthcare assistance demo built with React, Vite, Tailwind CSS, Node.js, Express, and MongoDB.

> Educational demo only. MediGuide does not diagnose conditions, prescribe treatment, or replace a qualified healthcare professional. Use synthetic/demo data only.

## Repository structure
- `client/` — React + Vite frontend
- `server/` — Express API and Mongoose models

## Prerequisites
- Node.js 20+
- npm
- MongoDB local instance or MongoDB Atlas connection string

## Getting started
### 1. Configure the backend
```bash
cd server
cp .env.example .env
npm install
npm run dev
```
Set `MONGODB_URI` and a long random `JWT_SECRET` in `server/.env`. Never commit `.env` or real patient data.

### 2. Start the frontend in a second terminal
```bash
cd client
npm install
npm run dev
```
Open the local URL printed by Vite. The frontend expects the API at `http://localhost:5000` by default; set `VITE_API_URL` if needed.

## Current starter scope
- Responsive dashboard and navigation
- Health-check endpoint
- Demo doctor directory API
- Initial user and appointment models
- Registration/login API foundation

The doctor directory currently uses synthetic demo data. Real provider listings and medicine information must be integrated only after data licensing and source reliability are checked.

## Safety and security
- Do not use real patient records in this educational project.
- Keep MongoDB credentials, JWT secrets, and AI provider keys server-side.
- Before deployment, configure HTTPS, strict CORS, rate limits, validation, and production secrets.
- Prescription OCR and AI features should show extracted content for user verification and must not generate or change dosage instructions.