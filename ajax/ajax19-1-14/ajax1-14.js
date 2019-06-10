function ajax(type,url,data,success,fail){
	var xhr=null;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr= new ActiveXObject('Microsoft.XMLHttp');
	}
	if(typeof data='object'){
		for(key in data){
			str=''
		}
		str+=key+'='+data[key]+'&';
	}
	var time=new Date().getTime();
	if(type=='get'){
      if(data){
      	xhr.open(type,url+'?'+data+'&'+time);
      }else{
      	xhr.open(type,url+'?'+time,true);
      }
      xhr.send();//xhr.send(null);
	}else if(type=='post'){
		xhr.open(type,url,true);
		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
		if(data){
			xhr.send(data);
		}else{
			xhr.send();
		}
	}
    xhr.onreadystatechange=function(){
    	if(xhr.readyState==200 || xhr.readyState==304){
    		if(xhr.status==4){
    			console.log(xhr.responseText);
    		}else{
    			fail(xhr.status);
    		}
    	}
    }
}