
$(".one").children("div").hover(function () {
    $(this).children(".cont").css({
        display:"block"
    })
}, function () {
    $(this).children(".cont").css({
        display:"none"
    })   
})

$(".xia").mouseover(function(){
     
    $(".xia ul").stop().slideDown(1000);
})



