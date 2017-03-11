/**
 * Created by 琴瑟 on 2017/2/28.
 */
define(['jquery','common','nprogress','util','template'],function($,undefined,nprogress,util,template){
    nprogress.done();

    var cs_id=util.getQueryString('cs_id');

    $.get('/v6/course/lesson',{cs_id:cs_id},function(data){
          if(data.code==200){
              $('.steps').html(template('step-tpl',data.result));
              //课程编辑三步导航定位
              $('#course-add-aside a').removeClass('active').last().addClass('active');
          }
    });

    //添加章节
    $(document).on('click','#lesson-add',function(){
        $('#chapterModal').modal();
    });

    //编辑章节
    $(document).on('click','#lesson-edit',function(){
        $('#chapterModal').modal();
    });
});