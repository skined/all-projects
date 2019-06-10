//1.轮播动画函数
var timer=null;
var animate1=function(obj,end){
	//动画函数执行最先开始清除计时器
	  clearInterval(timer);
	//动画三要素:终点 起点 ，步长
	 timer=setInterval(function(){
		 var step=10;
         var leader=obj.offsetLeft;
         end>leader?step=step:step=-step;
    //让obj对象动起来
    if(leader!=end){
         obj.style.left=leader+step+'px';
    }
    //判断解决最后的距离不足问题
    if(Math.abs(end-leader)<Math.abs(step)){
    	//如果不足一个步长，就直接将obj定位到end
    	obj.style.left=end+'px';
    	clearInterval(timer);
    }

	},15)
  

}