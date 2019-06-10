//1.求100以内的质数和
//将零到一百一一遍历一遍，
//设置一个计数变量，用来记录可以整除一个数的个数。
//将0~100中可以被整除的数显示出来。
// var sum=0;
// for(i=0;i<=100;i++){
// 	var num=0;
// 	for(j=0;j<=i;j++){
// 		if(i%j==0){
//          num++;
// 		}
// 	}
// 	if(num==2){
// 		sum+=i;
// 	}
// }
// console.log(sum);

//创建一个接受乘积的变量
// var cj=1;
// for(i=0;i<=20;i++){
// 	if(i%3==0&&i%5==0){
// 		cj*=i;
// 	}
// }
// console.log(cj);
//珠穆朗玛峰高8848米,一张纸的厚度为0.01米,问叠多少次可以达到珠穆朗峰的高度。
//首先创建一个变量,记录折叠纸的折叠数。
// var num = 0;
// for(i=0.01;i<8848;i*=2){
// 	num++;
// 	// num+=i;
// }
// console.log(i);


//一月份有一对幼兔,
//二月份有一对幼兔，
//三月份有一对成年兔和幼兔,说的是第二十个月总共有多少兔子？
//所有的兔子分三种情况:幼兔、小兔、成年兔;
//如果第一个月就有一对幼兔，
//第二个月有一对小兔,第三个月有一对小兔和成年兔。
// for(i=1;i<=20;i++){
// 	if(i==1){
// 		yt=1;
// 		lt=0;
// 		at=0;
// 	}
// 	else{
// 		var a=yt;
// 		yt=at;
// 		at=lt+at;
// 		lt=a;
// 	}
// }
// console.log(yt+lt+at);

//现有[1,2,3,4,5]使用prompt语句来实现向数组中添加数据，
//并且要判断，如果添加的重复项，就alert出您输入的数据已存在，如果不重复就添加到当前数据中。
// var arr1=[1,2,3,4,5];
// var item=prompt("请您输入一组数组");
// for(i=0;i<arr1.length;i++){
	//创建一个标记变量,来标记当前输入数组项是否重复
	//0表示不重复,1表示重复
// 	var flag=0;
// 	if(item==arr1[i]){
//       flag=1;
//       break;
// 	}
// }
//判断flag的值
// if(flag==1){
// 	alert("您输入的数组已存在");
// }
// else{
	//向数组追加数组项
	//数组名就是添加进去的最后一项
// 	arr1[arr1.length]=item;
// 	console.log(arr1);
// }


//用for循环找出一组数组中的最大值
// var arr=[12,55,655,123,45648];
// var max=arr[0];
// for(i=0;i<=arr.length;i++){
// 	if(arr[i]>=max){
// 		max=arr[i];
// 	}
	
// }
// console.log(max);
 

// var arr=[1,2,3,4,5];
// var item=prompt("请您输入一组数组");
//  for(i=0;i<arr.length;i++){
// 	var flag=0;
// 	if(item==arr[i]){
// 		flag=1;
// 		break;
// 	}
// 	}if(flag==1){
// 		alert("您输入的数据已存在");
// 	}else{
// 		arr[arr.length]=item;
// 		 console.log(arr);
// 	}
//数组
// var arr=[1,2,3,4,5];
// arr.push('name');
// console.log(arr);
//push向数组尾部添加元素
// var arr =[1,2,3,4,5];
// arr.pop();
// console.log(arr);
//必须用小括号将他括起来；
//pop将数组的最后一项删减掉;
// var arr=[1,2,3,4,5];
// arr.unshift('yj');
// console.log(arr);
//shift与unshift前者将开头删去，后者给开头添加数组；

//封装一个添加数组的函数,
// var a=[1,2];
// function pushDemo(arr,item){
//   arr[arr.length]=item;
//   console.log(arr);
// }
// pushDemo(a,'a');
// var a=[1,2,3];
// function pushDemo(arr,item){
// 	arr[arr.length]=item;
// 	return arr;
// }
// console.log(pushDemo(a,'name'));

//删减函数的封装;
// function popDemo(arr){
//    arr.length--;
//    return arr;
// }
// console.log(popDemo([1,2,3,4]));
 // function popDemo(arr){
 // 	arr.length--;
 // 	console.log (arr);
 // }
 // popDemo([1,2,3,4]);
// 将一组数据从大到小排列
// 冒泡排列
// var arr=[15,12,73,465];
// function fn(arr){
// 	for(i=0;i<=arr.length;i++){
// 		for(j=i+1;j<=arr.length;j++){
// 			if(arr[i]>arr[j]){
// 				var num=arr[i];
// 				arr[i]=arr[j];
// 				arr[j]=num;
// 			}
// 		}
// 		return arr;
// 	}

// }
// fn(arr);
// console.log(arr);
//上述封装的函数只能添加一个函数
//但如果要添加多个数组怎么实现呢
// var arr=[1,2,3];
// function fn(arr){
// 	//创建一个空数组用来存放要添加的元素
// 	var item=[];
// 	//循环找到除arguments的第一项的所有元素;
// 	for(i=0;i<arr.length-1;i++){
//         item[i]=arguments[i+1];
// 	}
// 	console.log(item);   
// 	//数组的总长度
// 	var len=arr.length+arguments-1;
// 	//将原数组的总长度存储起来
// 	var s=arr.length;
// 	for(i=arr.length;i<len;i++){
// 		arr[i]=item[i-s];
// 	}
// 	return arr;
// }
// fn(arr);
// console.log(arr,12,3);


// 猴子每天吃掉桃子总数的一半，
// 把剩下一半中扔掉一个坏的。
// 到第七天的时候，猴子睁开眼发现只剩下一个桃子。
// 公园里刚开始有多少个桃子？
// 公园里有一只猴子和一堆桃子，
//用for循环写出公园还剩多少桃子
//可用逆推思维来解决这道问题
// 设桃子为peach,从第一天开始,到第六天，
//第七天剩1个桃子那就按他推使用for循环推回去
//由题可得这么个式子每天吃掉总数的一半，然后剩下一半有个坏的扔掉了
//可得:peach=(peach+1)*2,第六天到第一天for循环即可得结果。
// function pea(){
// 	var peach=1;
// 	for(i=1;i<=6;i++){
// 		peach=(peach+1)*2;
		
// 	}
// 	console.log(peach);
// }
// pea();


//说有组数组arr[1,54,234,215]用for循环找到其中的最大值，
//并且计算这组数组的平均值。
// var arr=[1,54,234,215];
// var max=arr[0];
// for(i=0;i<=arr.length;i++){	
//   if(max<=arr[i]){
//   	max=arr[i];
//   }
// }
// console.log('最大值:'+max);
// // var arr=[1,54,234,215];
// var min=arr[0];
// for(i=0;i<=arr.length;i++){
// 	if(min>=arr[i]){
// 		min=arr[i];
// 	}

// }
// console.log('最小值:'+min);
// // var arr=[1,54,234,215];
// var sum=0;

// for(i=0;i<arr.length;i++){
//     sum=sum+arr[i];  
// }
// console.log('和:'+sum);
// console.log('平均值:'+sum/arr.length);



// var arr=[1,54,234,215];
//使用函数算最大值，平均值，最大值，最小值
// function fn(arr){
// 	   var sum=0;
//     var min=arr[0];
//     var max=arr[0];
// 	for(i=0;i<arr.length;i++){
//        sum=sum+arr[i];
//       document.write('和:'+sum+' ');
//       document.write('平均值:'+sum/arr.length+'<br>');
//       if(arr[i]<=max){
//       	max=arr[i];
//       }
//       if(arr[i]>=min){
//       	min=arr[i];
//       }
// 	}
// 	  document.write('最大值:'+max+'<br>');
// 	  document.write('最小值:'+min+'<br>');
// }
// fn([1,54,235,215]);
// 5文钱可以买一只公鸡，
// 3文钱可以买一只母鸡，
// 1文钱可以买3只雏鸡。
// 现在用100文钱买100只鸡，
// 那么各有公鸡、母鸡、雏鸡多少只？
// var num=0;
// for(i=0;i<=20;i++){
// 	for(j=0;j<=33;j++){
// 		for(k=0;k<=300;k++){
// 			if(i+j+k==100&&i*5+j*3+k/3==100){
// 				num++;
// 				console.log('公鸡:'+i+'母鸡:'+j+'雏鸡:'+k);
// 			}
// 		}
// 	}
// }

// var arr=[1,2,3,4,5];
// var item=prompt("请输入数组项:");
// for(i=0;i<arr.length;i++){
// 	var flag=0;
// 	if(item=arr[i]){
// 		flag=1;
// 		break;
// 	}
// }
// if(flag=1){
// 	alert("您输入的数据已存在");
// }
// else{
// 	arr[arr.length]=item;
// 	console.log(arr);
// }



