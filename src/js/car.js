class Car{
    //获取元素
    constructor(){
        //定义url
        this.tbody = document.querySelector("tbody");
        this.url = "../json/list.json"
        this.init();
        this.event();
    }
    init(){
        var that = this;
        //调用ajax，传入url和回调函数，应为只是读取数据，所以不用传data
        ajax({
            url:this.url,
            success:function(res){
                //读取数据，转换格式
                that.res = JSON.parse(res)
     //           console.log(that.res)
                //读取cookie
                that.getCookie()
            }
        })
    }
    getCookie(){
        this.goods = JSON.parse(getCookie("car"));
//        console.log(this.goods)
        this.display();
    }
    //渲染页面
    display(){
        var str = "";
        var x = 0;
        //循环遍历数据和cookie的值，判断是否相等

        for(var i=0;i<this.res.length;i++){
            for(var j=0;j<this.goods.length;j++){
                if(this.res[i].id == this.goods[j].id){
        //            console.log(1)
                    // str += `<tr>
                    //             <td><input type="checkbox"></td>
                    //             <td><img src="${this.res[i].src}"/></td>
                    //             <td>${this.res[i].name}</td>
                    //             <td>${this.res[i].price}</td>
                    //             <td>${this.goods[j].num}</td>
                    //             <td><span>删除</span></td>
                    //             </tr>`  
                    var x = this.res[i].price * this.goods[j].num +x;
                      str += `<tr  index="${this.goods[j].id}">
                            <td><input type="checkbox"></td>
                            <td><img src="${this.res[i].src}"></td>
                            <td>${this.res[i].name}</td>
                            <td>￥${this.res[i].price}</td>
                            <td><input type = "number" value="${this.goods[j].num}" min=1 /></td>   <td class="sum">￥${this.res[i].price*this.goods[j].num}</td>                        
                            <td><span class = "delete">删除</span></td>
                        </tr>`       
                }
            }
        }
        this.tbody.innerHTML = str;
        $(".zong2").text("￥"+x)
    }
    event() {
        var that = this;
        this.tbody.addEventListener("click", function (eve) {
  //          console.log(eve.target.className)
            if(eve.target.className == "delete"){
                that.id = eve.target.parentNode.parentNode.getAttribute("index");
                eve.target.parentNode.parentNode.remove()
                that.changeCookie(function(i){
                    that.goods.splice(i, 1)
                    console.log(that.goods)
                })
            }
        })
        this.tbody.addEventListener("input",function(eve){
            if(eve.target.type == "number"){
               that.id = 
               eve.target.parentNode.parentNode.getAttribute("index") 
               that.changeCookie(function(i){
                    var v = eve.target.value;

                   that.goods[i].num = eve.target.value;
                   
                    that.display();
                   
               })
               
            }

        })
        this.tbody.addEventListener("input",function(eve){
            if(eve.target.type == "number"){
               that.id = 
               eve.target.parentNode.parentNode.getAttribute("index") 
               that.changeCookie(function(i){
                    var v = eve.target.value;

                   that.goods[i].num = eve.target.value;
                   
                    that.display();
                   
               })
               
            }

        })
    }
    changeCookie(callback){
        for (var i = 0; i < this.goods.length; i++){
            console.log(this.id)
            if(this.goods[i].id == this.id){
                callback(i)
                break;
            }
            
        }
        
        setCookie("car",JSON.stringify(this.goods))
    }
}
new Car;