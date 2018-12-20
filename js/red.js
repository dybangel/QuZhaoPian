
/*---------------------------------------------------------/

                       ☀ 唐明明20151015 ☀

/---------------------------------------------------------*/



$(document).ready(function() {
    // 点击redbutton按钮时执行以下全部
    $('.redbutton').click(function(){
        // 在带有red样式的div中添加shake-chunk样式
        $('.red').addClass('shake-chunk');
        // 点击按钮2000毫秒后执行以下操作
        setTimeout(function(){
            // 在带有red样式的div中删除shake-chunk样式
            $('.red').removeClass('shake-chunk');
            // 将redbutton按钮隐藏
            $('.redbutton').css("display" , "none");
            // 修改red 下 span   背景图
            $('.red > span').css("background-image" , "url(img/takephoto_new.png)");
            // 修改red-jg的css显示方式为块
            $('.red-jg').css("display" , "block");
        },2000);

        var string = "8359,6743,2190,7721,6400,9912,4053,1873";   //原始数据
        var array = string.split(",");           //转化为数组
        var value = array[Math.round(Math.random()*(array.length-1))];  //随机抽取一个值
        //alert(value);
        document.getElementsByClassName('red-jg').item(0).innerHTML="<h1>取照片密码："+value+"</h1>";
    });
});








