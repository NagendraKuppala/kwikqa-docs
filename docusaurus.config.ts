import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";

const config: Config = {
  title: "KWIKQA",
  tagline: "Test Automation made ASAP(As Simple As Possible)",
  favicon: "/img/favicon.ico",

  // Set the production url of your site here
  url: "https://kwikqa.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kwikqa", // Usually your GitHub org/user name.
  projectName: "kwikqa", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            frontMatter.hide_reading_time
              ? undefined
              : defaultReadingTime({
                  content,
                  options: { wordsPerMinute: 120 },
                }),
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: 'monthly' as any,
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.website.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    tailwindPlugin,
  ],

  themeConfig: {
    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          href: '/img/favicon.ico',
        },
      },
    ],
    announcementBar: {
      id: 'schedule_demo',
      content:
        'Contact for <a target="_blank" rel="noopener noreferrer" href="/contact-us">Demo</a>',
      backgroundColor: '#fafbfc',
      textColor: '#388E3C',
      isCloseable: true,
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: "img/KWIK-social.png",
    navbar: {
      title: "KWIKQA",
      logo: {
        alt: "KWIKQA Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "Docs",
          position: "left",
          label: "Docs",
        }, 
        { to: "/pricing", label: "Pricing", position: "left"},      
        { to: "/blog", label: "Blog", position: "right" },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Get Started",
              to: "/docs/getting-started/installation",
            },
          ],
        },
        {
          title: "Playwright Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://discord.com/servers/playwright-807756831384403968",
            },
            {
              label: "Discord",
              href: "https://stackoverflow.com/questions/tagged/playwright",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/NagendraKuppala/kwikui",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KWIKQA.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
