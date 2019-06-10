//		封装一个函数,要移动的元素不固定,结束位置不固定
//		第一个参数为要移动的对象,第二个参数是为结束位置
	function animate(obj,end){
//			console.log(obj,end);
//			获取到元素的当前位置
		var _left = obj.offsetLeft;
//			定义步数  每次走多少步
		var step = 7;
//			console.log(_left);
//			如果结束位置大于当前位置,则 + step;如果结束位置小于当前位置 则 -step
		if(end > _left ){
			step = + step;
		}else if(end < _left){
			step = - step;
		}
//		console.log(step);
		
		var timer = setInterval(play,10);
		function play(){
//				判断  如果 结束位置 - 当前位置 小于步数时,说明到地方了,要结束运动
			if( Math.abs(end - _left) < Math.abs(step)){
				clearInterval(timer);
			}else{
//					当前位置 + 步数
				_left = _left + step;
//					console.log(_left);
				obj.style.left = _left + 'px';
			}
		}
	}
