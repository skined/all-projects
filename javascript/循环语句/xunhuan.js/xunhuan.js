// 1.找到1-100之间能被3整除,但是不能被4和7整除的数字
// 2.计算出1-100之间奇数的和
// 3.完成一个数字游戏,打印1-100之间的数字,
// 		如果该数字个位数为3则打印'apple',
// 		十位为3则打印'pen',
// 		个位和十位都为3则打印'applepen'
// 4.求8的阶乘
// 5.利用循环打印如下图形
// 			*****
// 			*****
// 			*****
// 			*****
// 			*****
// 6.利用循环的嵌套打印如下图形
// 			*
// 			**
// 			***
// 			****
// 			*****
// 7.输出一个九九乘法表
// var a=1;
// while(a<=100){
//    if(a%3==0){

//    }
//    else if(a%4!=0,a%7!=0){
//    	document.write(a+" ");
//    }
//     a++;
// }


//  var sum=0
// for(a=1;a<=100;a++){
// 	if(a%2!=0){
// 		sum = sum + a ;
// 	}
// }
// document .write(sum);


// for(a=1;a<=100;a++){
// 	if(a%10==3){
// 		document.write("apple"+" ");
// 	}
//     else if(parseInt(a/10%10==3)||parseInt(a%10==3)){
//     	document.write("applepen"+"<br>");
//     }
// }



// var k=1;
// for(n=1;n<=8;n++){
// 	k*=n;
	
// }
// document.write(k);



// for(a=1;a<=25;a++){
// 	document.write("*"+" ");
// 	if(a%5==0){
// 		document.write("<br>");
// 	}
// }


// for(a=1;a<=5;a++){
// 	for(b=1;b<=a;b++)
// 	document.write("*"+" ");
//     document.write("<br>");
// }

// for(i=1;i<=9;i++){
// 	for(j=1;j<=i;j++){
// 	document.write(i+"*"+j+"="+j*i+" ");

// 	}
// 	document.write("<br>");
// }

//倒立的三角星号
// *****
// ****
// ***
// **
// *
// for(a=0;a<5;a++){
// 	for(b=0;b<(5-a);b++)
// 	document.write("*");
// 	document.write("<br>")	
// }

// for(i=1;i<=5;i++){
// for (j=1;j<=i;j++){
// 		document.write("*");
// 	 }	
// 	document.write("<br>");
// }


//倒立的三角星号
// for(i=0;i<5;i++){
// 	for(j=5;j>i;j--){
// 		document.write("*");
// 	}
//  document.write("<br>");

// }

// for(i=0;i<=20;i++){
// 	document.write("老师真帅!"+"<br>");
// 	if(i>=10){
// 		continue;
// 	}
// }
















//for in语句
//  var arr=["段伯伊","谢尚右"];
//  for(x in arr){
//  	document.write('<p>'+arr[x]+'</p>');
//  }
// var obj={name:"chaowei",age:"15"};
// for(i in obj){
// 	document.write('<p>'+obj[i]+'</p>');
// }
// num=1;

//跳转语句；
// for(a=0;a<=20;a++){
// 	document.write(a);
// 	if(a>=10){
// 		break;
// 	}
// }
//break结束当前循环，跳出当前循环
// for(a=0;a<=20;a++){
// 	var g=a%10;
// 	if(g==3){
// 		continue;
// 	}else{
// 		document.write(a);
// 	}
// }
//continue忽略当前语句，结束此循环，开始下一轮的循环;







// 1.求1-300能被3整除或者能被7整除的所有的数的和，
// 如果和大于200直接退出
// 2.使用js输出一个5行4列的表格
// 3.大马驮2石粮食，中马驮1石粮食，两头小马驮一石粮食，
// 要用100匹马，驮100石粮食，该如何调配？
// 4.　□□□□● 
// 　　□□□●●	
// 　　□□●●●	
// 　　□●●●●	
// 　　●●●●●
// var num=0;
// for(a=1;a<=300;a++){
// 	// document.write(a+"<br>");
// 	if(a%3==0 || a%7==0){
// 		// document.write(a+"<br>");
// 		num=num+a;
// 	}if(num>200){
// 	  break;
// 	}
	
// }
// document.write(num);

// var c = "<table border='1px' cellspacing='0'>";
// for(i=1;i<=5;i++){
// 	c+="<tr>";
// 	for(j=1;j<=4;j++){
// 		c+="<td>"
// 		+i+"行"+j+"列"+"</td>";
// 	}
// 	c+="</tr>";
// } 
// c+="<table>";
// document.write(c);


//大中小马的第一种方法
// for(i=1;i<=50;i++){
// 	for(j=1;j<=100;j++)
//     for(k=1;k<=200;k++)		
//     if(i*2+j+0.5*k==100 && i+j+k==100){
//     	document.write("大马:"+i+"中马:"+j+"小马:"+k+"<br>");
//     }
// }
//大中小马的第二种方法
// var i=1;
// for(a=0;a<=50;a++){
// 	for(b=0;b<=100;b++){
// 	var c=100-a-b;
// 	if(a*2+b+c*0.5==100 && a+b+c==100){
// 		document.write('第'+i+'种情况:'+'大马:'+a+'中马:'+b+'小马:'+c+"<hr>");
		
// 	}
// 	}
// }




// for(var x=1;x<=5;x++){
//                  for(var y=1;y<=5-x;y++){
//                      document.write('□');
//                  }
//                  for(var z=1;z<=x;z++){
//                      document.write('●');
//                  }
//              document.write('<br />');
//              }

      // for(var i = 4;i >= 0;i--){
      //           for(var j = 1;j <=i;j++){
      //               document.write("□",);    
      //           }
      //           for(var f = 4;f >= i;f--){
      //               document.write("●");    
      //           }
      //           document.write("<br/>")
      //       }





//函数是由事件驱动的或者它被调用时执行的可重复使用的代码块。
// function fn(){
// 	console.log("函数声明");
// }
// fn();


// var demo2=function a(){
// 	console.log("命名函数");
// }
// demo2();




// var demo=function name(){
// 	console.log("匿名函数");
// }
// demo();

// function sum(a,b){
// 	alert(a+b);
// }
// sum(1,3);
// sum(2,4);
// sum(1,8);

//用function函数创建表格;
// function createTable(rows,cols){
// 	document.write('<table border="1">')
// 		for(i=0;i<rows;i++){
// 			document.write('<tr>')
// 			for(j=0;j<cols;j++){
// 				document.write('<td></td>')
// 			}
// 			document.write('</tr>')
// 		}
// 		document.write('</table>')
// 	}
// 	createTable(5,4);




//1.定义一个函数,进行传参name,what,money三个值
//输出 字符串name今天去餐馆点餐:what;
//付钱:money;之后回宿舍了
//2.定义一个函数,用户输入年龄和身高;
//当年龄小于等于14岁或者身高小于等于140时,火车票半价
//3.定义一个函数,用户输入金额,计算用户所需付钱金额;
//金额500元以上,8折
//金额350元以上,9折
//金额200元以上,赠送纪念小礼品


// var sum=function name(name,what,money){
// 	// var name="mengqi";
// 	document.write(name+"今天去餐馆点餐:"+what+"<br>");
// 	document.write("付钱:"+money+";"+"之后回宿舍了");
// }
// sum("fengkailong","刀削面","23");



// var sum=function name(age,height){
// 	document.write(age);
// 	document.write(height);
// 	if(age<=14 || height<=140){
// 		document.write("火车票半价");
// 	}
// }
// sum("12","130");


// var num=function name(price){
// 	document.write(price);
// 	if(price>500,price*0.8){
// 		document.write(price);
// 	}
// 	else if(price>350,price*0.9){
// 		document.write(price);
// 	}
// 	else if(price>200){
// 		document.write(赠送小礼品);
// 	}
// }
// num("501","350","201");



//arguments用来接受函数所传递的实参;
// function sum(){
// 	for(i=0;i<=arguments.length;i++){
// 		console.log([i]);
// 	}
// }
// sum(1,2,3,4,5);


// function say(name,what,money){
//     return name+'今天去餐馆点餐:'+what+
//     '付钱:'+money+';'+'之后回宿舍了'+'<br>';
// }
// document.write(say('小海','刀削面','23'));
// var say=function name(name,what,money){
// 	document.write(name+"今天去餐馆点餐:"+what);
// 	document.write("付钱:"+money+";"+"之后回宿舍了");
// }
// say("小海","刀削面","23");


// 2.定义一个涵数，[1,6,0,4,5,87,34,3]
// 找到数据中的最大值和最小值和他们的总和，平均数;
//3.创建一个函数,实现求外部传递进来三个数据的和,并将结果返回;
//4.创建一个函数,将下面数组传递到函数中,求数组中值为奇数的数字的平均值求出来;
//[0,1,2,3,4,5,6,7,8,9]
//5.定义一个函数,在页面中输出1-1000之间所有能被3,5,7整除的整数,要求每行显示6个数字;
//6.创建两个按钮,当点击第一个按钮‘瘦’时,弹出他们都说我很瘦;
//点击第二个按钮‘胖’时,弹出我咋胖的没边儿了呢



// function shuzu(arr){	
//    var sum=0;	
// 	max=arr[0];
// 	min=arr[0];
//  for(i=0;i<=arr.length;i++){
//  	sum=sum+arr[i];
//  	document.write("和:"+sum+" ");
//  	document.write("平均值:"+sum/arr.length+" ");
//  	if(arr[i]>max){
//  		max=arr[i];
//  	}
//  	if(arr[i]<min){
//  		min=arr[i];
//  	}
//  	document.write("最大值:"+max+"<br>");
//  	document.write("最小值:"+min+"<br>")
//  }   
// }
// shuzu([1,6,0,4,5,87,34,3]);






// function jia(i,j,k){

//     l=j+k+i;
// 	alert(l);
// }
// jia(4,6,5);



// function  sum(arr){
//    var num=0;
//    for(i=0;i<=9;i++){
//    	if(i%2!=0){
//        	document.write(i+"<br>");
//        	num=num+i;
//        	document.write(num/5);  
//    	}
//    } 
//  }
// var arr=[0,1,2,3,4,5,6,7,8,9];
// sum();




// function number(){
// 	for(a=1;a<=1000;a++){
		
// 		if(a%3==0 && a%5==0 && a%7==0){
//            document.write(a+" ");
            
// 		  if(a%6==0){
// 			document.write("<br>");
// 		}		
// 		}
// 	}
// }
// number();





// function 瘦(){
// 	alert("他们呢都说我很瘦");

// }
// 瘦();
// function 胖(){
// 	alert("我咋旁的没边了呢");
// }
// 胖();



//1.100以内的质数和。
//2.100以内能被3整除又能被5整除的数的乘积。
// var num=0;
// var sum=0; 
// for(i=0;i<=100;i++){
// 	for(j=1;j<=i;j++){
// 		if(i%j==0){
// 			num++;
// 		}
// 	}
// 	if(num==2){
		
// 		sum++;
		
// 	}
	
// }
// console.log(sum);


// var num=0;
// for(a=0.01;a<=8848;a*=2){
//      num+=a;
// 	}


// console.log(num);


//珠穆朗玛峰高度为8848米,一张纸宽度为0.01米,
//问需要折叠多少次才可达到珠穆朗玛峰的高度。
// var Num=0;
// for(a=0;a<=8848;a++){
// 	for(b=0;b<=0.01;b++){
// 		Num=a%b==0;
		
// 	}
// }
// console.log(Num);


//斐波那契数列1,1,2,3,5,8
//第一个月有一对兔子,第二个月为成熟期,
//第三个月为成熟期开始生小兔子(每对成熟期兔子每个月只能生两对)。
//a成熟期的兔子数
//幼兔:yt
//小兔:lt
//成年兔:at
// var num=1;
// var a=lt=1;
// for(i=1;i<=20;i++){
// 	if(i==1){
//       yt=1;
//       lt=0;
//       at=0;
// 	}
//  else if(i==num){
//  	 yt=at;
//  	 at=lt;
//      lt=a+yt;

//  }
// num+=i;
// }
// console.log(i);

//到银行存钱,存五年,上一年的本金和利息都会存到下一年,利率为3%，for循环5年的本金和利息总共。
// var num=10000;
// for(i=1;i<=5;i++){
//   num=num*(1+0.03 );
//   num++;
// }
// console.log(num);


// var item=prompt("请添加几个数");
// for(a=0,a<=100;a++){   
// }


//封装一个求数组最大值的函数
                 

