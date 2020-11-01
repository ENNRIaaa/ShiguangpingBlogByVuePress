module.exports = {
    title: '时光瓶〜李炎の生活日誌〜',
    description: 'There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.',
    theme: 'reco',
    head: [
        ['link', {rel: 'icon', href: '/favicon.png'}], // 增加一个自定义的 favicon(网页标签的图标)
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]
    ],
    plugins: [
        [
            "dynamic-title",
            {
                showIcon: "/favicon.ico",
                showText: "(/≧▽≦/)咦！又回来了！",
                hideIcon: "/failure.ico",
                hideText: "(●—●)喔哟，这就走啦！",
                recoverTime: 2000
            }
        ],
        [
            'sitemap',
            {hostname: 'https://www.shiguangping.com/'}
        ]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        type: 'blog',
        // 首页标题logo
        logo: '/logo.png',
        authorAvatar: 'https://images.shiguangping.com/imgs/20200905230153.jpg',
        // 博客配置
        blogConfig: {
            category: {
                location: 3,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 4,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            }
        },
        mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
        nav: [
            {text: '首页', link: '/', icon: 'reco-home'},
            {text: '时间轴', link: '/timeline/', icon: 'reco-date'},
            // 下拉列表
            {
                text: '代码仓库',
                items: [
                    {text: 'GitHub', link: 'https://github.com/ENNRIaaa'},
                    {text: 'Gitee', link: 'https://gitee.com/ENNRIAAA'}
                ],
                icon: 'reco-github'
            },
            {
                text: '笔记',
                items: [
                    {text: 'Java阶段性学习笔记', link: 'https://javabook.shiguangping.com'}
                ],
                icon: 'reco-document'
            },
            {text: '关于我', link: '/pages/about', icon: 'reco-tag'},
            {text: '赞赏', link: '/pages/pay', icon: 'reco-suggestion'},
        ],
        subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        // 友链
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                email: 'recoluan@qq.com',
                link: 'https://www.recoluan.com'
            },
        ],
        valineConfig: {
            appId: 'iScdY0hF5Y8TgKyMtfvp9CcM-gzGzoHsz',// your appId
            appKey: 'XH2m9KIiA88R6N2lYiSObDH7', // your appKey
        },
        locales: {
            '/': {
                recoLocales: {
                    homeBlog: {
                        article: '文章', // 默认 文章
                        tag: '标签', // 默认 标签
                        category: '分类', // 默认 分类
                        friendLink: '友链' // 默认 友情链接
                    },
                    pagation: {
                        prev: '上一页',
                        next: '下一页',
                        go: '前往',
                        jump: '跳转至'
                    }
                }
            }
        },
        lastUpdated: 'Last Updated', // string | boolean
        // 首页华为文案
        huawei: true,
        // author
        author: '李炎',
        // 项目开始时间，只填写年份
        startYear: '2018'
    }
}
