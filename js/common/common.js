/**
 * Created by ��ɪ on 2017/2/26.
 */
define(['jquery'],function($){
    //��ർ�������б�
    $(".navs a").on('click',function(){
        $(this).next().slideToggle();
    });

    $.ajax({
        url:'/v6/login',
        type:'post',
        data:{
            tc_name:123456,
            tc_pass:123456
        },
        success:function(){
            console.log('����');
        },
        error:function(){
            console.log('����');
        }
    });
});
