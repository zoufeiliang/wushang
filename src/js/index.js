$(".one ").children("div").hover(function () {
    
    $(".cont").css({
        
        display: "block"
    })
}, function () {
    $(".cont").css({
        display: "none"
    })
})
console.log($(".cont "))