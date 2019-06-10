//隐式转换
var a=11;
var b='22';
var c=a+b;
console .log(c);

console .log(Number(undefined));
//如果为undefined,返回NaN
console .log(Number(null));
//如果是null则返回为0
console .log(Number(true));//如果是布尔值true和false值将分别转换为1和0
// 如果是字符串将遵循以下规则；
//（1）如果字符串只包含数字时，则将其转换为十进制；
console .log(Number("00222"));
//(2)如果字符串为有效的浮点方式，则将其转换为有效的浮点值（忽略前导0）；
console .log(Number("0151.15"));
//(3)如果是空字符串则将其转换为0；
console .log(Number(""));
//(4)如果空字符串出现非以上格式，则将其转换成NaN;
console .log(Number("25*"));
//(5)如果是对象的话则将其转换为NaN
var obj={
	name:"!3233"
}
console .log(Number(obj));


console .log( parseInt(012));
console .log(parseInt(0x1f));
// 递增(++)
//当a++时，先赋值后加减
//当++a时，先加减后赋值
var num=10;
 var a=10;
 var b = a++;
 console .log(a,b);
 //先赋值后加减
 var a=10;
 var b=++a;
 console .log(a,b);
 //先加减后赋值
 a=2;
 b=3;
 c=4;
 console.log((a++)+(--a)+(c--)+(++b)+(a--));
var a=1; 
var b=2;
console .log((a++)+(b++)); 
var a=2;
var b=4;
console .log((b--)+(--a)-(b++)+(a++));
var a=5;
var b=6;
var c=2;
console .log((c--)-(c++)+(--c)-(++a)+(--b));
var a=2;
var b=5;
var c=10;
console .log((--b)-(b++)+(--a)-(a++)+(c--)+(++c));
var a=10;
var b=3;
var c=5;
console .log((--c)+(b++)-(++a)+(c++)-(a--)+(++b));
var a=10;
var b=3;
var c=5;
console.log((a++)+(a--)-(b++)+(c--)+(--b));
