/**
 * Created by 琴瑟 on 2017/2/25.
 */
requirejs.config({
    baseUrl:'/',
    paths:{
        //第三方库的配置
        jquery:'node_modules/jquery/jquery.min',
        bootstrap:'node_modules/bootstrap/dist/js/bootstrap.min',
        jqueryCookie:'lib/jquery-cookie/jquery.cookie',
        nprogress:'lib/nprogress/nprogress',
        template:'node_modules/art-template/dist/template',
        datepicker:'lib/bootstrap-datepicker/js/bootstrap-datepicker',
        datepickerLanguage:'lib/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        region:'lib/region/jquery.region',
        ckeditor:'lib/ckeditor/ckeditor',
        uploadify:'lib/uploadify/jquery.uploadify',
        //自己写的路径配置
        courseAddStep1:'js/course/add_step1',
        courseAddStep2:'js/course/add_step2',
        courseAddStep3:'js/course/add_step3',
        courseAdd:'js/course/add',
        courseCategoryAdd:'js/course/category_add',
        courseCategory:'js/course/category',
        courseList:'js/course/list',
        courseTopic:'js/course/topic',
        login:'js/home/login',
        repass:'js/home/repass',
        settings:'js/home/settings',
        teacherAdd:'js/teacher/add',
        teacherList:'js/teacher/list',
        userList:'js/user/list',
        userProfile:'js/user/profile',
        util:'js/common/util',
        common:'js/common/common',
        index:'js/index'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        //
        datepickerLanguage:{
            deps:['jquery','datepicker']
        },
        ckeditor:{
            exports:'CKEDITOR'
        },
        uploadify:{
            deps:['jquery']
        }
    }
});

//优先以最快的速度开启页面进度条，其他的js加载延后
require(['nprogress'],function(nprogress){
    nprogress.start();
});

require(['jquery','bootstrap','common']);

//这里获取页面的pathname，然后对应的加载js
(function(window){
    //获取路径
    var pathname=window.location.pathname;

    /**
     * 判断登录状态：
     * 1.登录页
     * 1.1、没有SESSID，不用管
     * 1.2有SESSID，跳转到首页
     *
     * 2.其他页
     * 2.1没有SESSID，跳转到登录页
     * 2.2有SESSID，不用管
     */
    require(['jquery','jqueryCookie'],function($,undefined){
        var sessID=$.cookie('PHPSESSID');

       //登录状态前端效验
        if(pathname==='/html/home/login.html' && sessID){
            location.href='/';
        }else if(pathname!=='/html/home/login.html' && !sessID){
            location.href='/html/home/login.html';
        }
        //如果没有发生页面跳转，就加载对应的js模块
        switch(pathname){
            case'/':
                require(['index']);
                break;
            case'/html/user/list.html':
                require(['userList']);
                break;
            case'/html/user/profile.html':
                require(['userProfile']);
                break;
            case'/html/teacher/add.html':
                require(['teacherAdd']);
                break;
            case'/html/teacher/list.html':
                require(['teacherList']);
                break;
            case'/html/course/add.html':
                require(['courseAdd']);
                break;
            case'/html/course/add_step1.html':
                require(['courseAddStep1']);
                break;
            case'/html/course/add_step2.html':
                require(['courseAddStep2']);
                break;
            case'/html/course/add_step3.html':
                require(['courseAddStep3']);
                break;
            case'/html/course/category_add.html':
                require(['courseCategoryAdd']);
                break;
            case'/html/course/category.html':
                require(['courseCategory']);
                break;
            case'/html/course/list.html':
                require(['courseList']);
                break;
            case'/html/course/topic.html':
                require(['courseTopic']);
                break;
            case'/html/home/login.html':
                require(['login']);
                break;
            case'/html/home/repass.html':
                require(['repass']);
                break;
            case'/html/home/settings.html':
                require(['settings']);
                break;
        }
    });

})(window);