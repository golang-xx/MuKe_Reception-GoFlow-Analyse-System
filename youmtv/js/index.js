function switchTab(a, b, c, d, e) {
    try {
        for (i = 0; i < c; i++) {
            var f = document.getElementById("Tab_" + a + "_" + i),
            g = document.getElementById("List_" + a + "_" + i);
            if (i != b) {
                f.className = e;
                g.style.display = "none"
            }
        }
        document.getElementById("Tab_" + a + "_" + b).className = d;
        document.getElementById("List_" + a + "_" + b).style.display = ""
    } catch(j) {}

}


$(document).ready(function(){
  $(".mov").hover(function(){
  $(this).addClass("movTop");},function(){$(this).removeClass("movTop");});
	var c=$(".imgBox .ext").parent();c.find(".pic").mouseover(function(){var d=$(this).parent();
  if(d.hasClass("extOpen")){if(b){clearTimeout(b)}}
  else
  {a=setTimeout(function(){d.addClass("extOpen")},400)}}).mouseout(function(){
  if(a){clearTimeout(a)}});c.mouseout(function(){var d=$(this);
  b=setTimeout(function(){d.removeClass("extOpen")},20)});
	    $(".openBtn span").click(function(){
		$(".open").toggle(0);//toggle/slideToggle
		$(".openBtn").toggleClass("on")
		});
		$(".lighton span").click(function(){
		$(".ligopen").toggle(0);//toggle/slideToggle
		$(".lighton").toggleClass("son");
		$("#playBox").toggleClass("ztop");
		});
 	 $(".newsList li:last").addClass("nob");
	 $(".mtop li:last").addClass("nb"); 
	 $(".ztList li:last").addClass("nob"); 
	 
	 $('#roll').hide();
	 $(window).scroll(function(){if($(window).scrollTop() >= 600){$('#roll').fadeIn(600);} else{
     $('#roll').fadeOut(100); }});$('#rollTop').click(function(){$('html,body').animate({scrollTop: '0px'},1200);});
     $('#rollBottom').click(function(){$('html,body').animate({scrollTop:$('#footer').offset().top},1200);});
	 $("#favmy").click(function(){AddMy();});	
	 
	 showsearch();
	  if($("#hot_info").length>0){
		  $("#hot_info").load($("#hot_info").attr('href'));	
	  }
	  //
	  if($("#hot_video").length>0){
		  $("#hot_video").load($("#hot_video").attr('href'));	
	  }
	  
	  //����չ���б� <span id="detail_hot"></span>
	  $(".plMore").click(function() {
		$html = $(this).html();
		try {
			if ($html == 'չ���б�') {
				$(this).html('�����б�');
				$(this).parent(".pmoreContain").attr('class', 'playMoreB pmoreContain');
				$(this).parent(".pmoreContain").prev(".all-plist").show()
			} else {
				$(this).html('չ���б�');
				$(this).parent(".pmoreContain").attr('class', 'playMoreA pmoreContain');
				$(this).parent(".pmoreContain").prev(".all-plist").hide()
			}
		} catch(e) {
			alert(e.message)
		}
	})
	 });	

$(function(){
	$("a").focus( 
    function () { 
    $(this).blur();
      }
   )
	$(".scrImg a").mouseover(function(){  
    $(this).addClass("bf");  
    }).mouseout(function(){  
    $(this).removeClass("bf");  
    })   
	$(".jsonPP ul li:nth-child(4n)").addClass("r"); 
	var videoInfo = $('.cont'),
        videoInfoDom = videoInfo.find('span').eq(1),
        oldInfo = videoInfoDom.html();
   		videoInfo.find('.contMore').toggle(function () {
        $(this).html('����');
        videoInfoDom.html(videoInfoDom.attr('txt'));
    }, function () {
        $(this).html('�鿴����');
        videoInfoDom.html(oldInfo);
    });
})
//����
function showsearch(){
	$('#wd').focus(function(){
	if($('#wd').val()=='��������Ƶ�������ݻ�����'){
			$('#wd').val('');
		}
	});
	$('#wd').blur(function(){
		if($('#wd').val()==''){
			$('#wd').val('��������Ƶ�������ݻ�����');
		}
	});	
	$('#sort').hide();
	$('#cur_txt').click(function(){
		$('#sort').show();
		$('#sort>li>a').click(function(){
			$html = $(this).html();
			$action = $('#search').attr('action');
			if($html=='����'){
				$('#cur_txt').html('����');
				$('#search').attr('action',$action.replace('video/','info/'));	
			}else{
				$('#cur_txt').html('��Ƶ');
				$('#search').attr('action',$action.replace('info/','video/'));
			}
			$('#sort').hide();
		});
	});
	$('#cur_txt').blur(function(){	
		$('#sort').hide();
	});
}
function AddMy(){var url = window.location.href;
	try{
		window.external.addMyorite(url,document.title);
	}catch(err){
		try{
			window.sidebar.addPanel(document.title, url,"");
		}catch(err){
			alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������");
		}
	}	
}

/*
This file is used specifically for video history
*/
	
	var hoverBackgroundColor = "";
	var hoverTextColor = "";
	
	function VSetCookie(name,value)
	{
		var Days = 30; //cookie �������� 30 ��
		var exp  = new Date();   //new Date("December 31, 9998");
		exp.setTime(exp.getTime() + Days*24*60*60*1000);
		document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + ";path=" + "/";
	}
	function VgetCookie(name)//ȡcookies����        
	{
		var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
		if(arr != null) return unescape(arr[2]); return null;
	}
	
	
	/*=============================================*/				
	function findPos(obj) 
	{
	  var curleft = curtop = 0;
	  if (obj.offsetParent) {
		  curleft = obj.offsetLeft;
		  curtop = obj.offsetTop+26;
		  while (obj = obj.offsetParent) {
			  curleft += obj.offsetLeft;
			  curtop += obj.offsetTop;
		  }
	  }
	  return [curleft,curtop];
	}
	
	function fnDisplayMenu(parent, mnuName)
	{
	  var mnuElem = document.getElementById(mnuName);
	  mnuElem.style.display = "block";
	  //mnuElem.style.top = fnGetMenuTopPosition();
 
		  if (mnuName == "mnuArtStyles" )
	  {
		  var placement = findPos(parent);
 		 //mnuElem.style.left = placement[0] + "px";
		 //mnuElem.style.top  = placement[1]+ "px";

	  }
	  fnHighlightTD(mnuName);
	
	}
	function fnDisplayMenu2(parent, mnuName)
	{
	  var mnuElem = document.getElementById(mnuName);
	      mnuElem.style.display = "block";
	  if (mnuName == "mnuArtStyles" )
	  {
		  var placement = findPos(parent);
		  //mnuElem.style.left = placement[0] + "px";
		  //mnuElem.style.top  = placement[1] + "px";

	  }
	  fnHighlightTD(mnuName);
	}
	
	function fnHideMenu(mnuName)
	{
	  var mnuElem = document.getElementById(mnuName);
	  mnuElem.style.display = "none";
	}
	
	function fnHighlightTD(mnuName)
	{
	  
	  var elem = document.getElementById(mnuName + "Link");
	  elem.style.backgroundColor = hoverBackgroundColor;
	  elem.style.color = hoverTextColor;
	}
	
	function fnRemoveHighlight(mnuName)
	{
	  var elem = document.getElementById(mnuName + "Link");
	  elem.style.backgroundColor ='';// hoverBackgroundColor;
	  elem.style.color = ""; //hoverBackgroundColor;
	}

	
	function getCookie(name)//ȡcookies����        
	{
		var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
		 if(arr != null) return unescape(arr[2]); return null;
	
	}
	function delCookie(name)//ɾ��cookie
	{
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval=getCookie(name);
		if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString() + ";path=" + "/";
		alert('��ʷ��¼�Ѿ���գ���ˢ��ҳ�棡');
	}

   function CheckAdd(name,ckname,url,num){
        var result=VgetCookie(ckname);
        var str;
        if(result==null){
          result="";
        }
       if(num!=''){
          name=name+' '+num;
        }
        str=name+"ddd"+url+"ttt";
        if(result.indexOf(name)>=0){ //ɾ��ͬƬ��ʷ��¼
              result= result.replace(str,"");
        }
          result=str+result;
          VSetCookie(ckname,result);
   }

  
	$(document).ready(function(){
		if(document.getElementById("history")){					   
		var result=getCookie("gxhis");
		if(result==null)
		{
			document.getElementById("history").innerHTML='<div class="d5" style="text-align:right;"><a href="javascript:void(0);">���޹ۿ���¼</a></div>';
		}
		else
		{
			var bb="delCookie('gxhis')";
			var cc='<div class="d5" style="text-align:right;"><a href="javascript:void(0);" onclick="'+bb+'">��չۿ���¼</a></div>';
			var arr=result.split("ttt");
			if(arr.length>6)
			{
				for(var i=5;i>-1;i--)
				{
					var act=arr[i].split('ddd');
					if(act[0]!="")
					{
						cc='<div class="list"><a href="'+act[1]+'" title="'+act[0]+'" class="title">'+act[0].substr(0,10)+'</a><a href="'+act[1]+'"  style="color:#888;">�����ۿ�</a></div>'+cc;
					}
				}
			}
			else
			{
				for(var i=arr.length-1;i>-1;i--)
				{
					var act=arr[i].split('ddd');
					if(act[0]!="")
					{
						cc='<div class="list"><a href="'+act[1]+'" title="'+act[0]+'"  class="title">'+act[0].substr(0,10)+'</a><a href="'+act[1]+'"  style="color:#888;">�����ۿ�</a></div>'+cc;
					}
				}
			}
			document.getElementById("history").innerHTML=cc;
		}
		}
		
		})