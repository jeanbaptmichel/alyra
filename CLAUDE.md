# Alyra Website

Static site for get-alyra.com, built with Eleventy, deployed to Cloudflare
Workers (Worker name: `alyra`). Bilingual EN/FR — see
`.claude/skills/alyra-blog/SKILL.md` for the 5-pillar content architecture
and frontmatter rules before writing or editing any blog article.

Repo: https://github.com/jeanbaptmichel/alyra

## Build & deploy

```
npm install
npm run build      # eleventy build to _site/
npm run deploy     # build + wrangler deploy
```

## Git identity

```
git config user.email "contact@get-alyra.com"
git config user.name "Alyra"
```

## Push pattern

SSH key and host alias already exist: `~/.ssh/id_ed25519_alyra`,
`Host github.com-alyra` in `~/.ssh/config` — same pattern as
canicule-france-website. Use the SSH remote, no PAT needed:

```
git remote add origin git@github.com-alyra:jeanbaptmichel/alyra.git
```

## Content source doc

`alyra-blog-architecture.md` (if present in this folder) is the canonical
pillar/vertical/keyword backlog — read it before planning new topics, the
skill file only summarizes it.
