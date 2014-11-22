{
    optimize:'uglify2',
    optimizeCss:'standard',
    fileExclusionRegExp:/^((r|build)\.js)|(\.svn)$/,
    paths: {
        // athena框架配置地址
        'text': 'libs/require/requirePlugin/text',
        'css': 'libs/require/requirePlugin/css',
        'css-builder': 'libs/require/requirePlugin/css-builder',
        'normalize': 'libs/require/requirePlugin/normalize',
        'underscore': 'libs/backbone/underscore-1.7.0.min',
        'backbone': 'libs/backbone/backbone-1.1.2.min',
        'jquery': 'libs/jquery/jquery-1.11.1.min',
        'tweenmax': 'libs/greensock/TweenMax.min',
        'athena': 'libs/athena/Athena',
        // app基本类地址
        'map': 'app/map',
        'model': 'app/model',
        'router': 'app/router',
        'tracker': 'app/tracker',
        // lib辅助类
        "easyBtn": "libs/athena/ui/EasyBtn",
        "scroller": "libs/athena/ui/Scroller",
        'timelinemax': 'libs/greensock/TimelineMax.min',
        'jquery.cookie': 'libs/jquery/jquery.cookie-min',
        'jquery.md5': 'libs/jquery/jquery.md5-min',
        'jquery.mousewheel': 'libs/jquery/jquery.mousewheel',
        'jquery.validate': 'libs/jquery/jquery.validate-min',
        'jquery.validate-additional-methods': 'libs/jquery/validatePlugin/additional-methods',
        'jquery.qrcode': 'libs/jquery/jquery.qrcode.min',
        'jquery.zclip': 'libs/jquery/jquery.zclip.min',
        'json2': 'libs/json2.min'
        // app其他辅助类
    },
    modules: [
        {
            name: 'main',
            include: ['text',
                      'css',
                      'underscore',
                      'backbone',
                      'jquery',
                      'tweenmax',
                      'athena',
                      'map',
                      'model',
                      'router',
                      'tracker'
            ]
        },
        {
            name: 'app/view/preloader',
            exclude: ['main']
        },
        {
            name: 'app/view/header',
            exclude: ['main']
        },
        {
            name: 'app/view/pages/homePage',
            exclude: ['main']
        },
        {
            name: 'app/view/pages/workPage',
            exclude: ['main']
        },
        {
            name: 'app/view/pops/tip1Pop',
            exclude: ['main']
        },
        {
            name: 'app/view/pops/tip2Pop',
            exclude: ['main']
        }
    ]
}