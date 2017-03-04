/**
 * Created by 琴瑟 on 2017/2/28.
 */
define(['jquery','common','nprogress'],function($,undefined,nprogress){
    nprogress.done();
    $('#repass-form').on('submit',function(){
        $.ajax({
            url:'/v6/teacher/repass',
            type:'post',
            data:$(this).serialize(),
            success:function(data){
                if(data.code==200){
                    $('#logout').trigger('click');
                }
            }
        });
        return false;
    });
});