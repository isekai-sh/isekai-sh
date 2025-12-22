import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightThemeBlack from "starlight-theme-black";
import starlightThemeRapide from "starlight-theme-rapide";
import starlightThemeNext from "starlight-theme-next";
import sitemap from "@astrojs/sitemap";

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
      components: {
        ThemeSelect: "./src/components/ThemeSelect.astro",
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
            text: "v0.1.0-alpha.2",
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
            "requirements/cloudflare-r2-setup",
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
