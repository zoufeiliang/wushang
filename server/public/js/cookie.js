//增：document.cookie = "名=值"
function setCookie(key,value,options){
    //处理数据，先判断是否有options传入，没有就设置为空
    options = options ? options : {};
    //处理日期，判断数据里是否有日期传入，没有则设置默认为空
    if(options.expires){
        //获取当前日期
        var d = new Date();
        //设置当前日期，设置为当前日期+expires
        d.setDate(d.getDate()+options.expires);
        var expi = ";expires="+d;

    }else{
        var expi = "";
    }
    //处理路径，判断是否有值传入
    var path = options.path ? ";path="+options.path :"";
    //key+value+日期+对象
    document.cookie = key+"="+value+expi+path;
}

//删
//要执行删，只要传入当前时间之前的时间即可
//如果要删除指定的，还要传入key和路径path；
function removeCookie(key,options){
    options = options ? options : {};
    options.expires = -1;
    setCookie(key,"xxx",options);
}
//查
//传入对应的key，查询相对应的数据
function getCookie(key){
    //用split来截取，先将其转换成一个数组形式
    var arr = document.cookie.split("; ");
    //利用for循环再次分割，分割成key ,value 形式
    for(var i=0;i<arr.length;i++){
        if(arr[i].split("=")[0] === key){
            //返回第i个的val值
            return arr[i].split("=")[1];
        }
    }

}