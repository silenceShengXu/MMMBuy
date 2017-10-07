//内容模块请求
$.ajax({
    url: " http://127.0.0.1:9090/api/getinlanddiscount",
    dataType: "json",
    success: function (data) {
        $(".container").html(template("neirong", data));
        $('.container ul').on('click', '.zhekou', function () {
            var index = $(this).attr("productid");
            console.log(index);
            localStorage.setItem("productid", index);
            location.href = "评论.html";

        })
    }
})