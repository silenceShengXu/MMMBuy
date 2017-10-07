$(function () {
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
        type: 'get',
        success: function (data) {
            var html = template('template1', data);
            $('nav .navs').html(html);
            $('nav .navs').children('li:first-of-type').addClass('active');
            $('.navs').on("click", 'li', function () {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
                var titleid = $(this).attr('titleid');
                $.ajax({
                    url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
                    data: {
                        titleid: titleid
                    },
                    dataType: 'json',
                    success: function (data) {
                        var html = template("template2", data);
                        $('content').html(html)
                    }
                })
            });
            $('nav .navs').children('li:first-of-type').trigger('click')
        }
    });
})