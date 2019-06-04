class List7 {
    constructor() {
        this.cont = document.querySelector(".app2")
     //   console.log(this.cont)
        this.url = "../../json/app.json";

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
            str += `<a href="#"><img src="${this.res[i].src}"></a>`
           // console.log(str)
           
        
        }
        this.cont.innerHTML = str;
     //   console.log(this.cont.innerHTML)
    }
}
new List7();