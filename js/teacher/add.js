/**
 * Created by 琴瑟 on 2017/2/28.
 */
define(['jquery','common','nprogress'],function($,undefined,nprogress){
    nprogress.done();
    $('#teacher-add-form').on('submit',function(){
        //添加讲师
        $.ajax({
            url:'/v6/teacher/add',
            type:'post',
            data:$(this).serialize(),
            success:function(data){
                //添加成功，跳转到讲师列表页
                if(data.code==200){
                    location.href='/html/teacher/list.html';
                }
            }
        });
    });

    return false;
});