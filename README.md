# Alyra — get-alyra.com

Static single-page site. No build step. Deployed as a Cloudflare Worker
serving static assets (no Worker script needed, just the [assets] block
in wrangler.toml).

## Local setup
    npm install -g wrangler   # if not already installed
    wrangler login            # authenticate once against the correct Cloudflare account

## Deploy
    npx wrangler deploy

This uploads everything in /public and attaches it to the "alyra" Worker.
