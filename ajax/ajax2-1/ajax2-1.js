function ajax(type,url,data,success,fail){
	var xhr=null;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject(Microsoft.XMLHttp);

	}
	//定义一个变量用于做缓存处理
	var times=new Date().getTime(); //时间戳
	//var random=Math.random();
	var str;
	if(typeof data=='object'){
        str='';
        for(key in data){
		str+=key+'='+data[key]+'&';
	}
	}
    console.log(str);
	//2.建立连接
	if(type==='get'){
	if(data){
		xhr.open(type,url+'?'+'&'+times);
	}else{
		xhr.open(type,url+'?'+times,true);
	}
	//3.发送请求
	xhr.send(); //xhr.send(null);

}else if(type==='post'){
	xhr.open(type,url,true);
	xhr.setRequestHeader('content-type,application/x-www-form-urlencoded');
	if(data){
		xhr.send(data);//需要将数据发送到后台
	}else{
		xhr.send();
	}
}
//4.等待响应
  xhr.onreadystatechange=function(){
  	if(xhr.readyState==4){
  		if(xhr.status==200){
  			success && success(xhr.responseText);
  		}else{
  			fail(xhr.status);
  		}
  	}
  }
}




