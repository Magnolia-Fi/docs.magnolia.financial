// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "Magnolia Docs",
  tagline: "Trust in Bitcoin.",
  url: "https://docs.magnolia.financial/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  organizationName: "magnolia-fi",
  projectName: "docs.magnolia.financial",

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl:
            "https://github.com/Magnolia-Fi/docs.magnolia.financial/tree/main/",
          docItemComponent: "@theme/ApiItem",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: "dark",
        // force dark, our yellow is unreadable on lightmode
        disableSwitch: true,
        respectPrefersColorScheme: false
      },
      navbar: {
        title: "Magnolia Docs",
        logo: {
          alt: "Magnolia Financial",
          src: "img/logo.png",
        },
        items: [
          { to: "/guides", label: "Guides", position: "left" },
          { to: "/api", label: "API", position: "left" },
          {
            to: "https://magnolia.financial",
            label: "Magnolia Financial",
            position: "right"
          },
          {
            href: "https://github.com/Magnolia-Fi",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Guides",
                to: "/guides",
              },
              {
                label: "Payment API",
                to: "/api/payments",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Magnolia-Fi",
              },
              {
                label: "Twitter",
                href: "https://x.com/joinMagnolia",
              }
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Magnolia Financial",
                to: "https://magnolia.financial",
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Magnolia Financial.`,
      },
      prism: {
        prism: {
          additionalLanguages: [
            "ruby",
            "csharp",
            "php",
            "java",
            "powershell",
            "json",
            "bash",
          ],
        },
        languageTabs: [
          {
            highlight: "python",
            language: "python",
            logoClass: "python",
          },
          {
            highlight: "bash",
            language: "curl",
            logoClass: "bash",
          },
          {
            highlight: "csharp",
            language: "csharp",
            logoClass: "csharp",
          },
          {
            highlight: "go",
            language: "go",
            logoClass: "go",
          },
          {
            highlight: "javascript",
            language: "nodejs",
            logoClass: "nodejs",
          },
          {
            highlight: "ruby",
            language: "ruby",
            logoClass: "ruby",
          },
          {
            highlight: "php",
            language: "php",
            logoClass: "php",
          },
          {
            highlight: "java",
            language: "java",
            logoClass: "java",
            variant: "unirest",
          },
          {
            highlight: "powershell",
            language: "powershell",
            logoClass: "powershell",
          },
        ],
      },
    } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "payments",
        docsPluginId: "classic",
        config: {
          magnoliaPayments: {
            specPath: "openapi/magnolia-payments-api.yaml",
            outputDir: "docs/api/payments",
            // downloadUrl:
            //   "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

export default async function createConfig() {
  return config;
}
