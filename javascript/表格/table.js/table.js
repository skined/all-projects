// var obj = {
// 	 name:"胡一菲",
// 	 sex:"女",
// 	 old:"50",
// }
// console .log(obj.name + obj.sex + obj.old);
//对象是拥有属性和方法的数据
//万物皆对象
//{}之间都是该对象的属性和方法
//格式{属性：属性值 ，属性：属性值}
//自定义对象
// var str = "路梦琪";
// console .log(str.length);
// var obj={
// 	name:"feng",
// 	age : 18,
// 	sex :"men",
// 	gradet:85  
 	
// }
// var tab=
//  '<table>' +
//     '<tr>' +
//          '<td>'  + obj.name + 
//          '</td>' +
//          '<td>'  + obj.age  + 
//          '</td>' +
//          '<td>'  + obj.sex  + 
//          '</td>' +
//          '<td>'  + obj.gradet+
//          '</td>' 
//     '</tr>'+
//  '</table>'
// var tab1=
// '<table><tr><td>'    +
// obj.name+'</td><td>' +
// obj.age +'</td><td>' + 
// obj.sex +'</td><td>' +
// obj.gradet +'</td></tr></table>'

		



// function fn(){
// 	函数体，执行的代码块
// }
// function fn(){
// 	console .log("这是一个函数名。");
// }
// var feng ={
// 	name:"mengqi",
// 	age:28,


// fn :function(){
// 	alert(“会开玩笑”);
//   }
// }


// 数字类型的转换情况：
console .log(Number(true));
console .log(Number(false));
console .log(Number(2222));
console .log(Number());
console .log(Number("Undefined"));
console .log(Number(000111));
console .log(Number("00.2500"));
console .log(Number("23*"));

// isNaN返回真值的监测情况如下：
console .log(isNaN(true));//false
console .log(isNaN(false));//false
console .log(isNaN(null));//false
console .log(isNaN(""));//false
console .log(isNaN(NaN));//true
console .log(isNaN(25));//false
console .log(isNaN('25'));//false
console .log(isNaN('Lee'));//true
console .log(isNaN(true));//false


// typeof数据类型的检测情况：
console .log("var xtypeof(x):"+typeof(x));//undefined;
console .log("var xtypeof(10)"+typeof(10));//Number;
console .log("var xtypeof(null)"+typeof(null));//null;
console .log("var xtypeof(true)"+typeof(true));//boolean;
console .log("var xtypeof('abc')"+typeof('abc'));//string;
console .log("var xtypeof(function(){})"+typeof(function(){}));//function;
console .log("typeof([1, 'a', true]) : "+typeof([1, 'a', true]));  //object
console .log("typeof ({ a: 10, b: 20 }) : "+typeof ({ a: 10, b: 20 }));  //object
console .log("typeof (new Number(10)) : "+typeof (new Number(10))); //function 
console .log("typeof (null) : "+typeof (null)); //Object
console .log("typeof (undefined) : "+typeof (undefined)); //undefined




