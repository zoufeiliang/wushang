class Car{
    //获取元素
    constructor(){
        //定义url
        this.tbody = document.querySelector("tbody");
        this.url = "http://localhost/shopping/goods.json"
        this.init();
    }
    init(){
        var that = this;
        //调用ajax，传入url和回调函数，应为只是读取数据，所以不用传data
        ajax({
            url:this.url,
            success:function(res){
                //读取数据，转换格式
                that.res = JSON.parse(res)
                console.log(that.res)
                //读取cookie
                that.getCookie()
            }
        })
    }
    getCookie(){
        this.goods = JSON.parse(getCookie("shangpin"));
        console.log(this.goods)
        this.display();
    }
    //渲染页面
    display(){
        var str = "";
        //循环遍历数据和cookie的值，判断是否相等

        for(var i=0;i<this.res.length;i++){
            for(var j=0;j<this.goods.length;j++){
                if(this.res[i].goodsId == this.goods[j].id){
                    console.log(1)
                    // str += `<tr>
                    //             <td><input type="checkbox"></td>
                    //             <td><img src="${this.res[i].src}"/></td>
                    //             <td>${this.res[i].name}</td>
                    //             <td>${this.res[i].price}</td>
                    //             <td>${this.goods[j].num}</td>
                    //             <td><span>删除</span></td>
                    //             </tr>`              
                      str += `<tr>
                            <td><input type="checkbox"></td>
                            <td><img src="${this.res[i].src}"></td>
                            <td>${this.res[i].name}</td>
                            <td>${this.res[i].price}</td>
                            <td>${this.goods[j].num}</td>
                            <td><span>删除</span></td>
                        </tr>`       
                }
            }
        }
        this.tbody.innerHTML = str;

    }

}
new Car;