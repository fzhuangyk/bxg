define(['jquery', 'cookie'], function ($) {
    $("#formLogin").submit(function (e) {
        var data = $(this).serializeArray();
        if (data[0].value == '' || data[1].value == '') {
            e.preventDefault();
        }
        else {
            $.ajax({
                url: '/api/login',
                type: 'post',
                data: data,
                success: function (info) {
                    if (info.code == 200) {
                        $.cookie('txData', JSON.stringify(info.result));
                        window.location.href = '/index';
                    }
                },
                error: function (errInfo) {
                    alert("用户名或是密码输入错误，请重新输入。。。");
                }
            })
            return false;
        }
    })
})