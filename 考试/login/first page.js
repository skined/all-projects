$('.add').on('click',function(){
	if($(this).html() == "-"){
		$(this).css('color','#fff').prev().css('color',"#fff");
		$(this).css('color','#fff').prev().prev().css('color',"#fff");
		$(this).html("+").parent().next().css('display','none')
		$(this).parent().css('background','#404E64');
	}else{
		$('.firstpage').css('color','#fff').prev().css('color','#fff')
		$(this).css('color','red').prev().css('color',"red");
		$(this).css('color','red').prev().prev().css('color',"red");
		$(this).html("-").parent().next().css('display','block')
		$(this).parent().css('background','#333F51');
	}
})

$('.new').on('click',function(){
	$('.newdiv').slideDown(100);
	$(".mask").css('display',"block");
})
$(".close").on('click',function(){
	$('.newdiv').slideUp(100);
	$(".mask").css('display',"none");
})

$('.labsel2').focus(function(){
	$('.labspan').css('display','block');
	$('.labspan').html('请填写IP地址').css('color','#9E9E9E');
})
$('.labsel2').blur(function(){
	var text = $('.labsel2').val();
	var reg =  /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/ 
	if($('.labsel2').val() == ""){
		$('.labspan').html('IP地址不能为空').css('color','red');
		return;
	}
	if(!(reg.test(text))){
		$('.labspan').html('格式不正确').css('color','red');
	}else{
		$('.labspan').html('');
	}
})
$('.labfalse').on('click',function(){
	$('.labop1').attr('selected',true);
	$('.labsel2').val("");
	$('.labspan').html('');
	$('.labop2').attr('selected',true);
})
$('.labtrue').on('click',function(){
	var td2 = $('.labsel1 option:selected').text();
	var td3 = $('.labsel2').val();
	var reg =  /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/ 
	var td4 = $('.labsel3 option:selected').text();
	var td5 = $('.labsel4 option:selected').text();
	if(reg.test(td3)){
		$('.newdiv').slideUp(100);
		$(".mask").css('display',"none");
		$('<tr><td id="td"><input type="checkbox"  class="check"/></td>' + '<td><span class="tbtxt">' + td3 + '<span></td><td><span class="tbtxt">' + td4 + '</span></td><td><span class="tbtxt">' + td5 + '</td><td><span class="tbtxt">已占用</span></td><td><span class="iconfont icon-chilun write"></span> <span class="iconfont icon-shigong-copy delete"></span></td></tr>').appendTo($('.clound-table'))
	}
	console.log(num)
})


var index = 0;
var num = $('.clound-table tr').size();
$('.checks').on('click',function(){
	if($('.checks').prop("checked")){
		index = num;
		$('.check').prop('checked',true);
	}
	if(!($('.checks').prop("checked"))){
		index = 0;
		$('.check').prop('checked',false);
	}
})


$('.check').on('click',function(){
	if($(this).prop("checked")){
		index++
		if(index == num){
			$('.checks').prop('checked',true);
		}
	}
	if(!($(this).prop("checked"))){
		index --;
		if(index < num){
			$('.checks').prop('checked',false);
		}
	}
})

$('.del').on('click',function(){
	$('.mask').css('display','block');
	$('.alldel').slideDown(50);
	$('.alldel-close').on('click',function(){
		$('.mask').css('display','none');
		$('.alldel').slideUp(50);
	})
	$('.alldel-txt2').on('click',function(){
		$('.mask').css('display','none');
		$('.alldel').slideUp(50);
	})
	
	$('.alldel-txt').on('click',function(){
		var check = $('.check')
		var tbody = $('.clound-table');
		for(var i = 0; i < check.length; i++){
			if(check[i].checked){
					var p = check[i];
					$(p).parent().parent().remove();
				$('.mask').css('display','none');
				$('.alldel').slideUp(50);
			}

		}
	})
})

$('.click-menu').on('click',function(){
	$('.click-menu').css('color','#fff');
	$(this).css('color','red');
	if($(this).hasClass('network') || $(this).hasClass('manage')){
		$('.nowrite').css('display','none');
		$('.clound').css('display','block');
		$('.system').css('display','none');
	}else{
		$('.nowrite').css('display','block');
		$('.clound').css('display','none');
	}
	if($(this).hasClass('manage')){
		$('.system').css('display','block');
		$('.clound').css('display','none');
	}else{
		$('.system').css('display','none');
	}
})
$('.clound-table tr:odd').css('background',"#F9F9F9");

