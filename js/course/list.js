/**
 * Created by 琴瑟 on 2017/2/28.
 */
define(['jquery','common','nprogress','template'],function($,undefined,nprogress,template){
    nprogress.done();

    //页面渲染
    $.get('/v6/course',function(data){
        if(data.code==200){
            $('.courses').append(template('course-tpl',{list:data.result}));
        }
    })
});