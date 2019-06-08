class List {
    constructor() {
        this.cont = document.querySelector(".list ul")
      //  console.log(this.cont)
        this.url = "../json/list.json";

        this.init();
        
    }
    init() {
        var that = this;
        ajax({
            url: this.url,
            success: function (res) {
          //      console.log(res)
                that.res = JSON.parse(res)
                that.display()
            }
        })
    }
    display() {
        var str = "";
        for (var i = 0; i < this.res.length; i++) {
            str += `
                        <li>
                            <a href="http://localhost:8383/goods.html" index="${this.res[i].id}">
                                <img data-src="${this.res[i].src}"/>
                                <span>${this.res[i].price}</span>
                                <p>${this.res[i].name}</p>
                            </a></li>
                    `
           // console.log(str)
           
        
        }
        this.cont.innerHTML = str;
      //  console.log(this.cont.innerHTML)
      var aimg = document.querySelectorAll(".list img");
        console.log(aimg)
        this.sendId();
        
          var clientH = document.documentElement.clientHeight;
          // console.log(aimg[0].src)
      
          function lazyLog(arr){
              var scrollT = document.documentElement.scrollTop;
              
              for(var i=0;i<arr.length;i++){
                  if(arr[i].src != "") continue;
      
                  if(arr[i].offsetTop < clientH + scrollT){
                      arr[i].src = arr[i].getAttribute("data-src");
                      console.log(`第${i}张可以加载了`)
                  }
              }
          }
      
          lazyLog(aimg)
      
          onscroll = function(){
              lazyLog(aimg)
          }
      
      
    }
    sendId() {
        var that = this;
        $(".list a").click(function () {
            that.id = $(this).attr("index");
            console.log(that.id)
            that.setCookie();
        })
    }
    setCookie() {
        this.goods = getCookie("shangpin");
        console.log(this.goods)
        this.goods = [{

            id:this.id
        }]
                //操作完后，把cookie值设置回去
        
        setCookie("shangpin",JSON.stringify(this.goods))
            }
    


}
    



new List();
