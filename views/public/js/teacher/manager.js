define(['jquery', 'template', 'js/util', 'form'], function ($, template, util) {
    // $("#tc_list_tBody").on('click','a.editInfo',function(){
    // console.log(obj);
    var obj = util.queryString();
    $.ajax({
        url: '/api/teacher/edit',
        type: 'get',
        data: {
            tc_id: obj.tc_id
        },
        success: function (data) {
            if (data.code == 200) {
                data.result.title = "讲师编辑";
                data.result.saveBtnText = "保存";
                var htmlStr = template('tc_edit_tpl', data.result);
                $('.teacher').html(htmlStr);
            }
        }
    })

    $('.teacher').on('click', '.btn-success', function () {
        $('form').ajaxSubmit({
            url: '/api/teacher/update',
            type: 'post',
            success: function (data) {
                alert('保存成功');
            }
        })
        // return false;
    })

    $('.teacher').on('click', '.btn-success', function () {
        // $.ajax({
        //     url: '/api/teacher/add',
        //     type: 'get',
        //     data: {
        //         tc_id: obj.tc_id
        //     },
        //     success: function (data) {
        //         if (data.code == 200) {
        //             data.result.title = "讲师编辑";
        //             data.result.saveBtnText = "保存";
                    
        //         }
        //     }
        // })
        // return false;
    })
})  