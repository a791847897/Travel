/**
 * Created by 涅槃的F on 2017/1/14.
 */
$(function () {
    $('.login_button').click(function () {
        var login_name = $('.login_name input').val();
        var login_pass = $('.login_pass input').val();
        var userdata = Bmob.Object.extend("userdata");
        var query = new Bmob.Query(userdata);
// 查询所有数据
        query.find({
            success: function (results) {
                // 循环处理查询到的数据
                for (var i = 0; i < results.length; i++) {
                    var object = results[i];
                    if (login_name == '' || login_pass == '') {
                        return false;
                    }
                    if (login_name == object.get('name') && login_pass == object.get('password')
                        || login_name == object.get('phone') && login_pass == object.get('password')
                        || login_name == object.get('email') && login_pass == object.get('password')) {
                        alert("登陆成功");
                        window.location.href = "index.html?account=" + encodeURI(encodeURI(login_name));
                    }

                }
            },
            error: function (error) {
                alert("查询失败: " + error.code + " " + error.message);
            }
        });

        $('#form2').submit(function () {
            return false;

        })
    })
})
