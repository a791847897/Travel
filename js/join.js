$(function () {
    $('#aaa').click(function () {
        var normal = $('#password');
        normal.attr('type', 'text');
    })

    $('#subbtn').click(function () {

        var name = $('#name').val();
        var phone = $('#phone').val();
        var password = $('#password').val();
        var wechatnum = $('#wechatnum').val();
        var email = $('#email').val();
        var UserData = Bmob.Object.extend("userdata");
        var usedata = new UserData();
        usedata.set("name", name);
        usedata.set("phone", phone);
        usedata.set("password", password);
        usedata.set("wechatnum", wechatnum);
        usedata.set("email", email);
        usedata.save(null, {
            success: function (object) {
                alert("提交成功！！")
                window.location.href = "index.html";
            },
            error: function (model, error) {
                alert("提交失败");
            }
        });
    });
    $('#form1').submit(function () {
        // $('#form1').ajaxSubmit();
        return false;

    })

});