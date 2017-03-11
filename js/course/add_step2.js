/**
 * Created by 琴瑟 on 2017/2/28.
 */
define(['jquery','common','nprogress','util','template','uploadify'],function($,undefined,nprogress,util,template,uploadify){
    nprogress.done();

    var cs_id=util.getQueryString('cs_id');

    //渲染页面
    $.get('/v6/course/pictrue',{cs_id:cs_id},function(data){
        if(data.code==200){
            $('.steps').html(template('step-tpl',data.result));

            //课程编辑三步导航定位
            $('#course-add-aside a').removeClass('active').eq(1).addClass('active');
            //课程封面上传
            $('#uploadify').uploadify({
                swf:'/lib/uploadify/uploadify.swf',
                uploader:'/v6/uploader/cover',
                fileObjName:'cs_cover_original',
                fileTypeExts:'*.gif;*.jpg;*.png',
                fileSizeLimit:'2MB',
                buttonText:'上传封面',
                buttonClass:'btn btn-success btn-sm',
                height:'100%',
                width:'100%',
                formData:{cs_id:cs_id},
                onUploadSuccess:function(file,data){
                    data=JSON.parse(data);
                    $('.cover-img').attr('src',data.result.path);
                }
            });
        }
    });
});