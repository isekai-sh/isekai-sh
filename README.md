# Isekai Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Official documentation site for [Isekai Core](https://github.com/isekai-sh/isekai-core) - a self-hosted DeviantArt scheduling and automation platform.

**Live Site**: [https://isekai.sh](https://isekai.sh)

## About

This repository contains the complete documentation for Isekai Core, including:

- **Getting Started Guide**: Introduction and overview of Isekai
- **Deployment Guides**: Multiple deployment strategies (one-click, manual Docker, high availability, local)
- **Requirements Setup**: DeviantArt OAuth and Cloudflare R2 configuration
- **Operations**: Maintenance, troubleshooting, and best practices
- **Architecture**: Technical details for contributors
- **Reference Documentation**: Environment variables and Docker Compose configurations

## Tech Stack

- **Framework**: [Astro](https://astro.build) with [Starlight](https://starlight.astro.build)
- **Theme**: [starlight-theme-next](https://github.com/HiDeoo/starlight-theme-next)
- **Styling**: Custom CSS with forced dark theme
- **Deployment**: GitHub Pages via GitHub Actions
- **Package Manager**: pnpm

## Local Development

### Prerequisites

- Node.js 20+
- pnpm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/isekai-sh/isekai-sh.git
cd isekai-sh

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:4321`

## Available Commands

| Command | Action |
|---------|--------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start local dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview build locally before deploying |
| `pnpm astro ...` | Run Astro CLI commands |

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── CNAME                   # Custom domain configuration
│   └── isekai-browse.png       # Assets
├── src/
│   ├── assets/
│   │   └── isekai-logo.svg     # Logo
│   ├── components/
│   │   └── ThemeSelect.astro   # Disabled theme switcher
│   ├── content/
│   │   └── docs/               # Documentation pages (MDX)
│   │       ├── index.mdx
│   │       ├── overview/
│   │       ├── deployment/
│   │       ├── requirements/
│   │       ├── operations/
│   │       ├── integrations/
│   │       ├── contributing/
│   │       └── resources/
│   └── styles/
│       └── custom.css          # Custom styling
├── astro.config.mjs            # Astro & Starlight configuration
├── package.json
└── tsconfig.json
```

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Deployment Configuration

- **Custom Domain**: `isekai.sh` (configured in `public/CNAME`)
- **Workflow**: `.github/workflows/deploy.yml`
- **Build Command**: `pnpm build`
- **Output Directory**: `dist/`

For detailed deployment setup instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## Customization

### Theme

The documentation uses a **dark theme by default** with the theme switcher disabled. The custom theme configuration can be found in:
- `src/styles/custom.css` - Forces dark mode and removes rounded corners
- `src/components/ThemeSelect.astro` - Empty component to disable theme switcher

### Colors

Primary accent color: `#19E094`

### Logo

Logo is configured to be 70% of the default height. Modify in `src/styles/custom.css`:

```css
.site-title img {
  height: 70%;
  max-height: 2rem;
}
```

## Contributing

We welcome contributions to improve the documentation! Here's how you can help:

1. **Report Issues**: Found a typo or error? [Open an issue](https://github.com/isekai-sh/isekai-sh/issues)
2. **Suggest Improvements**: Have ideas for better documentation? Open an issue or discussion
3. **Submit Pull Requests**:
   - Fork the repository
   - Create a feature branch (`git checkout -b improve-deployment-docs`)
   - Make your changes
   - Test locally with `pnpm dev`
   - Submit a pull request

### Documentation Guidelines

- Use MDX format for all documentation pages
- Utilize Starlight components (`<Card>`, `<Steps>`, `<Aside>`, etc.) for better UX
- Keep explanations clear and concise
- Include code examples where applicable
- Test all commands and instructions

## Links

- **Live Documentation**: [https://isekai.sh](https://isekai.sh)
- **Isekai Core Repository**: [https://github.com/isekai-sh/isekai-core](https://github.com/isekai-sh/isekai-core)
- **Isekai ComfyUI Node**: [https://github.com/isekai-sh/isekai-comfy-node](https://github.com/isekai-sh/isekai-comfy-node)
- **Report Issues**: [https://github.com/isekai-sh/isekai-core/issues](https://github.com/isekai-sh/isekai-core/issues)

## License

This documentation is part of the Isekai project. See the [main repository](https://github.com/isekai-sh/isekai-core) for license information.
