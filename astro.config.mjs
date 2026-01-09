import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightThemeBlack from "starlight-theme-black";
import starlightThemeRapide from "starlight-theme-rapide";
import starlightThemeNext from "starlight-theme-next";
import sitemap from "@astrojs/sitemap";

// Fetch latest isekai-core version from GitHub
async function getLatestVersion() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/isekai-sh/isekai-core/releases/latest"
    );
    if (response.ok) {
      const data = await response.json();
      return data.tag_name; // Returns "v0.1.0-alpha.8" format
    }
  } catch (error) {
    console.warn("Failed to fetch latest version:", error);
  }
  // Fallback version if API fails
  return "v0.1.0-alpha.8";
}

const latestVersion = await getLatestVersion();

export default defineConfig({
  site: "https://isekai.sh",
  integrations: [
    starlight({
      plugins: [starlightThemeNext()],
      title: "Isekai Documentation",
      favicon: "/favicon.png",
      logo: {
        src: "./src/assets/isekai-logo.svg",
        replacesTitle: true,
      },
      customCss: ["./src/styles/custom.css"],
      expressiveCode: {
        themes: ["one-dark-pro"],
        styleOverrides: {
          borderRadius: "0.75rem",
          borderWidth: "0",
        },
      },
      components: {
        ThemeSelect: "./src/components/ThemeSelect.astro",
        Sidebar: "./src/components/Sidebar.astro",
      },
      editLink: {
        baseUrl: "https://github.com/isekai-sh/isekai-sh/edit/main/",
      },
      sidebar: [
        {
          label: "Changelog",
          link: "https://github.com/isekai-sh/isekai-core/blob/main/CHANGELOG.md",
          attrs: { target: "_blank", rel: "noopener" },
          badge: {
            text: latestVersion,
            variant: "default",
          },
        },
        { label: "Start Here", link: "overview/start-here" },
        {
          label: "Deployment",
          items: [
            "deployment",
            "deployment/one-click-method",
            "deployment/manual-docker-installation",
            "deployment/high-availability-setup",
            "deployment/run-locally",
          ],
        },
        {
          label: "Requirements",
          items: [
            "requirements/deviantart-application",
            "requirements/storage-setup",
          ],
        },
        {
          label: "Operations",
          items: [
            "operations",
            "operations/maintenance",
            "operations/troubleshooting",
            "operations/etiquette",
          ],
        },
        {
          label: "Isekai Comfy Node",
          items: [
            "comfyui",
            "comfyui/installation",
            "comfyui/updating",
            "comfyui/setting-up-api-key",
            "comfyui/image-nodes",
            "comfyui/string-nodes",
            "comfyui/ai-nodes",
            "comfyui/troubleshooting",
          ],
        },
        {
          label: "Chrome Extension",
          items: [
            "chrome-extension",
            "chrome-extension/installation",
            "chrome-extension/configuration",
            "chrome-extension/usage",
            "chrome-extension/troubleshooting",
          ],
        },
        {
          label: "Contributing",
          items: [
            "contributing/overview",
            "contributing/architecture",
            "contributing/internal-workflows",
            "contributing/other",
          ],
        },
        {
          label: "Resources",
          items: [
            "resources/stateful-docker-compose",
            "resources/stateless-docker-compose",
            "resources/environment-variables",
            {
              label: "Isekai Core GitHub",
              link: "https://github.com/isekai-sh/isekai-core",
              attrs: { target: "_blank", rel: "noopener" },
            },
            {
              label: "Isekai Comfy Node GitHub",
              link: "https://github.com/isekai-sh/isekai-comfy-node",
              attrs: { target: "_blank", rel: "noopener" },
            },
            {
              label: "Chrome Extension GitHub",
              link: "https://github.com/isekai-sh/isekai-chrome-extension",
              attrs: { target: "_blank", rel: "noopener" },
            },
          ],
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/isekai-sh/",
        },
      ],
    }),
    sitemap(),
  ],
});
