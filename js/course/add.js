/**
 * Created by 琴瑟 on 2017/2/28.
 */
define(['jquery','common','nprogress'],function($,undefined,nprogress){
    nprogress.done();

    //课程创建,成功跳转到课程编辑第一页，同时传入cs_id
    $('#add-form').on('submit',function(){
        $.post('/v6/course/create',$(this).serialize(),function(data){
            (data==200)&&(location.href='/html/course/add_step1.html?cs_id='+data.result.cs_id);
        });
        return false;
    });
});