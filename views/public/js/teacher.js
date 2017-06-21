define(['jquery','template'],function($,template){
    $.ajax({
        url:'/api/teacher',
        type:'get',
        success:function(data){
            if(data.code==200){
                var htmlStr=template('tc_list_tpl',data);
                $('#tc_list_tBody').html(htmlStr);
                $('#tc_list_tBody').on('click','.btnCK',function(){
                })
            }
        }
    })
})