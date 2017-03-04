/**
 * Created by 琴瑟 on 2017/2/28.
 */
define(['jquery','common','nprogress','template'],function($,undefined,nprogress,template){
    nprogress.done();

    $.get('/v6/category',function(data){
        if(data.code==200){
            $('#category-list-table').append(template('category-list-tpl',{list:data.result}));
        }
    });
});