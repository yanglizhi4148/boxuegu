/**
 * Created by 琴瑟 on 2017/2/28.
 */
define(['jquery','common','nprogress','template','region','datepicker','datepickerLanguage','ckeditor'],
    function($,undefined,nprogress,template,undefined,datepicker,undefined,ckeditor){
    nprogress.done();
    /**
     * 展示个人信息
     */
    $.get('/v6/teacher/profile',function(data){
        if(data.code==200){
            $('#profile').html(template('profile-form-tpl',data.result));

            //配置三级联动
            $('.hometown').region({
                url:'/lib/region/region.json'
            });

            //配置日期插件
            $('.datepicker').datepicker({
                language:'zh-CN',
                endDate:new Date(),
                format:'yyyy-mm-dd'
            });

            //配置富文本编辑器
            ckeditor.replace('ckeditor',{
                toolbarGroups:[
                    { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
                    { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
                    { name: 'insert' },
                    { name: 'tools' },
                    { name: 'styles' },
                    { name: 'colors' }
                ]
            });

            //监听提交事件
            $('.form-horizontal').on('submit',function(){
                //生成一个tc_hometown参数,格式为：省|市|县
                var hometown=$('.hometown select').map(function(){
                    return $(this).find('option:selected').text();
                }).toArray().join('|');

                $.ajax({
                    url:'/v6/teacher/modify',
                    type:'post',
                    data:$(this).serialize()+'&tc_hometown='+hometown,
                    success:function(data){
                        if(data.code==200){
                            location.reload();
                        }
                    }
                });
                return false;
            });
        }
    });
});