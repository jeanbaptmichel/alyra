# Alyra — get-alyra.com

Bilingual (EN/FR) Eleventy site: static homepage plus a 5-pillar GEO blog
under `/blog/...` (EN) and `/fr/blog/...` (FR). Deployed as a Cloudflare
Worker serving static assets (no Worker script needed, just the [assets]
block in wrangler.toml).

See [CLAUDE.md](CLAUDE.md) and `.claude/skills/alyra-blog/SKILL.md` for the
content architecture and frontmatter rules before writing or editing a blog
article.

## Local setup
    npm install
    npm start                 # eleventy --serve, local dev with live reload

## Build
    npm run build              # eleventy build to _site/

## Deploy
    npx wrangler deploy        # uploads _site/ and attaches it to the "alyra" Worker
    npm run deploy              # build + deploy in one step

First-time Cloudflare auth:
    npm install -g wrangler    # if not already installed
    wrangler login              # authenticate once against the correct Cloudflare account
