
var index = localStorage.getItem("productid");
console.log(index);
$.ajax({

    url: "http://127.0.0.1:9090/api/getdiscountproduct",
    dataType: "json",
    data: {
        // productid:+""
        productid: index
    },
    success: function (data) {
        console.log(data);
        $(".cu-content").html(template("pinglun", data));
    }
})


