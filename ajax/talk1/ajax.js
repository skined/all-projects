function ajax(type,url,data,success,fail){
	var xhr=null;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject('Microsoft.XMLHttp');
	}
	var times=new Date().getTime();
	//var random=Math.random();
	if(typeof data=='object'){
		str='';
		for(key in data){
			str+=key+'='+data[key]+'&';
		}
	}
	if(type==='get'){
		if(data){
			xhr.open(type,url+'?'+data+'&'+times);
		}else{
			xhr.open(type,url+'?'+times,true);
		}
		xhr.send();

	}else if(type==='post'){
		xhr.open(type,url,true);
		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
		if(data){
			xhr.send(data);
		}else{
			xhr.send();
		}
	}
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