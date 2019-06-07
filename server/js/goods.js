
		//获取元素
		function Big(){
			this.box=document.querySelector(".small")
			this.mbox=document.querySelector(".big")
			this.span=document.querySelector(".small span")
			this.bImg=document.querySelector(".big img")
         this.inti();
         console.log(this.box)
			//执行绑定事件			
		}
		Big.prototype.inti=function(){
			var that =this;
			this.box.onmouseover = function(){
						
				//
				that.show();			
			}
			this.box.onmouseout =function(){
				that.none();
			}
			this.box.onmousemove=function(eve){
				var e=eve||window.event;
				//因为要获取鼠标当前的坐标,这时候需要获取事件对象
				that.doshow(e);
			}
		}
		Big.prototype.doshow=function(e){
			//跟随鼠标移动,同时计算比例
			//移动距离=事件源相对于页面的距离-box左边的距离-span宽度的一半
			var l = e.pageX - this.box.offsetLeft - this.span.offsetWidth/2;
			
			
			var t =e.pageY - this.box.offsetTop - this.span.offsetHeight/2;
			
			if(l<0) l=0;
			if(t<0) t=0;
			if(l>this.box.offsetWidth-this.span.offsetWidth){
				l=this.box.offsetWidth-this.span.offsetWidth
			}
			if(t>this.box.offsetHeight-this.span.offsetHeight){
				t=this.box.offsetHeight-this.span.offsetHeight;
			}
			this.span.style.left = l +"px";
			this.span.style.top = t +"px";
			//完成span的移动和位置的限制
			//比例换算
			var x =l/(this.box.offsetWidth-this.span.offsetWidth);
			var y = t/(this.box.offsetHeight-this.span.offsetHeight);
			this.bImg.style.left=x* -(this.bImg.offsetWidth-this.mbox.offsetWidth)+"px";
			this.bImg.style.top=y*-(this.bImg.offsetHeight-this.mbox.offsetHeight)+"px"
						
		}
		Big.prototype.show=function(){
			this.span.style.display="block";
			this.mbox.style.display="block";
		//进入时出现	
		}
		Big.prototype.none=function(){
			this.span.style.display="none";
			this.mbox.style.display="none";
		}
		//出去时消失
		class GetCookie{
			constructor() {
				this.url = "../json/list.json";
				this.init();
			}
			init() {
				var that = this;
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
			getCookie() {
				this.goods = JSON.parse(getCookie("shangpin"));
				this.cake = document.querySelector(".cake")				
				this.display();
			}
			display() {
				
				
				for (var i = 0; i < this.res.length; i++) {
					for (var j = 0; j < this.goods.length; j++) {
						if (this.res[i].id == this.goods[j].id) {
							var str = `<div class="cake-l">
						<div class="box">
							<div class="small">
								<a href="#"><img src="${this.res[i].src}"/></a>
								<span></span>
							</div>
							<div class="big">
								<a href="#"><img src="${this.res[i].src}"/></a>
							</div>
						</div>
						<div class=""></div>
					</div>
					<div class="cake-r">
						<div class="pir">
							<h1>${this.res[i].name}</h1>
							<h2>蛋糕和酒限武汉地区配送，需提前24小时订购，当日19：00以后的订单将在隔日8：30处理，客服处理后订购人将收到短信提醒订购成功。5磅蛋糕需提前48小时订购。订单取消需在订购成功后配送前的24小时前联系客服400-117-1517，订单配送当天无法取消订单。如订购成功后需要修改信息，可提前联系客服400-117-1517。蛋糕为下单后现做食品，签收后将不能退换货。请知悉</h2>
							<p>${this.res[i].price}</p>
						</div>
						<div class="bc">
							<a href="http://localhost:8383/car.html" class="buy">立即购买</a>
							<a href="http://localhost:8383/car.html" class="car">🛒加入购物车</a>
							<a href="http://localhost:8383/car.html" class="car">🛒去结算</a>
						</div>
					</div>`
						}
					}
				}
				this.cake.innerHTML = str;
				new Big();
			}
		}
		   
		
		new GetCookie;
		
   


