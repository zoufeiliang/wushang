;(function ($) {
    //开启严格模式
    "use strict";
    //解析options接收到的参数
    $.fn.banner = function (options) {
        //解构赋值，处理传进来的参数
        //list是图片上的点击按钮，传入值为布尔，默认为true
        //left，right是获取当前banner的
        //autoPlay是是否自动轮播，默认true
        //delayTime是自动轮播时多久一张
        //moveTime是图片从进入到出去要多久
        //index是定义首张图片的位置
        var { list, items, left, right, autoPlay, delayTime, moveTime, index } = options;
         //处理数据
        //是否传入，如果没有传，设置默认参数
        list = list === false ? false : true;
        autoPlay = autoPlay === false ? false : true;
        delayTime = delayTime || 2000;
        moveTime = moveTime || 200;
        index = index || 0;
        console.log(items)
        items.eq(index).css({ left: 0 })
        
        let iPrev = items.length - 1;

        //按右按钮运动
        function rightEvent() {
 //           console.log(1)
            //计算索引，当前索引和前一个索引
            if (index == items.length-1) {
                index = 0;
                iPrev = items.length-1;
            } else {
                iPrev = index;
                index++;               
            }
            //开始运动
            btnMove(-1);
        }
        function leftEvent() {
 //           console.log(1)
            if (index == 0) {
                index = items.length - 1;
                iPrev = 0;
            } else {
                iPrev = index;
                index--;
            }
            btnMove(1)
        }
        //接收参数
        let other = this
        
        
        function btnMove(direct) {
 //           console.log(1)
            //先设置上一个出去的初始位置
            items.eq(iPrev).css({ left: 0 })
            //设置出去的坐标已经运动的时间
            .stop().animate({left:items.eq(0).width()*direct},moveTime)
            //设置当前进来的初始位置（其实是决定了进来的方向）
            .end().eq(index).css({left:-items.eq(0).width()*direct})
            //设置运动位置
                .stop().animate({ left: 0 }, moveTime)
            //运动时改变list的当前项
            
            if (list) {               
                $(other).find(".list").children().eq(iPrev).css({background:""}).end().eq(index).css({background:"rgba(220,220,220,0.8)"})
            }
        }
        //绑定事件
        if (left != undefined && left.length > 0 && right != undefined && right.length > 0) {
            left.click(leftEvent);
            right.click(rightEvent);            
        }
        //设置list按钮
        if (list) {
            //生成list
            var str = "";
            for (var i = 0; i < items.length; i++) {
                str += `<li></li>`
            }
            this.append($("<ul class='list'>").html(str));
            $(other).find(".list").css({
                
                position: "absolute",
                display: "flex",
                listStyle: "none",
                bottom: -360,
                margin: 0,
                padding: 0,
                left: 300,
                
            }).children().css({
                height: 20,
                width: 20,
                borderRadius: "50%",
                marginLeft: 10,
                border: "solid 1px #e5e5e5"


            }).eq(index).css({

                background: "rgba(220,220,220,0.8)"
            })
            //给list添加
            let move = function (direct, iPrev, iNow) {

                items.eq(iPrev).css({
                    left: 0
                }).stop().animate({
                    left: -items.eq(0).width() * direct
                }, moveTime).end().eq(iNow).css({
                    left: items.eq(0).width() * direct
                }).stop().animate({
                    left: 0
                }, moveTime)
            }
            console.log(this)
            //给list功能绑定事件
            $(other).find(".list").children("li").click(function () {
                    console.log(other)
                if ($(this).index() > index) {
                    move(1, index, $(this).index())
                }
                if ($(this).index() < index) {
                    move(-1, index, $(this).index())
                }

                $(other).find(".list").children("li").eq(index).css({ background: "" }).end().eq($(this).index()).css({ background: "rgba(220,220,220,0.8)" })

                index = $(this).index();

              
            })
            //添加移动
            
        }
        //判断是否播放
        if (autoPlay) {
            let timer;
            timer = setInterval(() => {
                rightEvent()
            }, delayTime)
            //鼠标经过和移出
            this.hover(function () {
                clearInterval(timer);
            }, function () {
                timer = setInterval(() => {
                    rightEvent()
                }, delayTime)   
            })
        }


    }






























})(jQuery);

function newFunction(iPrev, iNow) {
    console.log(iPrev, iNow);
}
