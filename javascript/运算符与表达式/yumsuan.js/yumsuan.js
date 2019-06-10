

//var a = prompt("请输入你的颜值分数？");
//var b = a > 80 ? "丑的一比":"还是很丑"
//alert(b);
//条件运算符
// var a=prompt("你是大帅哥吗？")
// var b=(a ? "是的，我真的很帅！": "不是，你错了");
// alert(b);
//逻辑与&&
// var name=prompt("输入你的姓名？");
// var age =prompt("输入你的年龄？");
// var b =name=="舒浩奇" && age=="8" ?
// "小朋友你真好":"你走开，我妈不让我跟你玩"
// alert(b);
//逻辑或|| 
// var name="maomao";
// var age="20";
// var b =name=="maomao" || age=="39"?"帅呆了":"不好看"
// console .log(b);

// var meng={ 
//         name:"mengqi",
//         age:"18",
//        fn:function(){
//      	alert:("会唱歌");
//      }
// }
// var arr=["a","b","c"];
// console .log(arr[a]);
//函数和数组

// var a=prompt("请输入你的成绩");
//  var b = 
//          a>=90? "优秀":
//          a>=70? "良好":
//          a>=60? "合格" :
//          a<60? "不合格":
//          "";
// alert(b);



// var a=prompt("请输入自己的身高");
// var b=prompt("请输入自己的体重");
// var klt=b/(a^2);
// var c=
//        klt>25?"你胖了":
//        klt<20? "你瘦了":
//        "你身材很不错哦";     
// alert(c);

 


//条件语句

// var str=prompt("看到我的小熊了吗");
// if (str=="看到了"){
// 	console .log("哦，那我只好杀人灭口了");
// }else{
// 	console .log("那我再找找看");
// }



// var str=prompt("请输入你的成绩");
// if(str>=60){
// 	console. log("及格");
// }else{
// 	console .log("不及格");
// }



// var height=prompt("请输入你的身高");
// var weight=prompt("请输入你的体重");
// var klt   = weight/(height*height);
// if(klt>25){
// 	console .log("你胖了");
// }else if(klt<20){
// 	console .log("你瘦了");
// }else{
// 	console .log("正常");
// }




// var date= prompt("今天星期几？");
// if(date=="1"){
// 	console .log("今天星期一");
// }else if(date="2"){
//      console .log("今天周二")
// }else if(date="3"){
//      console .log("今天周三")
// }else if(date="4"){
//      console .log("今天周四")
// }else if(date="5"){
//      console .log("今天周五")
// }else{
//      console .log("今天周末出去浪了！")
// }

// var number=prompt("请输入一个数字？");
// if (number%2==1){
// 	console .log("奇数");
// }else {
// 	console .log("偶数");
// }

 

// var year=prompt("请输入年份？");
// if(year%4==0 && year%100!=0){
// 	console .log("闰年");
// }

// var price=prompt("请输入商品的价格？");
//  if(price>=5000 && price*0.6){
// 	console .log(price*0.6);
// }else if(price>=3000 && price*0.8){
// 	console .log(price*0.8);
// }else if(price>=1500 && price*0.95){
// 	console .log(price);
// }else if(price<1500){
//     console .log("不打折扣");
// }

// 显示三位数的每一位数字
var num=prompt("请输入一个数字？");
var a=(num%10);
var b=parseInt(num%100/10);
var c=parseInt(num/100);
console .log(b);
