$('input').focus(function(){
	$(this).css('outline-color','limegreen').next().css('display',"block");
	if($(this).next().attr('class') == "_nameeText"){
		$(this).next().html("中文、字母、数字、下划线、以中文或字母开头").css("color","#ccc")
	}
	if($(this).next().attr('class') == "passText"){
		$(this).next().html("6-20位英文(区分大小写)、数字、字符的组合").css("color","#ccc")
	}
	if($(this).next().attr('class') == "codeText"){
		$(this).next().html("请输入右侧验证码").css("color","#ccc");
	}
})

$('input').blur(function(){
	var val = $(this).val()
	if(val == ""){
		if($(this).next().attr('class') == "_nameeText"){
			$(this).next().html("用户名不能为空").css('color','red')
			var testname = /^[a-zA-Z0-9_-\u4e00-\u9fa5]{4,16}$/.test(val);
			return;
		}
		if($(this).next().attr('class') == "passText"){
			$(this).next().html("密码不能为空").css('color','red')
		}
		if($(this).next().attr('class') == "codeText"){
			console.log($(this).next().next().html())
			if(val == ""){
				$(this).next().html("验证码不能为空").css('color','red')
				return;
			}
			console.log(val)
			if(val != $(this).next().next().html()){
				// $(this).next().html("验证码错误").css('color','red')
				console.log(1)
			}
		}
	}else{
		$(this).next().html("")
	}
	
	if($(this).next().attr('class') == "_nameeText"){
		var testname = /^[a-zA-Z\u4E00-\u9FA5]\w{0,17}$/.test(val);
		if(!testname){
			$(this).next().html("用户名填写规则不正确").css('color','red')
		}
	}
	if($(this).next().attr('class') == "passText"){
		var testpass = /\w{6,20}/.test(val);
		if(!testpass){
			$(this).next().html("密码填写规则不正确").css('color','red')
		}
	}
	if($(this).next().attr('class') == "codeText"){
		var upval = val.toUpperCase();
		if(upval != ($(this).next().next().html()).toUpperCase()){
			$(this).next().html("验证码错误").css('color','red');
			$('.true').css('display','none');
		}else{
			$('.true').css('display','block');
		}
	}
})

$('.eye').on('click',function(){
	if($(this).hasClass('iconfont icon-hah')){
		$(this).removeClass('iconfont icon-hah');
		$(this).addClass('iconfont icon-yanjingguanbi');
		$(this).prev().prev().attr('type','text');
	}else{
		$(this).removeClass('iconfont icon-yanjingguanbi');
		$(this).addClass('iconfont icon-hah');
		$(this).prev().prev().attr('type','password');
	}
})

$(".codetext").on('click',function(){
	var str = ""
	var arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	for(var i = 0; i < 4; i++){
		var math = parseInt(Math.random()*(35-0+1)-0);
		console.log(math)
		str += arr[math];
		$(this).html(str);
	}
})

$('.login').on('click',function(){
	if($('._nameeText').html() == "" && $('.passText').html() == "" && $('.codeText').html() == ""){
		window.location.href = "first page.html";
	}
})
