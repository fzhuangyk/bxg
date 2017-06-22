define(['jquery', 'cookie', 'template','bootstrap','nprogress'], function ($, ck, template,bt,NProgress) {
    NProgress.start();
    NProgress.done();
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });

    if (!$.cookie('PHPSESSID') && location.pathname != '/login') {
        location.href = '/login';
    }

    if (location.pathname != '/login' && location.pathname != '/index.php/login' && location.pathname != '/index.php/dashboard/login') {
        var tcInfo = JSON.parse($.cookie('txData'));
        var htmlInfo = template('infoTemp', tcInfo);
        $('.aside>.profile').html(htmlInfo);
    }

    $("#logout").on("click", function () {
        $.ajax({
            url: '/api/logout',
            type: 'post',
            success: function (info) {
                if (info.code == 200) {
                    alert(info.msg);
                    location.href = '/login';
                }
            }
        })
    })
})