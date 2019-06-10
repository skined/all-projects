// var phone=prompt("小明给手机输入电话号码");
// if(phone==1){
// 	console.log("拨打爸爸的电话号码")
// }else if(phone==2){
// 	console .log("拨打妈妈的电话号码")
// }else if(phone==3){
// 	console .log("拨打爷爷的电话号码")

// }else{null}



// var a=prompt("请您输入一个三位数");
// var b=(a%10);
// var c=parseInt(a%100/10);
// var d=parseInt(a/100);
// var e=(b*b*b)+(c*c*c)+(d*d*d);
// if(a==e){

//     console .log("为水仙花数");
// }else{
// 	console .log("不是水仙花数");
// }
//三位水仙花数：153，370，371，407;


// var a=prompt("请输入你的身高");
// var b=prompt("请输入你的年龄");
// var c=prompt("是否拥有学生证");
// if((a<1.4 && b<13) || c=="拥有"){
// 	console .log("火车票享受半价")
// }else{
// 	console .log("火车票不能享受半价")
// }
	

// var a=prompt("请输入赵本山的考试成绩");
// if (a==100) {
// 	console .log("爸爸奖励你一辆车");

// }else if(90<=a){
// 	console .log("妈妈奖励你一台MP4");
// }else if(90>a>=60){
// 	console.log("妈妈奖励你一本书");
// }else if(a<60){
// 	console .log("臭小子你还敢回来，看我不打断你的腿!!!");
// }

// var num=prompt("请输入一个整数");
// if(num>0){
// 	console .log("num是个大于0的整数");
// }else if(num<0){
// 	console .log("num是个小于0的整数");
// }else{
// 	console .log("num是个等于0的整数")
// }



//switch语句
 // var a=prompt("请输入成绩");
 // switch(true){
 // 	case a>=90 : document .write("优秀");
 //    break
 //    case a<90  : document  .write("良好");
 //    break
 //    case a>=60 : document  .write("一般");
 //    break   	
 //    default    : document  .write("不及格");
// } 



//循环语句
// var a= 1;
// while(a<=108){
// 	document .write("老师您真帅！"+"<br>");
// 	a++;
// }


// var a=0;
// var arr=["我","你","她"];
// while(a<=arr.length-1){
// 	document .write(arr[a]+"<br>");
// 	a++;
// }



//1.输出数字11-40,每五个换一行;
//2.输出1-100中所有的奇数;
//3.输出100-999中所有的水仙花数;
// var a=11;
// while(a<=40){
//   document .write(a); 
//  
//   if(a%5==0){
//   document .write("<br>");	
//  }  
 // a++; 
// }

// var a=1;
// while(a<=100){
// 	
// 	if(a%2==1){
// 	document .write(a+"<br>");
// 	}
   // a++;
// } 


// var a=100;
// while(a<=999){
// 	
// 	var b=a%10;
// var c=parseInt(a%100/10);
// var d=parseInt(a/100);
// var e=b*b*b+c*c*c+d*d*d;
// if(a==e){
// 	document.write(a+"<br>");
    
//  }
// a++;
// }

//while语句
// var a=1;
// while(a<10){
// 	document .write(a);
// 	a++;
// }



// //do while语句
// var num=1;
// do{
//   document .write(num="Hello World!");
// }
// while(num<10);


//for语句
//先执行再循环
// for(a=1;a<10;a++){
// 	document .write(a);
// }


//1.输出数字11-40,每五个换一行;
//2.输出1-100中所有的奇数;
//3.输出100-999中所有的水仙花数;
// for(a=11;a<=40;a++){
// 	document.write(a);
// 	if(a%5==0){
// 		document.write("<br>");
// 	} 
// }
// for(a=1;a<=100;a+=2){
// 	document.write(a);
// 	if(a%2!=0){
// 		document.write(" ");
// 	} 
// }
// for(a=100;a<=999;){
// 	// document.write(a);
// 	var b=a%10;
// 	var c=parseInt(a/10%10);
// 	var d=parseInt(a/100);
// 	var e=b*b*b+c*c*c+d*d*d;
// 	if(a==e){
// 		document.write(a+"是水仙花数<br>");
// 	}
// 	a++;
// }

var num=0;
for(i=1;i<=10;i++){
	if(i%2==0){
		document. write(i+" ");
		num=num+i;
	}
}
document.write(num);




