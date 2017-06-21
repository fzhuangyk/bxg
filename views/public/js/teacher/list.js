define(['jquery','template'],function($,template){
    $.ajax({
        url:'/api/teacher',
        type:'get',
        success:function(data){
            if(data.code==200){
                var htmlStr=template('tc_list_tpl',data);
                $('#tc_list_tBody').html(htmlStr);
            }
        }
    })

    $('#tc_list_tBody').on('click','a.checkInfo',function(){
        var id=$(this).parent().attr('data-id');
        $.ajax({
            url:'/api/teacher/view',
            type:'get',
            data:{tc_id:id},
            success:function(data){
                if(data.code==200){
                    var htmlStr=template('tc_info_tpl',data.result);
                    $('#teacherModal tbody').html(htmlStr);
                    $("#teacherModal").modal();
                }
            }
        })
    })
})