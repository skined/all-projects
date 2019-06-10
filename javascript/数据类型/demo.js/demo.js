// var x1=31;
// console .log(x1);
// var x2=31.00;
// console .log(x2);
// var num=025;
// var b=NaN;
// console .log(num+NaN);
// var a=0.4141272;
// var b=-0.4247787;
// console .log(a+b);
// console .log(number(""));
 
// 		var a = 12;










//		console.log( isNaN(12)  );   //false
//		console.log( isNaN("11") );   //false
//		console.log( isNaN("lu123") ); // true
//		console.log( isNaN("") ); // false
//		console.log( isNaN(NaN) ); // true
//		console.log( isNaN(true) );
//		console.log( isNaN(false) );
		
//		1. 如果值为数字类型,则判断是否为NaN
//		2. 如果值不是数字类型,先将要判断的值
//		转化为数字类型,再判断是否为NaN
//		例如:isNaN("11")
//		第一步: 使用Number()方法 将"11"转化为 11
//		第二步: 使用isNaN()方法判断 11 是否为NaN
		
		
//		一.number 
//		1.整型(2,8,10,16)
//		当第一位数字为0时,自动识别成八进制;
//		当开头为0x时,自动识别为十六进制
//		2.浮点型(带小数点)
//		正无穷大 用infinity来表示
//		负无穷小 用-infinity来表示
//		isFinite()  用来判断一个数字实在在最大值和最小值之间

//		NAN(no a number)   不是数字
//		代表非数字值的特殊值,
//		属于数字类型但不是真正的数字
//		特点:1.任何涉及NaN的操作都会返回NaN
//		例如(NaN*1),这个特点在多步运算中可能会出现问题
//		2.NaN与任何值都不相等,包括他本身
		
//		isNaN() 判断一个数字是不是NaN数字
		
		
		
//		1.number数据类型
//		2.string字符串
//		3.boolean 布尔类型 true真  false假
//		4.undefined未定义
//		5.null空类型
console .log(isNaN(12)); //false
console .log(isNaN("")); //true
console .log(isNaN(NaN));//true
console .log(isNaN(25));//false	
console .log(isNaN("25"));//false 
console .log(isNaN('lee'));//true
console .log(isNaN(true));//false
console .log(Number(true));
console .log(Number(false));                              