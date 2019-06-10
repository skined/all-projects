function ajax(type,url,data,success,fail){
	          var xhr = null;
			// 1.	//创建ajax对象，并做兼容处理
				if(window.XMLHttpRequest){
					xhr = new XMLHttpRequest();
				}else{
					xhr = new ActiveXObject('Microsoft.XMLHttp');
				}
				//定义一个变量，用于缓存处理
				var times = new Date().getTime();//时间戳
				// var random = Math.random();
				if(typeof data=='object'){
					  str='';
					//name='ee' & age=23,
					for(key in data){
						  str+=key+'='+data[key]+'&';
					}
				}					
			//2.建立链接
			    if(type =='get'){
			    	if(data){
			    		xhr.open(type,url+'?'+data+ '&' + times);
			    	}else{
			    		xhr.open(type,url+'?'+times,true);  
			    	}
				
			//3.	//发送请求
				  xhr.send();  //xhr.send(null)
				}else if(type == 'post'){

                  xhr.open(type,url,true);
                  //请求头
                  xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
                  if(data){
                  	xhr.send(data);//需要将数据发送到后台
                  }else{
                  xhr.send();
				}	
			}
	   		//4.	//等待响应
				xhr.onreadystatechange = function(){				
					// 判断工作状态
		    	if(xhr.readyState == 4){
		    		//判断服务器的状态
		    	   if(xhr.status == 200){
                       success && success(xhr.responseText);
                      
                       }else{
                       	fail(xhr.status);
                       }
		    	   }
		    	}	
		   }
			  

