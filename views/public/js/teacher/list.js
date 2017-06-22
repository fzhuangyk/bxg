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
    });

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

    $("#tc_list_tBody").on('click','a.cancelInfo',function(){
        var id=parseInt($(this).parent().attr('data-id'));
        var status=parseInt($(this).parent().attr('data-status'));
        var _this=$(this);
        $.ajax({
            url:'/api/teacher/handle',
            type:'post',
            data:{
                tc_id:id,
                tc_status:status
            },
            success:function(data){
                _this.parent().attr('data-status',data.result.tc_status);
                if(data.code==200){
                    if(data.result.tc_status==1){
                        _this.text('启 用');
                    }
                    else{
                        _this.text('注 销');
                    }
                }
            }
        })
    })

    $("#tc_list_tBody").on('click','a.editInfo',function(){
        var id=parseInt($(this).parent().attr('data-id'));
        var that=$(this);
        $.ajax({
            url:'/api/teacher/edit',
            type:'post',
            data:{
                tc_id:id,
                tc_status:status
            },
            success:function(data){
                if(data.code==200){
                    that.parent().parent().remove();
                }
            }
        })
    })    
})