# Local CMS Testing Setup

This guide will help you test the Netlify CMS locally.

## Prerequisites

Make sure you have Node.js installed on your system.

## Setup Steps

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start the CMS proxy server** (in one terminal):
   ```bash
   npm run cms
   ```
   This will start the local backend server on `http://localhost:8081`

3. **Start the development server** (in another terminal):
   ```bash
   npm run dev
   ```
   This will start your Vite development server

4. **Access the CMS**:
   - Open your browser and go to `http://localhost:5173/admin`
   - You should see the Netlify CMS interface
   - You can now create, edit, and manage your content locally

## How it works

- The `local_backend: true` setting in `public/admin/config.yml` enables local development
- The CMS proxy server (`netlify-cms-proxy-server`) provides a local backend for content management
- Changes made in the CMS will be saved to your local filesystem
- You can test all CMS functionality without needing to deploy to Netlify

## Switching back to production

When you're ready to deploy:
1. Comment out the `local_backend: true` line in `public/admin/config.yml`
2. Make sure the git-gateway backend is uncommented
3. Deploy to Netlify

## Troubleshooting

- If you get CORS errors, make sure both servers are running
- If the CMS doesn't load, check that the proxy server is running on port 8081
- Clear your browser cache if you experience any issues 