// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  base: '/',
  title: 'Sooth Boot',
  lang: 'zh-CN',
  description: '一个开箱即用的脚手架',
  head: createHead(),
  themeConfig: {
    repo: 'vbenjs/vue-vben-admin',
    docsRepo: 'vbenjs/vue-vben-admin-doc',
    logo: '/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',
    nav: createNav(),
    sidebar: createSidebar(),
  },
};

/**
 * @type {()=>import('vitepress').HeadConfig[]}
 */

function createHead() {
  return [
    ['meta', { name: 'author', content: 'Vbenjs Team' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'vben, vitejs, vite, ant-design-vue, vue',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'sooth boot docs' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ];
}

/**
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav() {
  return [
    {
      text: '首页',
      link: '/',
    },
    {
      text: '快速开始',
      link: '/views/index',
    },
    {
      text: '源码下载',
      link: 'https://github.com/moxa-lzf/sooth-boot',
    },
  ];
}

function createSidebar() {
  return {
    '/views/':[
      {
        text: '首页',
        link: '/views/home/index',
      },
      {
        text: '系统管理',
        children: [
          {
            text: '部门管理',
            link: '/views/system/dept',
          },
          {
            text: '用户管理',
            link: '/views/system/user',
          },
          {
            text: '账户设置',
            link: '/views/system/setting',
          },
        ],
      },
      {
        text: '基础管理',
        children: [
          {
            text: '数据字典',
            link: '/views/basic/dict',
          },
          {
            text: '日志管理',
            link: '/views/basic/log',
          },
        ],
      },
      {
        text: '代码生成器',
        children: [
          {
            text: '数据源管理',
            link: '/views/generate/datasource',
          },
          {
            text: '基类管理',
            link: '/views/generate/baseClass',
          },
          {
            text: '类型映射',
            link: '/views/generate/fieldType',
          },
          {
            text: '模板配置',
            link: '/views/generate/template',
          },
          {
            text: '代码生成',
            link: '/views/generate/codeGen',
          },
        ],
      },
      {
        text: '权限管理',
        children: [
          {
            text: '菜单管理',
            link: '/views/privilege/menu',
          },
          {
            text: '角色管理',
            link: '/views/privilege/role',
          },
        ],
      },
      {
        text: '系统监控',
        children: [
          {
            text: '性能监控',
            link: '/views/monitor/server',
          },
          {
            text: 'Redis监控',
            link: '/views/monitor/redis',
          },
        ],
      },
    ],
  };
}
