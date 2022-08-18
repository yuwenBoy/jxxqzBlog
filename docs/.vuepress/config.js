module.exports = {
    "title": "继续向前走的博客", // 网站标题
    "description": "生活不可能像你想象的那么好，但也不会像你想象的那么糟。", // 网站描述
    "dest": "docs/.vuepress/dist", // 打包后的文件存放路径
    // "base": "/blog/", // 打包后的静态资源的路径
    "port":5000,
    // 网站的图标
    "head": [
      [
        "link",
        {
          "rel": "icon",
          "href": "/logo.jpg"
        }
      ]
    ],
    // 插件
    "plugins": [
      // [''],
      ['@vuepress-reco/vuepress-plugin-back-to-top'],
      ['@vuepress-reco/vuepress-plugin-loading-page'],
      ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }],
      ['@vuepress-reco/vuepress-plugin-screenfull'],
      [
        'vuepress-plugin-helper-live2d', {
          // 是否开启控制台日志打印(default: false)
          log: false,
          live2d: {
            // 是否启用(关闭请设置为false)(default: true)
            enable: true,
            // 模型名称(default: hibiki)>>>取值请参考：
            // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
            model: 'hibiki',
            display: {
              position: "right", // 显示位置：left/right(default: 'right')
              width: 135, // 模型的长度(default: 135)
              height: 300, // 模型的高度(default: 300)
              hOffset: 65, //  水平偏移(default: 65)
              vOffset: 0, //  垂直偏移(default: 0)
            },
            mobile: {
              show: false // 是否在移动设备上显示(default: false)
            },
            react: {
              opacity: 0.8 // 模型透明度(default: 0.8)
            }
          }
        }
      ],
      [
        //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
        "cursor-effects",
        {
          size: 3,                    // size of the particle, default: 2
          // shape: ['start'],  // shape of the particle, default: 'star'
          zIndex: 999999999           // z-index property of the canvas, default: 999999999
        }
      ],
      [
        "@vuepress-reco/vuepress-plugin-bgm-player",{
          audios: [
            // 网络文件示例
            {
              name: '강남역 4번 출구',
              artist: 'Plastic / Fallin` Dild',
              url: 'https://assets.smallsunnyfox.com/music/2.mp3',
              cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
            },
            {
              name: '用胳膊当枕头',
              artist: '최낙타',
              url: 'https://assets.smallsunnyfox.com/music/3.mp3',
              cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
            }
          ]  
        }
      ],
      ["ribbon-animation", {
        size: 90,   // 默认数据
        opacity: 0.3,  //  透明度
        zIndex: -1,   //  层级
        opt: {
          // 色带HSL饱和度
          colorSaturation: "80%",
          // 色带HSL亮度量
          colorBrightness: "60%",
          // 带状颜色不透明度
          colorAlpha: 0.65,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: "center",
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 2,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true  // 滑动彩带
      }],
    ],
    
    // 主题-reco
    "theme": "reco", //aurora reco
    // 导航栏/侧边栏配置，时间轴是自带的，只需要配置路由，link就是文档的路径。相当于vue中的路由
    "themeConfig": {
      darkMode:false,
      // yilia_plus: {
      //   // github-corner(关闭请设置为false)
      //   // github: {
      //   //   url: "https://github.com/JoeyBling/vuepress-theme-yilia-plus"
      //   // },
      //   // footer: {
      //   //   // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
      //   //   since: 2018,
      //   //   // 网站作者(关闭请设置为false)
      //   //   author: '<a href="https://github.com/JoeyBling/" target="_blank">試毅-思伟</a>',
      //   //   // 访问量统计功能(不蒜子)
      //   //   busuanzi: {
      //   //     // 是否启用(关闭请设置为false)
      //   //     enable: true
      //   //   }
      //   // }
      // },
        smoothScroll: true,
      // 导航栏
      "nav": [
        {
          "text": "首页",
          "link": "/",
          "icon": "reco-home"
        },
        { text: 'Docs',
                items: [
                    { text: '英语', link: '/study/english/english01' },
                    { text: '数学', link: '/study/math/math01' },
                ]
            },
        {
          "text": "分类",
          "icon": "reco-account",
          "items": [
            {
              "text": "个人信息",
              "link": "/article/about.md",
            },
            {
              "text": "掘金",
              "link": "",
              "icon": "reco-juejin"
            }
          ]
        },
      
        {
          "text": "标签",
          "icon": "reco-document",
          "link": "/theme-reco/theme-reco/"
        },
        {
          "text": "历史动态",
          "link": "/timeline/",
          "icon": "reco-date"
        },
        {
          "text": "关于",
          "icon": "reco-suggestion",
          "link": "/article/about.md"
        },
        {
          "text": "友情链接",
          "icon": "reco-account",
          "items": [
            {
              "text": "GitHub",
              "link": "https://github.com/yuwenBoy",
            },
            {
              "text": "CSDN",
              "link": "",
              "icon": "reco-juejin"
            }
          ]
        }
      ],
      // 侧边栏，auto标识自动生成，每个文档都会根据标题生成目录，也可以自己配置
      // "sidebar": "auto",
      "sidebar": {
        "/theme-reco/theme-reco/": [
          "",
          "timer"
        ]
      },
      sidebarDepth: 2,
      lastUpdated: 'Last Updated',
      searchMaxSuggestoins: 10,
      serviceWorker: {
          updatePopup: {
              message: "有新的内容.",
              buttonText: '更新'
          }
      },
      // 评论插件的配置
      vssueConfig: {
        platform: 'github',
        owner: 'OWNER_OF_REPO',
        repo: 'NAME_OF_REPO',
        clientId: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET',
      },
      // 网站logo
      // "logo": "/logo.jpg",
      // 是否开启搜索
      "search": true,

    }
  }