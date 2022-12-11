// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'jin-frame',
  tagline: 'Next generation create typescript index',
  url: 'https://imjuni.github.io/',
  baseUrl: '/jin-frame/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  // favicon: 'img/favicon.ico',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'imjuni', // Usually your GitHub org/user name.
  projectName: 'jin-frame', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./static/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'jin-frame',
        // logo: {
        //   alt: 'jin-frame',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            label: 'More',
            items: [
              { label: 'File Upload', to: '/more/file-upload' },
              { label: 'Utility Types', to: '/more/types' },
            ],
            position: 'right',
          },
          {
            label: 'Usage',
            items: [
              { label: 'Body', to: '/usage/body' },
              { label: 'Header', to: '/usage/header' },
              { label: 'Object Body', to: '/usage/object-body' },
              { label: 'Param', to: '/usage/param' },
              { label: 'Querystring', to: '/usage/querystring' },
            ],
            position: 'right',
          },
          {
            label: 'API',
            to: 'api',
            position: 'right',
          },
          {
            href: 'https://github.com/imjuni/ctix',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Issues',
                href: 'https://github.com/imjuni/ctix/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/imjuni/erdia',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },

  plugins: [
    [
      'docusaurus-plugin-typedoc',

      // Plugin / TypeDoc options
      {
        entryPoints: [process.env.ENTRY_POINTS],
        tsconfig: process.env.TSCONFIG,
        entryPointStrategy: 'expand',
        readme: 'none',
        sidebar: {
          categoryLabel: 'API',
          collapsed: false,
          position: 2,
          fullNames: true,
        },
      },
    ],
  ],
};

module.exports = config;
