module.exports = {
    title: '时光瓶〜李炎の生活日誌〜',
    description: 'I want be useful.',
    theme: 'reco',
    base: '/',
    head: [
        ['link', {rel: 'icon', href: '/favicon.png'}], // 增加一个自定义的 favicon(网页标签的图标)
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }] // 在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化。
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
        ],
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    //return (new Date(timestamp)).toUTCString() 或者用下面这段
                    // 不要忘了安装 moment
                    const moment = require('moment')
                    moment.locale(lang)
                    return moment(timestamp).toString()
                }
            }
        ]
    ],
    markdown: {
        lineNumbers: true,
        plugins: [
            "task-lists"
        ]

    },
    themeConfig: {
        type: 'blog',
        // 首页标题logo
        // logo: '/logo.png',
        authorAvatar: 'https://images.shiguangping.com/imgs/20210124135009.png',
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
                    {text: 'Java阶段性学习笔记', link: 'https://javabook.shiguangping.com'},
                    {text: 'Java面试题整理', link: 'https://mianshi.shiguangping.com'}
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
                title: '飞污熊博客',
                desc: '静下心来做一件事',
                logo: "https://www.xncoding.com/images/my.png",
                link: 'https://www.xncoding.com/'
            },
            {
                title: 'Mrbird',
                desc: 'A simple blog, code repository, just keep blogging',
                logo: 'https://mrbird.cc/images/blogImage.jpg',
                link: 'https://mrbird.cc/'
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
        lastUpdated: '最后更新', // string | boolean
        // author
        author: '李炎',
        // 项目开始时间，只填写年份
        startYear: '2018'
    }
}
