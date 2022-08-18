module.exports = {
    "title": "继续向前走", // 网站标题
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
      ['@vuepress/blog'],
      ['@vuepress-reco/vuepress-plugin-back-to-top'],
      ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }],
      ['@vuepress-reco/vuepress-plugin-screenfull'],
      [
        '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
          theme: [
             'blackCat'
          ],
        //   clean: false,
        //   messages: { 
        //     welcome: '欢迎来到我的博客', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。' 
        //   },
        //   messageStyle: { right: '68px', bottom: '290px' },
        //   width: 250,
        //   height: 320
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
            // 本地文件示例
            // {
            //   name: '장가갈 수 있을까',
            //   artist: '咖啡少年',
            //   url: '/bgm/1.mp3',
            //   cover: '/bgm/1.jpg'
            // },
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
    // "theme": "reco",
    // 导航栏/侧边栏配置，时间轴是自带的，只需要配置路由，link就是文档的路径。相当于vue中的路由
    "themeConfig": {
        smoothScroll: true,
      // 导航栏
      "nav": [
        {
          "text": "主页",
          "link": "/",
          "icon": "reco-home"
        },
        {
          "text": "时间轴",
          "link": "/timeline/",
          "icon": "reco-date"
        },
        {
          "text": "随笔",
          "icon": "reco-document",
          "link": "/theme-reco/theme-reco/"
        },
        {
          "text": "留言板",
          "icon": "reco-suggestion",
          "link": "/theme-reco/message-board.md"
        },
        {
          "text": "关于我",
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
      // 评论插件的配置
      vssueConfig: {
        platform: 'github',
        owner: 'OWNER_OF_REPO',
        repo: 'NAME_OF_REPO',
        clientId: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET',
      },
      // 网站logo
      "logo": "/logo.jpg",
      // 是否开启搜索
      "search": true,
    }
  }