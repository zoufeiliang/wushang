$(".floor").children("li").click(function(){
    //因为document不能设置scrollTop所以设置在html上
    $("html").animate({
                    //选择div的第eq里传索引，刚好对应ul里的li
                    //offset（）。top来获取当前div的top值
        scrollTop:$(".box").eq($(this).index()).offset().top
    })
})