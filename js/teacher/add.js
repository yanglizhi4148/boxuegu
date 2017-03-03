/**
 * Created by 琴瑟 on 2017/2/28.
 */
define(['jquery','common','nprogress','util','template','datepicker','datepickerLanguage'],
    function($,undefined,nprogress,util,template,datepicker,undefined){
    nprogress.done();

    /**
     * 获取tc_id查询字符串，如果有则认为当前是讲师编辑页面，没有则认为是新讲师添加页面
     *
     * 编辑讲师：
     * 1.先获取讲师信息，展示到表单中
     *2.监听提交表单事件，转为转为ajax方式提交到讲师修改接口。
     *
     * 添加讲师：
     * 1、监听提交表单事件，转为ajax方式提交到讲师添加接口。
     *
     */
    //根据编辑和添加，对应的渲染表单
    var tcId=util.getQueryString('tc_id');
    //这是编辑讲师相关的操作
    if(tcId){
        //获取该讲师之前的信息，填充到表单中
        $.get('/v6/teacher/edit',{tc_id:tcId},function(data){
            if(data.code==200){
                var html=template('teacher-form-tpl',data.result);
                $('.teacher-add').html(html);
                $('#datepicker').datepicker({
                    language:'zh-CN',
                    endDate:new Date(),
                    format:'yyyy-mm-dd'
                });
            }
        });
    }
    //这里是添加讲师相关操作
    else{
        var html=template('teacher-form-tpl',{});
        $('.teacher-add').html(html);
        $('#datepicker').datepicker({
            language:'zh-CN',
            endDate:new Date(),
            format:'yyyy-mm-dd'
        });
    }
    /**
     * 监听表单提交事件，转换为ajax请求
     * 如果是编辑，那么请求/v6/teacher/update，额外需要一个参数tc_id
     * 如果是添加，那么请求/v6/teacher/add
     */

    $('.teacher-add').on('submit','#teacher-add-form',function(){
        $.ajax({
            url:'/v6/teacher/'+(tcId?'update':'add'),
            type:'post',
            data:$(this).serialize()+(tcId?'&tc_id='+tcId:''),
            success:function(data){
                //添加成功，跳转到讲师列表页
                if(data.code==200){
                    location.href='/html/teacher/list.html';
                }
            }
        });
        return false;
    });
});