
class Register{
    constructor(){
        this.user = document.querySelector(".form .t1");
        this.pass = document.querySelector(".form .t2");
        this.pass2 = document.querySelector(".form .t3");
        this.btn = document.querySelector(".b");
        this.msg = document.querySelector(".msg");
        
        this.init()
    }
    
    
    init(){
        var that = this;
        this.btn.onclick = function () {
            that.pro();
            // 先获取指定的localStorage，用来判断是否是第一次注册
            
    }
    
    }
    //处理数据
    pro() {
        
        if (this.user.value !="" && this.pass.value!="") {
            if (this.user.value.length < 6 || this.user.value.length > 20) { 
                this.msg.innerHTML = "账号长度不符";
            } else {
                if (this.pass.value.length < 6 || this.pass.value.length > 20) {
                    this.msg.innerHTML = "密码长度不符";
                } else {
                    if (this.pass.value == this.pass2.value) {
                        this.getUserMsg() 
                    } else {
                        this.msg.innerHTML = "两次密码不相同";
                    }
                    
                }
                
            }
        } else {
            
            this.msg.innerHTML = "不能为空";
       }
    }
    
    getUserMsg(){
        this.usermsg = localStorage.getItem("usermsg");
        // console.log(this.usermsg);
        // 开始判断是否是第一次
        this.setUserMsg()
    }
    setUserMsg(){
        // localStorage中的数据的格式为:[{user:"admin",pass:1234,onoff:0},{user:"admin",pass:1234,onoff:0}]
        // 如果是第一次，直接注册，如果不是第一次要判断是否重名
        if(this.usermsg == null){
            // 第一次
            this.usermsg = [{
                user:this.user.value,
                pass:this.pass.value,
                onoff:0
            }]
            this.msg.innerHTML = "注册成功，三秒后跳转到登录页面";
            setTimeout(() => {
                location.href = "http://localhost:8383/log.html";
            }, 3000);
        }else{
            // 不是第一次:获取的同时，转成数组，然后开始判断是否重名
            this.usermsg = JSON.parse(localStorage.getItem("usermsg"));
            for(var i=0;i<this.usermsg.length;i++){
                if(this.usermsg[i].user == this.user.value){
                    this.msg.innerHTML = "重名";
                    return;
                }
            }
            this.msg.innerHTML = "注册成功，三秒后跳转到登录页面";
            
            this.usermsg.push({
                user:this.user.value,
                pass:this.pass.value,
                onoff:0
            })
            setTimeout(() => {
                location.href = "http://localhost:8383/log.html";
            }, 3000);
        }

        localStorage.setItem("usermsg",JSON.stringify(this.usermsg))
    }
}

new Register;