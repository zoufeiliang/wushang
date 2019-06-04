$(".one").children("div").hover(function () {
    $(this).children(".cont").css({
        display:"block"
    })
}, function () {
    $(this).children(".cont").css({
        display:"none"
    })   
})
console.log($(".xia"));
$(".xia").mouseover(function(){
    // console.log(this);

    $(".xia ul").stop().slideDown(1000);
})



