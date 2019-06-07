
function move(ele,data,callback){
	//封装move函数,callback回调函数是在执行链式运动时，
// 	move(obox,{left:500},function(){
// 		move(obox,{top:500},function(){
// 			move(obox,{left:0},function(){
// 				move(obox,{top:0})
// 			})
// 		})
// 	})
//出现的没有传function(){}时报错问题
	clearInterval(ele.timer);
	//先清除计时器
	 ele.timer=setInterval(function(){
		 //开启一个新的计时器
		var offon=true;
		//设置一个开关，用来判断是否所有元素都达到目标值
		for(var arr in data){
			//用for  in   遍历传入的整个数组；
			if(arr=="opacity"){
				//判断是否传入透明度
				var mynow=getStyle(ele,arr)*100;
				//透明度赋值
			}else{
				var mynow=parseInt(getStyle(ele,arr));
				//正常赋值
			}
			
			var speed =(data[arr]-mynow)/8;
			//设置步长，取目标-当前，也就是剩余的百分比
			
			speed=speed<0?Math.floor(speed) :Math.ceil(speed)
			//判断步长是否为负，负向下取整，正向上取整
			if(data[arr]!=mynow){
				//只要有值不等与目标值
				offon=false;
				//开关状态为false，只有当所有的值都==目标值之后，if才会不执行，offon才会变成ture
			}
			if(arr=="opacity"){
				//透明度的操作
				ele.style[arr]=(mynow+speed)/100;
			}else{
				ele.style[arr]=mynow+speed+"px";
				//正常值操作
			}
			
		}
		if(offon){
			//当开关为ture时，表明所有元素都达到了目标值，关闭计时器
			clearInterval(ele.timer);
			callback&&callback();
			//当没有传入回调函数时，callback为flase不执行，&&当有一个为false时为flase
		}
		
		
		
		
		
	},30)
}

function getStyle(ele,arr){
	if(getComputedStyle){
		return getComputedStyle(ele,false)[arr];
	}else{
		return ele.currentStyle[arr];
	}
}