const math = require('remark-math');
const katex = require('rehype-katex');
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'STF Site',
  tagline: '^_^',
  favicon: 'img/favicon.ico',
  url: 'https://stf.top',
  baseUrl: '/',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  themes: [
    // ... Your other themes.
    [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
            hashed: true,
            language: ["en", "zh"],
            indexDocs: true,
            indexBlog: true,
            indexPages: true,
        },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-XXXXXXXX',
          anonymizeIP: false, 
        },
/*
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          routeBasePath: "/",
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          breadcrumbs: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
*/
        blog: {
          showReadingTime: true,
          routeBasePath: "/",
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
      },
      }),
    ],
  ],
  stylesheets: [{
    href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
    type: 'text/css',
    integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
    crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'STF Site',
        hideOnScroll: true,
        logo: {
          alt: "explore",
          src: "img/explore.svg",
        },
        items: [{
            href: "https://space.bilibili.com/35171315",
            label: "B站主页",
            position: "right",
          },
          {
            href: "https://github.com/yltzdhbc",
            label: "GITHUB",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'light',
        links: [{
            title: '朋友',
            items: [{
                href: 'https://zhangshitao.top',
                label: '强烈推荐！：张工的博客',
              },
              {
                href: 'https://blog.csdn.net/qq_44343584',
                label: '强烈推荐！：周工的博客',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

//export default config;

module.exports = config;
