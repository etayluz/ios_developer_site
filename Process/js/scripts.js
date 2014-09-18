function inWindow(s){
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var currentEls = $(s);
  var result = [];
  currentEls.each(function(){
    var el = $(this);
    var offset = el.offset();
    if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
      result.push(this);
  });
  return $(result);
}

anchor = {
  init : function()  {
    $("a.anchorLink").click(function () { 
      elementClick = $(this).attr("href")
      destination = $(elementClick).offset().top;
      $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 800 );
        return false;
    })
  }
}


$(document).ready(function() {
  
  $(".body_bg").width ($(".position").width());

  $(window).resize(function() {
    $(".body_bg").width ($(".position").width());
  });
  
/*team*/
  inWindow("div.photo_1").delay(400).animate({ 
  height: "0"   
  }, 300);
  inWindow("div.photo_2").delay(200).animate({ 
  height: "0"   
  }, 300);
  inWindow("div.photo_3").delay(500).animate({ 
  height: "0"   
  }, 300);
  inWindow("div.photo_4").delay(300).animate({ 
  height: "0"   
  }, 300);
  inWindow("div.photo_5").delay(200).animate({ 
  height: "0"   
  }, 300);
  inWindow("div.photo_6").delay(100).animate({ 
  height: "0"   
  }, 300);
  inWindow("div.photo_7").delay(100).animate({ 
  height: "0"   
  }, 300);
  inWindow("div.photo_8").delay(200).animate({ 
  height: "0"   
  }, 300);
  
$(window).scroll(function() {
  inWindow("div.photo_1").delay(400).animate({ 
  height: "0" 
  }, 300);
  inWindow("div.photo_2").delay(200).animate({ 
  height: "0"   
  }, 300);
  inWindow("div.photo_3").delay(500).animate({ 
  height: "0"   
  }, 300);
  inWindow("div.photo_4").delay(300).animate({ 
  height: "0"   
  }, 300);
  inWindow("div.photo_5").delay(200).animate({ 
  height: "0"   
  }, 300);
  inWindow("div.photo_6").delay(100).animate({ 
  height: "0"   
  }, 300);
  inWindow("div.photo_7").delay(100).animate({ 
  height: "0"   
  }, 300);
  inWindow("div.photo_8").delay(200).animate({ 
  height: "0"   
  }, 300);
  inWindow("div.photo_9").delay(200).animate({ 
  height: "0"   
  }, 300);
});
/*team*/  

	
/*contact us */ 
  jQuery("div.popa_block").css("display","none");
  jQuery("div.popa_block_1").css("display","none");
  jQuery("div.popap_2").css("display","none");
  
  jQuery("a.popap_click").bind('click', function() {
    jQuery("div.popap_block_bg").fadeIn("normal");
    jQuery("div.popa_block").fadeIn("normal");
    jQuery("body").addClass("noscroll");

    //track contact open event
    _gaq.push(['_trackEvent', 'Feedback', 'Contact Form Shown']);
    yaCounter22582369.reachGoal('CONTACT_FORM_OPEN');
    return false;
  });
  
  jQuery(".close_popap").bind('click', function() {
    cleanform();
    jQuery("div.popap_block_bg").css("display","none");
    jQuery("div.develop_block_bg").css("display","none");
    jQuery("div.popa_block").css("display","none");
    jQuery("div.popa_block_1").css("display","none");
    jQuery("div.develop_popap").css("display","none");
    jQuery("body").removeClass("noscroll");
    jQuery("div.popap_2").css("display","none");
    jQuery("div.popap_1").css("display","block");
    window.location.hash = '';
    return false;
  });
  

  
/*contact us */ 	




/*development popap */	
	
	jQuery("a.popap_dev").on('click', function() {

    $.ajax({
        url: '/development',
        type: 'post',         
        success: function(response) { 
            if (response) 
            {
                jQuery("div.develop_popap_block").prepend(response);
                jQuery("div.develop_block_bg").fadeIn("normal");
                jQuery("div.develop_popap").fadeIn("normal");
                jQuery("body").addClass("noscroll");
            } 
        }
    }); 


    if(getBrowser())
    {
      var stateObj = { foo: "development" };
      history.pushState(stateObj, "Development", "/development");
    }
		return false;
	});


  jQuery("#close_fon_dev").bind('click', function() {
    if(getBrowser())
    {
      if($.browser.mozilla||$.browser.msie)
      {
        window.history.go(-2);
      }
      else
      {
        window.history.go(-1);
      }
    }
    removeDevelopment();
    return false;
  });

jQuery('#close_develop').click(function() 
  {
    if(getBrowser())
    {
      if($.browser.mozilla||$.browser.msie)
      {
        window.history.go(-2);
      }
      else
      {
        window.history.go(-1);
      }
    }
    removeDevelopment();
    return false;
  });
  

$(window).bind("popstate", function(e){
jQuery("div.develop_popap").fadeOut("normal");
jQuery("div.popap_block_bg").fadeOut("normal");
jQuery("body").removeClass("noscroll");
removeDevelopment();
});



/*development popap */	
	
	
  
/*slider*/

  var start = function() {
    $("li.slide_2").css("display","none");
    $("li.slide_3").css("display","none");
    $("div.slider_1_bg1").css("display","none");
    $("div.slider_1_bg1_1").css("opacity","0");
    $("div.slide_text_block").css("display","none");
    $("div.slider_1_bg2").css("opacity","0");
    $("div.slider_1_bg3").css("opacity","0");
    $("div.slider_1_bg4").css("opacity","0");
    $("div.slider_1_bg5").css("opacity","0");
    $("div.slider_1_bg6").css("opacity","0");
    $("div.slider_1_bg7").css("opacity","0");
    $("div.slider_1_bg8").css("opacity","0");
    $("div.slide_text_block").delay(300).fadeIn(300);
    $("div.slider_1_bg1").delay(300).fadeIn(300);
    $("li.slide_1 div.slider_1_bg8").css("top","428px");
    $("li.slide_1 div.slider_1_bg8").delay(600).animate({ 
      opacity: 1
    }, 700);
    $("li.slide_1 div.slider_1_bg5").css("top","509px");
    $("li.slide_1 div.slider_1_bg5").delay(600).animate({ 
      opacity: 1
    }, 700);
    $("li.slide_1 div.slider_1_bg4").css("top","218px");
    $("li.slide_1 div.slider_1_bg4").delay(600).animate({ 
      opacity: 1
    }, 700);
    $("li.slide_1 div.slider_1_bg7").css("top","250px");
    $("li.slide_1 div.slider_1_bg7").delay(600).animate({ 
      opacity: 1
    }, 700);
    $("li.slide_1 div.slider_1_bg1_1").css("top","390px");
    $("li.slide_1 div.slider_1_bg1_1").delay(600).animate({ 
      opacity: 1
    }, 700);
    $("li.slide_1 div.slider_1_bg3").css("top","213px");
    $("li.slide_1 div.slider_1_bg3").delay(600).animate({ 
      opacity: 1
    }, 700);
    $("li.slide_1 div.slider_1_bg2").css("top","75px");
    $("li.slide_1 div.slider_1_bg2").delay(600).animate({ 
      opacity: 1
    }, 700);
    $("li.slide_1 div.slider_1_bg6").css("top","49px");
    $("li.slide_1 div.slider_1_bg6").delay(600).animate({ 
      opacity: 1
    }, 700);

  }


  var fadeSlide_1 = function() {
    $("div.slider_2_bg22").delay(20).fadeOut(30);
    $("div.slider_2_bg21").delay(40).fadeOut(30);
    $("div.slider_2_bg20").delay(60).fadeOut(30);
    $("div.slider_2_bg19").delay(80).fadeOut(30);
    $("div.slider_2_bg18").delay(100).fadeOut(30);
    $("div.slider_2_bg17").delay(120).fadeOut(30);
    $("div.slider_2_bg16").delay(140).fadeOut(30);
    $("div.slider_2_bg15").delay(160).fadeOut(30);
    $("div.slider_2_bg14").delay(180).fadeOut(30);
    $("div.slider_2_bg13").delay(200).fadeOut(30);
    $("div.slider_2_bg12").delay(220).fadeOut(30);
    $("div.slider_2_bg11").delay(240).fadeOut(30);
    $("div.slider_2_bg10").delay(280).fadeOut(30);
    $("div.slider_2_bg9").delay(300).fadeOut(30);
    $("div.slider_2_bg8").delay(320).fadeOut(30);
    $("div.slider_2_bg7").delay(340).fadeOut(30);
    $("div.slider_2_bg6").delay(380).fadeOut(30);
    $("div.slider_2_bg5").delay(400).fadeOut(30);
    $("div.slider_2_bg4").delay(420).fadeOut(30);
    $("div.slider_2_bg3").delay(440).fadeOut(30);
    $("div.slider_2_bg2").delay(480).fadeOut(30);
    $("div.slider_3_bg8").delay(200).fadeOut(300);
    $("div.slider_3_bg7").delay(200).fadeOut(300);
    $("div.slider_3_bg6").delay(200).fadeOut(600);
    $("div.slider_3_bg5").delay(200).fadeOut(600);
    $("div.slider_3_bg4").delay(200).fadeOut(600);
    $("div.slider_3_bg3").delay(200).fadeOut(600);
    $("div.slider_3_bg2").delay(200).fadeOut(600);
    $("li.slide_1 div.slide_text_block").css("opacity","0");
    setTimeout(function(){ 
      $("div.slider_1_bg1").fadeIn(600);
      $("div.slider_2_bg1").fadeOut(600);
      $("div.slider_3_bg1").fadeOut(600);
      $("li.slide_1").css("display","block");
      $("li.slide_2").delay(1000).fadeOut(700);
      $("li.slide_3").delay(1000).fadeOut(700);
      
      $("li.slide_3 div.slide_text_block").css("left","50%");
      $("li.slide_3 div.slide_text_block").css("right","auto");
      $("li.slide_3 div.slide_text_block").css("margin-left","-420px");
      $("li.slide_3 div.slide_text_block").css("margin-right","0");
      $("li.slide_3 div.slide_text_block").animate({ 
        left: "-420px",   
        opacity: 0
      }, 700);
      
      $("li.slide_1 div.slide_text_block").css("left","auto");
      $("li.slide_1 div.slide_text_block").css("right","-420px");
      $("li.slide_1 div.slide_text_block").css("margin-right","-420px");
      $("li.slide_1 div.slide_text_block").css("margin-left","0");
      $("li.slide_1 div.slide_text_block").animate({ 
        right: "50%",   
        opacity: 1
      }, 700);
      
      $("li.slide_2 div.slide_text_block").css("left","50%");
      $("li.slide_2 div.slide_text_block").css("right","auto");
      $("li.slide_2 div.slide_text_block").css("margin-left","-420px");
      $("li.slide_2 div.slide_text_block").css("margin-right","0");
      $("li.slide_2 div.slide_text_block").animate({ 
        left: "-420px",   
        opacity: 0
      }, 700);

      $("li.slide_1 div.slider_1_bg8").css("top","428px");
      $("li.slide_1 div.slider_1_bg8").animate({ 
        opacity: 1
      }, 700);
      $("li.slide_1 div.slider_1_bg5").css("top","509px");
      $("li.slide_1 div.slider_1_bg5").animate({ 
        opacity: 1
      }, 700);
      $("li.slide_1 div.slider_1_bg4").css("top","218px");
      $("li.slide_1 div.slider_1_bg4").animate({ 
        opacity: 1
      }, 700);
      $("li.slide_1 div.slider_1_bg7").css("top","250px");
      $("li.slide_1 div.slider_1_bg7").animate({ 
        opacity: 1
      }, 700);
      $("li.slide_1 div.slider_1_bg1_1").css("top","390px");
      $("li.slide_1 div.slider_1_bg1_1").animate({ 
        opacity: 1
      }, 700);
      $("li.slide_1 div.slider_1_bg3").css("top","213px");
      $("li.slide_1 div.slider_1_bg3").animate({ 
        opacity: 1
      }, 700);
      $("li.slide_1 div.slider_1_bg2").css("top","75px");
      $("li.slide_1 div.slider_1_bg2").animate({ 
        opacity: 1
      }, 700);
      $("li.slide_1 div.slider_1_bg6").css("top","49px");
      $("li.slide_1 div.slider_1_bg6").animate({ 
        opacity: 1
      }, 700);
    
    }, 400 );

  }

  
  $("div.slider_2_bg1").css("display","none");
  $("div.slider_2_bg2").css("display","none");
  $("div.slider_2_bg3").css("display","none");
  $("div.slider_2_bg4").css("display","none");
  $("div.slider_2_bg5").css("display","none");
  $("div.slider_2_bg6").css("display","none");
  $("div.slider_2_bg7").css("display","none");
  $("div.slider_2_bg8").css("display","none");
  $("div.slider_2_bg9").css("display","none");
  $("div.slider_2_bg10").css("display","none");
  $("div.slider_2_bg11").css("display","none");
  $("div.slider_2_bg12").css("display","none");
  $("div.slider_2_bg13").css("display","none");
  $("div.slider_2_bg14").css("display","none");
  $("div.slider_2_bg15").css("display","none");
  $("div.slider_2_bg16").css("display","none");
  $("div.slider_2_bg17").css("display","none");
  $("div.slider_2_bg18").css("display","none");
  $("div.slider_2_bg19").css("display","none");
  $("div.slider_2_bg20").css("display","none");
  $("div.slider_2_bg21").css("display","none");
  $("div.slider_2_bg22").css("display","none");

  
  var fadeSlide_2 = function() {
    $("li.slide_1 div.slider_1_bg8").animate({ 
      top: "463px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg5").animate({ 
      top: "544px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg4").animate({ 
      top: "243px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg7").animate({ 
      top: "275px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg1_1").animate({ 
      top: "405px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg3").animate({ 
      top: "218px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg2").animate({ 
      top: "80px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg6").animate({ 
      top: "54px",   
      opacity: 0
    }, 700);
    $("div.slider_3_bg8").delay(200).fadeOut(300);
    $("div.slider_3_bg7").delay(200).fadeOut(300);
    $("div.slider_3_bg6").delay(200).fadeOut(600);
    $("div.slider_3_bg5").delay(200).fadeOut(600);
    $("div.slider_3_bg4").delay(200).fadeOut(600);
    $("div.slider_3_bg3").delay(200).fadeOut(600);
    $("div.slider_3_bg2").delay(200).fadeOut(600);
    $("li.slide_1").delay(1000).fadeOut(700);
    $("li.slide_2").css("display","block");
    $("li.slide_3").delay(1000).fadeOut(700);
    $("li.slide_2 div.slide_text_block").css("opacity","0");
    setTimeout(function(){
      $("div.slider_2_bg1").fadeIn(600);
      $("div.slider_1_bg1").fadeOut(600);
      $("div.slider_3_bg1").fadeOut(600);
      
      $("li.slide_1 div.slide_text_block").css("left","50%");
      $("li.slide_1 div.slide_text_block").css("right","auto");
      $("li.slide_1 div.slide_text_block").css("margin-left","-420px");
      $("li.slide_1 div.slide_text_block").css("margin-right","0");
      $("li.slide_1 div.slide_text_block").animate({ 
        left: "-420px",   
        opacity: 0
      }, 700);
      
      $("li.slide_2 div.slide_text_block").css("left","auto");
      $("li.slide_2 div.slide_text_block").css("right","-420px");
      $("li.slide_2 div.slide_text_block").css("margin-right","-420px");
      $("li.slide_2 div.slide_text_block").css("margin-left","0");
      $("li.slide_2 div.slide_text_block").animate({ 
        right: "50%",   
        opacity: 1
      }, 700);
      
      $("li.slide_3 div.slide_text_block").css("left","50%");
      $("li.slide_3 div.slide_text_block").css("right","auto");
      $("li.slide_3 div.slide_text_block").css("margin-left","-420px");
      $("li.slide_3 div.slide_text_block").css("margin-right","0");
      $("li.slide_3 div.slide_text_block").animate({ 
        left: "-420px",   
        opacity: 0
      }, 700);
      
      
      $("div.slider_2_bg2").fadeIn(200);
      $("div.slider_2_bg3").delay(200).fadeIn(700);
      $("div.slider_2_bg4").delay(250).fadeIn(70);
      $("div.slider_2_bg5").delay(300).fadeIn(70);
      $("div.slider_2_bg6").delay(350).fadeIn(70);
      $("div.slider_2_bg7").delay(400).fadeIn(70);
      $("div.slider_2_bg8").delay(450).fadeIn(70);
      $("div.slider_2_bg9").delay(500).fadeIn(70);
      $("div.slider_2_bg10").delay(550).fadeIn(70);
      $("div.slider_2_bg11").delay(600).fadeIn(70);
      $("div.slider_2_bg12").delay(650).fadeIn(70);
      $("div.slider_2_bg13").delay(700).fadeIn(70);
      $("div.slider_2_bg14").delay(750).fadeIn(70);
      $("div.slider_2_bg15").delay(800).fadeIn(70);
      $("div.slider_2_bg16").delay(850).fadeIn(70);
      $("div.slider_2_bg17").delay(900).fadeIn(70);
      $("div.slider_2_bg18").delay(950).fadeIn(70);
      $("div.slider_2_bg19").delay(1000).fadeIn(70);
      $("div.slider_2_bg20").delay(1050).fadeIn(70);
      $("div.slider_2_bg21").delay(1100).fadeIn(70);
      $("div.slider_2_bg22").delay(2500).fadeIn(350);
    }, 400 );
  }
  
  
  
  $("div.slider_3_bg1").css("display","none");
  $("div.slider_3_bg2").css("display","none");
  $("div.slider_3_bg3").css("display","none");
  $("div.slider_3_bg4").css("display","none");
  $("div.slider_3_bg5").css("display","none");
  $("div.slider_3_bg6").css("display","none");
  $("div.slider_3_bg7").css("display","none");
  $("div.slider_3_bg8").css("display","none");
  
  var fadeSlide_3 = function() {
    $("li.slide_1 div.slider_1_bg8").animate({ 
      top: "463px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg5").animate({ 
      top: "544px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg4").animate({ 
      top: "243px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg7").animate({ 
      top: "275px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg1_1").animate({ 
      top: "405px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg3").animate({ 
      top: "218px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg2").animate({ 
      top: "80px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg6").animate({ 
      top: "54px",   
      opacity: 0
    }, 700);
    $("div.slider_2_bg22").delay(20).fadeOut(30);
    $("div.slider_2_bg21").delay(40).fadeOut(30);
    $("div.slider_2_bg20").delay(60).fadeOut(30);
    $("div.slider_2_bg19").delay(80).fadeOut(30);
    $("div.slider_2_bg18").delay(100).fadeOut(30);
    $("div.slider_2_bg17").delay(120).fadeOut(30);
    $("div.slider_2_bg16").delay(140).fadeOut(30);
    $("div.slider_2_bg15").delay(160).fadeOut(30);
    $("div.slider_2_bg14").delay(180).fadeOut(30);
    $("div.slider_2_bg13").delay(200).fadeOut(30);
    $("div.slider_2_bg12").delay(220).fadeOut(30);
    $("div.slider_2_bg11").delay(240).fadeOut(30);
    $("div.slider_2_bg10").delay(280).fadeOut(30);
    $("div.slider_2_bg9").delay(300).fadeOut(30);
    $("div.slider_2_bg8").delay(320).fadeOut(30);
    $("div.slider_2_bg7").delay(340).fadeOut(30);
    $("div.slider_2_bg6").delay(380).fadeOut(30);
    $("div.slider_2_bg5").delay(400).fadeOut(30);
    $("div.slider_2_bg4").delay(420).fadeOut(30);
    $("div.slider_2_bg3").delay(440).fadeOut(30);
    $("div.slider_2_bg2").delay(480).fadeOut(30);
    $("li.slide_1").delay(1000).fadeOut(700);
    $("li.slide_2").delay(1000).fadeOut(700);
    $("li.slide_3").css("display","block");
    $("li.slide_3 div.slide_text_block").css("opacity","0");
    setTimeout(function(){
      $("div.slider_3_bg1").fadeIn(600);
      $("div.slider_1_bg1").fadeOut(600);
      $("div.slider_2_bg1").fadeOut(600);
      
      $("li.slide_2 div.slide_text_block").css("left","50%");
      $("li.slide_2 div.slide_text_block").css("right","auto");
      $("li.slide_2 div.slide_text_block").css("margin-left","-420px");
      $("li.slide_2 div.slide_text_block").css("margin-right","0");
      $("li.slide_2 div.slide_text_block").animate({ 
        left: "-420px",   
        opacity: 0
      }, 700);
      
      $("li.slide_3 div.slide_text_block").css("left","auto");
      $("li.slide_3 div.slide_text_block").css("right","50%");
      $("li.slide_3 div.slide_text_block").css("right","-420px");
      $("li.slide_3 div.slide_text_block").css("margin-right","-420px");
      $("li.slide_3 div.slide_text_block").css("margin-left","0");
      $("li.slide_3 div.slide_text_block").animate({ 
        right: "50%",   
        opacity: 1
      }, 700);
      
      $("li.slide_1 div.slide_text_block").css("left","50%");
      $("li.slide_1 div.slide_text_block").css("right","auto");
      $("li.slide_1 div.slide_text_block").css("margin-left","-420px");
      $("li.slide_1 div.slide_text_block").css("margin-right","0");
      $("li.slide_1 div.slide_text_block").animate({ 
        left: "-420px",   
        opacity: 0
      }, 700);
      
      $("div.slider_3_bg2").delay(200).fadeIn(400);
      $("div.slider_3_bg2").css("left","46%");
      $("div.slider_3_bg2").css("top","360px");
      $("div.slider_3_bg2").delay(200).animate({ 
        left: "50%",   
        top: "341px"  
      }, 700);
      $("div.slider_3_bg3").delay(200).fadeIn(400);
      $("div.slider_3_bg3").css("left","45%");
      $("div.slider_3_bg3").css("top","300px");
      $("div.slider_3_bg3").delay(200).animate({ 
        left: "50%",   
        top: "251px"  
      }, 700);
      $("div.slider_3_bg4").delay(200).fadeIn(400);
      $("div.slider_3_bg4").css("left","55%");
      $("div.slider_3_bg4").css("top","300px");
      $("div.slider_3_bg4").delay(200).animate({ 
        left: "50%",   
        top: "256px"  
      }, 700);
      $("div.slider_3_bg5").delay(200).fadeIn(400);
      $("div.slider_3_bg5").css("left","54%");
      $("div.slider_3_bg5").css("top","360px");
      $("div.slider_3_bg5").delay(200).animate({ 
        left: "50%",   
        top: "342px"  
      }, 700);
      $("div.slider_3_bg6").delay(400).fadeIn(400);
      $("div.slider_3_bg7").delay(900).fadeIn(300);
      $("div.slider_3_bg8").delay(1100).fadeIn(300);  
    }, 400 );
    
  }
  
  
  
  
  
  var fadeSlide_1_left = function() {
    $("div.slider_2_bg22").delay(20).fadeOut(30);
    $("div.slider_2_bg21").delay(40).fadeOut(30);
    $("div.slider_2_bg20").delay(60).fadeOut(30);
    $("div.slider_2_bg19").delay(80).fadeOut(30);
    $("div.slider_2_bg18").delay(100).fadeOut(30);
    $("div.slider_2_bg17").delay(120).fadeOut(30);
    $("div.slider_2_bg16").delay(140).fadeOut(30);
    $("div.slider_2_bg15").delay(160).fadeOut(30);
    $("div.slider_2_bg14").delay(180).fadeOut(30);
    $("div.slider_2_bg13").delay(200).fadeOut(30);
    $("div.slider_2_bg12").delay(220).fadeOut(30);
    $("div.slider_2_bg11").delay(240).fadeOut(30);
    $("div.slider_2_bg10").delay(280).fadeOut(30);
    $("div.slider_2_bg9").delay(300).fadeOut(30);
    $("div.slider_2_bg8").delay(320).fadeOut(30);
    $("div.slider_2_bg7").delay(340).fadeOut(30);
    $("div.slider_2_bg6").delay(380).fadeOut(30);
    $("div.slider_2_bg5").delay(400).fadeOut(30);
    $("div.slider_2_bg4").delay(420).fadeOut(30);
    $("div.slider_2_bg3").delay(440).fadeOut(30);
    $("div.slider_2_bg2").delay(480).fadeOut(30);
    $("div.slider_3_bg8").delay(200).fadeOut(300);
    $("div.slider_3_bg7").delay(200).fadeOut(300);
    $("div.slider_3_bg6").delay(200).fadeOut(600);
    $("div.slider_3_bg5").delay(200).fadeOut(600);
    $("div.slider_3_bg4").delay(200).fadeOut(600);
    $("div.slider_3_bg3").delay(200).fadeOut(600);
    $("div.slider_3_bg2").delay(200).fadeOut(600);
    $("li.slide_1 div.slide_text_block").css("opacity","0");
    setTimeout(function(){ 
      $("div.slider_1_bg1").fadeIn(600);
      $("div.slider_2_bg1").fadeOut(600);
      $("div.slider_3_bg1").fadeOut(600);
      $("li.slide_1").css("display","block");
      $("li.slide_2").delay(1000).fadeOut(700);
      $("li.slide_3").delay(1000).fadeOut(700);
      
      $("li.slide_2 div.slide_text_block").css("right","50%");
      $("li.slide_2 div.slide_text_block").css("left","auto");
      $("li.slide_2 div.slide_text_block").css("margin-right","-420px");
      $("li.slide_2 div.slide_text_block").css("margin-left","0");
      $("li.slide_2 div.slide_text_block").animate({ 
        right: "-420px",   
        opacity: 0
      }, 700);
      
      $("li.slide_1 div.slide_text_block").css("right","auto");
      $("li.slide_1 div.slide_text_block").css("left","-420px");
      $("li.slide_1 div.slide_text_block").css("margin-left","-420px");
      $("li.slide_1 div.slide_text_block").css("margin-right","0");
      $("li.slide_1 div.slide_text_block").animate({ 
        left: "50%",   
        opacity: 1
      }, 700);
      
      $("li.slide_3 div.slide_text_block").css("right","50%");
      $("li.slide_3 div.slide_text_block").css("left","auto");
      $("li.slide_3 div.slide_text_block").css("margin-right","-420px");
      $("li.slide_3 div.slide_text_block").css("margin-left","0");
      $("li.slide_3 div.slide_text_block").animate({ 
        right: "-420px",   
        opacity: 0
      }, 700);

      $("li.slide_1 div.slider_1_bg8").css("top","428px");
      $("li.slide_1 div.slider_1_bg8").animate({ 
        opacity: 1
      }, 700);
      $("li.slide_1 div.slider_1_bg5").css("top","509px");
      $("li.slide_1 div.slider_1_bg5").animate({ 
        opacity: 1
      }, 700);
      $("li.slide_1 div.slider_1_bg4").css("top","218px");
      $("li.slide_1 div.slider_1_bg4").animate({ 
        opacity: 1
      }, 700);
      $("li.slide_1 div.slider_1_bg7").css("top","250px");
      $("li.slide_1 div.slider_1_bg7").animate({ 
        opacity: 1
      }, 700);
      $("li.slide_1 div.slider_1_bg1_1").css("top","390px");
      $("li.slide_1 div.slider_1_bg1_1").animate({ 
        opacity: 1
      }, 700);
      $("li.slide_1 div.slider_1_bg3").css("top","213px");
      $("li.slide_1 div.slider_1_bg3").animate({ 
        opacity: 1
      }, 700);
      $("li.slide_1 div.slider_1_bg2").css("top","75px");
      $("li.slide_1 div.slider_1_bg2").animate({ 
        opacity: 1
      }, 700);
      $("li.slide_1 div.slider_1_bg6").css("top","49px");
      $("li.slide_1 div.slider_1_bg6").animate({ 
        opacity: 1
      }, 700);
    
    }, 400 );

  }
  
  
  var fadeSlide_2_left = function() {
    $("li.slide_1 div.slider_1_bg8").animate({ 
      top: "463px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg5").animate({ 
      top: "544px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg4").animate({ 
      top: "243px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg7").animate({ 
      top: "275px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg1_1").animate({ 
      top: "405px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg3").animate({ 
      top: "218px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg2").animate({ 
      top: "80px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg6").animate({ 
      top: "54px",   
      opacity: 0
    }, 700);
    $("div.slider_3_bg8").delay(200).fadeOut(300);
    $("div.slider_3_bg7").delay(200).fadeOut(300);
    $("div.slider_3_bg6").delay(200).fadeOut(600);
    $("div.slider_3_bg5").delay(200).fadeOut(600);
    $("div.slider_3_bg4").delay(200).fadeOut(600);
    $("div.slider_3_bg3").delay(200).fadeOut(600);
    $("div.slider_3_bg2").delay(200).fadeOut(600);
    $("li.slide_1").delay(1000).fadeOut(700);
    $("li.slide_2").css("display","block");
    $("li.slide_3").delay(1000).fadeOut(700);
    
    $("li.slide_2 div.slide_text_block").css("opacity","0");
    setTimeout(function(){
      $("div.slider_2_bg1").fadeIn(600);
      $("div.slider_1_bg1").fadeOut(600);
      $("div.slider_3_bg1").fadeOut(600);
      
      $("li.slide_3 div.slide_text_block").css("right","50%");
      $("li.slide_3 div.slide_text_block").css("left","auto");
      $("li.slide_3 div.slide_text_block").css("margin-right","-420px");
      $("li.slide_3 div.slide_text_block").css("margin-left","0");
      $("li.slide_3 div.slide_text_block").animate({ 
        right: "-420px",   
        opacity: 0
      }, 700);
      
      $("li.slide_2 div.slide_text_block").css("right","auto");
      $("li.slide_2 div.slide_text_block").css("left","-420px");
      $("li.slide_2 div.slide_text_block").css("margin-left","-420px");
      $("li.slide_2 div.slide_text_block").css("margin-right","0");
      $("li.slide_2 div.slide_text_block").animate({ 
        left: "50%",   
        opacity: 1
      }, 700);
      
      $("li.slide_1 div.slide_text_block").css("right","50%");
      $("li.slide_1 div.slide_text_block").css("left","auto");
      $("li.slide_1 div.slide_text_block").css("margin-right","-420px");
      $("li.slide_1 div.slide_text_block").css("margin-left","0");
      $("li.slide_1 div.slide_text_block").animate({ 
        right: "-420px",   
        opacity: 0
      }, 700);
      
      $("div.slider_2_bg2").fadeIn(200);
      $("div.slider_2_bg3").delay(200).fadeIn(700);
      $("div.slider_2_bg4").delay(250).fadeIn(70);
      $("div.slider_2_bg5").delay(300).fadeIn(70);
      $("div.slider_2_bg6").delay(350).fadeIn(70);
      $("div.slider_2_bg7").delay(400).fadeIn(70);
      $("div.slider_2_bg8").delay(450).fadeIn(70);
      $("div.slider_2_bg9").delay(500).fadeIn(70);
      $("div.slider_2_bg10").delay(550).fadeIn(70);
      $("div.slider_2_bg11").delay(600).fadeIn(70);
      $("div.slider_2_bg12").delay(650).fadeIn(70);
      $("div.slider_2_bg13").delay(700).fadeIn(70);
      $("div.slider_2_bg14").delay(750).fadeIn(70);
      $("div.slider_2_bg15").delay(800).fadeIn(70);
      $("div.slider_2_bg16").delay(850).fadeIn(70);
      $("div.slider_2_bg17").delay(900).fadeIn(70);
      $("div.slider_2_bg18").delay(950).fadeIn(70);
      $("div.slider_2_bg19").delay(1000).fadeIn(70);
      $("div.slider_2_bg20").delay(1050).fadeIn(70);
      $("div.slider_2_bg21").delay(1100).fadeIn(70);
      $("div.slider_2_bg22").delay(2500).fadeIn(350);
    }, 400 );
  }
  
  
  var fadeSlide_3_left = function() {
    $("li.slide_1 div.slider_1_bg8").animate({ 
      top: "463px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg5").animate({ 
      top: "544px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg4").animate({ 
      top: "243px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg7").animate({ 
      top: "275px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg1_1").animate({ 
      top: "405px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg3").animate({ 
      top: "218px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg2").animate({ 
      top: "80px",   
      opacity: 0
    }, 700);
    $("li.slide_1 div.slider_1_bg6").animate({ 
      top: "54px",   
      opacity: 0
    }, 700);
    $("div.slider_2_bg22").delay(20).fadeOut(30);
    $("div.slider_2_bg21").delay(40).fadeOut(30);
    $("div.slider_2_bg20").delay(60).fadeOut(30);
    $("div.slider_2_bg19").delay(80).fadeOut(30);
    $("div.slider_2_bg18").delay(100).fadeOut(30);
    $("div.slider_2_bg17").delay(120).fadeOut(30);
    $("div.slider_2_bg16").delay(140).fadeOut(30);
    $("div.slider_2_bg15").delay(160).fadeOut(30);
    $("div.slider_2_bg14").delay(180).fadeOut(30);
    $("div.slider_2_bg13").delay(200).fadeOut(30);
    $("div.slider_2_bg12").delay(220).fadeOut(30);
    $("div.slider_2_bg11").delay(240).fadeOut(30);
    $("div.slider_2_bg10").delay(280).fadeOut(30);
    $("div.slider_2_bg9").delay(300).fadeOut(30);
    $("div.slider_2_bg8").delay(320).fadeOut(30);
    $("div.slider_2_bg7").delay(340).fadeOut(30);
    $("div.slider_2_bg6").delay(380).fadeOut(30);
    $("div.slider_2_bg5").delay(400).fadeOut(30);
    $("div.slider_2_bg4").delay(420).fadeOut(30);
    $("div.slider_2_bg3").delay(440).fadeOut(30);
    $("div.slider_2_bg2").delay(480).fadeOut(30);
    $("li.slide_1").delay(1000).fadeOut(700);
    $("li.slide_2").delay(1000).fadeOut(700);
    $("li.slide_3").css("display","block");
    $("li.slide_3 div.slide_text_block").css("opacity","0");
    setTimeout(function(){
      $("div.slider_3_bg1").fadeIn(600);
      $("div.slider_1_bg1").fadeOut(600);
      $("div.slider_2_bg1").fadeOut(600);
      
      $("li.slide_1 div.slide_text_block").css("right","50%");
      $("li.slide_1 div.slide_text_block").css("left","auto");
      $("li.slide_1 div.slide_text_block").css("margin-right","-420px");
      $("li.slide_1 div.slide_text_block").css("margin-left","0");
      $("li.slide_1 div.slide_text_block").animate({ 
        right: "-420px",   
        opacity: 0
      }, 700);
      
      $("li.slide_3 div.slide_text_block").css("right","auto");
      $("li.slide_3 div.slide_text_block").css("left","-420px");
      $("li.slide_3 div.slide_text_block").css("margin-left","-420px");
      $("li.slide_3 div.slide_text_block").css("margin-right","0");
      $("li.slide_3 div.slide_text_block").animate({ 
        left: "50%",   
        opacity: 1
      }, 700);
      
      $("li.slide_2 div.slide_text_block").css("right","50%");
      $("li.slide_2 div.slide_text_block").css("left","auto");
      $("li.slide_2 div.slide_text_block").css("margin-right","-420px");
      $("li.slide_2 div.slide_text_block").css("margin-left","0");
      $("li.slide_2 div.slide_text_block").animate({ 
        right: "-420px",   
        opacity: 0
      }, 700);
      
      $("div.slider_3_bg2").delay(200).fadeIn(400);
      $("div.slider_3_bg2").css("left","46%");
      $("div.slider_3_bg2").css("top","360px");
      $("div.slider_3_bg2").delay(200).animate({ 
        left: "50%",   
        top: "341px"  
      }, 700);
      $("div.slider_3_bg3").delay(200).fadeIn(400);
      $("div.slider_3_bg3").css("left","45%");
      $("div.slider_3_bg3").css("top","300px");
      $("div.slider_3_bg3").delay(200).animate({ 
        left: "50%",   
        top: "251px"  
      }, 700);
      $("div.slider_3_bg4").delay(200).fadeIn(400);
      $("div.slider_3_bg4").css("left","55%");
      $("div.slider_3_bg4").css("top","300px");
      $("div.slider_3_bg4").delay(200).animate({ 
        left: "50%",   
        top: "256px"  
      }, 700);
      $("div.slider_3_bg5").delay(200).fadeIn(400);
      $("div.slider_3_bg5").css("left","54%");
      $("div.slider_3_bg5").css("top","360px");
      $("div.slider_3_bg5").delay(200).animate({ 
        left: "50%",   
        top: "342px"  
      }, 700);
      $("div.slider_3_bg6").delay(400).fadeIn(400);
      $("div.slider_3_bg7").delay(900).fadeIn(300);
      $("div.slider_3_bg8").delay(1100).fadeIn(300);  
    }, 400 );
    
  }
  
  
  
  
  
  
  
  $("a.arrow_right.select_2").live('click', function() {
    $(this).addClass('select_3');
    $(this).removeClass('select_2');
    $("a.arrow_left").addClass('select_1');
    $("a.arrow_left").removeClass('select_3');
    $("ul.points_list li").removeClass("active");
    $("ul.points_list li.point_2").addClass("active");
    fadeSlide_2();
    $("div.arrow_bg").css("display","block");
    $("div.arrow_bg").delay(2000).fadeOut("normal");
    $("div.arrow_block").animate({ 
      opacity: 0.3
    }, 300);
    $("div.arrow_block").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li a").animate({ 
      opacity: 0.3
    }, 300);
    $("ul.points_list li a").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li.point_2 div.arrow_bg").fadeIn(0);
    $("div.left_bg").css("display","none");
    return false;                  
  });
  $("a.arrow_right.select_3").live('click', function() {
    $(this).addClass('select_1');
    $(this).removeClass('select_3');
    $("a.arrow_left").addClass('select_2');
    $("a.arrow_left").removeClass('select_1');
    $("ul.points_list li").removeClass("active");
    $("ul.points_list li.point_3").addClass("active");  
    fadeSlide_3();
    $("div.arrow_bg").css("display","block");
    $("div.arrow_bg").delay(2000).fadeOut("normal");
    $("div.arrow_block").animate({ 
      opacity: 0.3
    }, 300);
    $("div.arrow_block").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li a").animate({ 
      opacity: 0.3
    }, 300);
    $("ul.points_list li a").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li.point_3 div.arrow_bg").fadeIn(0);
    $("div.left_bg").css("display","block");
    return false;                
  });
  $("a.arrow_right.select_1").live('click', function() {
    $(this).addClass('select_2');
    $(this).removeClass('select_1');
    $("a.arrow_left").addClass('select_3');
    $("a.arrow_left").removeClass('select_2');
    $("ul.points_list li").removeClass("active");
    $("ul.points_list li.point_1").addClass("active");  
    fadeSlide_1();
    $("div.arrow_bg").css("display","block");
    $("div.arrow_bg").delay(2000).fadeOut("normal");
    $("div.arrow_block").animate({ 
      opacity: 0.3
    }, 300);
    $("div.arrow_block").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li a").animate({ 
      opacity: 0.3
    }, 300);
    $("ul.points_list li a").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li.point_1 div.arrow_bg").fadeIn(0);
    $("div.left_bg").css("display","none");
    return false;                
  });
  
  
  $("a.arrow_left.select_3").live('click', function() {
    $(this).addClass('select_2');
    $(this).removeClass('select_3');
    $("a.arrow_right").addClass('select_1');
    $("a.arrow_right").removeClass('select_2');
    $("ul.points_list li").removeClass("active");
    $("ul.points_list li.point_3").addClass("active");
    fadeSlide_3_left();
    $("div.arrow_bg").css("display","block");
    $("div.arrow_bg").delay(2000).fadeOut("normal");
    $("div.arrow_block").animate({ 
      opacity: 0.3
    }, 300);
    $("div.arrow_block").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li a").animate({ 
      opacity: 0.3
    }, 300);
    $("ul.points_list li a").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li.point_3 div.arrow_bg").fadeIn(0);
    $("div.left_bg").css("display","block");
    return false;                  
  });
  $("a.arrow_left.select_2").live('click', function() {
    $(this).addClass('select_1');
    $(this).removeClass('select_2');
    $("a.arrow_right").addClass('select_3');
    $("a.arrow_right").removeClass('select_1');
    $("ul.points_list li").removeClass("active");
    $("ul.points_list li.point_2").addClass("active");
    fadeSlide_2_left();
    $("div.arrow_bg").css("display","block");
    $("div.arrow_bg").delay(2000).fadeOut("normal");
    $("div.arrow_block").animate({ 
      opacity: 0.3
    }, 300);
    $("div.arrow_block").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li a").animate({ 
      opacity: 0.3
    }, 300);
    $("ul.points_list li a").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li.point_2 div.arrow_bg").fadeIn(0);
    $("div.left_bg").css("display","none");
    return false;                  
  });
  $("a.arrow_left.select_1").live('click', function() {
    $(this).addClass('select_3');
    $(this).removeClass('select_1');
    $("a.arrow_right").addClass('select_2');
    $("a.arrow_right").removeClass('select_3');
    $("ul.points_list li").removeClass("active");
    $("ul.points_list li.point_1").addClass("active");
    fadeSlide_1_left();
    $("div.arrow_bg").css("display","block");
    $("div.arrow_bg").delay(2000).fadeOut("normal");
    $("div.arrow_block").animate({ 
      opacity: 0.3
    }, 300);
    $("div.arrow_block").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li a").animate({ 
      opacity: 0.3
    }, 300);
    $("ul.points_list li a").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li.point_1 div.arrow_bg").fadeIn(0);
    $("div.left_bg").css("display","none");
    return false;                  
  });
  
  
  start();
  

  
  
  $("ul.points_list li.point_1 a").live('click', function() {
    $(this).parent().parent().find('li').removeClass("active");
    $(this).parents("li").addClass('active');
    $("a.arrow_left").addClass('select_3');
    $("a.arrow_left").removeClass('select_2');
    $("a.arrow_left").removeClass('select_1');
    $("a.arrow_right").addClass('select_2');
    $("a.arrow_right").removeClass('select_3');
    $("a.arrow_right").removeClass('select_1');
    fadeSlide_1_left();
    $("div.arrow_bg").css("display","block");
    $("div.arrow_bg").delay(2000).fadeOut(0);
    $("div.arrow_block").animate({ 
      opacity: 0.3
    }, 300);
    $("div.arrow_block").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li a").animate({ 
      opacity: 0.3
    }, 300);
    $("ul.points_list li a").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li.point_1 div.arrow_bg").fadeIn(0);
    $("div.left_bg").css("display","none");
    return false;                  
  });

  $("ul.points_list li.point_2 a").live('click', function() {
    $(this).parent().parent().find('li').removeClass("active");
    $(this).parents("li").addClass('active');
    $("a.arrow_left").addClass('select_1');
    $("a.arrow_left").removeClass('select_2');
    $("a.arrow_left").removeClass('select_3');
    $("a.arrow_right").addClass('select_3');
    $("a.arrow_right").removeClass('select_1');
    $("a.arrow_right").removeClass('select_2');
    fadeSlide_2();
    $("div.arrow_bg").css("display","block");
    $("div.arrow_bg").delay(2000).fadeOut("normal");
    $("div.arrow_bg").delay(2000).fadeOut(0);
    $("div.arrow_block").animate({ 
      opacity: 0.3
    }, 300);
    $("div.arrow_block").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li a").animate({ 
      opacity: 0.3
    }, 300);
    $("ul.points_list li a").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li.point_2 div.arrow_bg").fadeIn(0);
    $("div.left_bg").css("display","none");
    return false;                  
  });

  
  $("ul.points_list li.point_3 a").live('click', function() {
    $(this).parent().parent().find('li').removeClass("active");
    $(this).parents("li").addClass('active');
    $("a.arrow_left").addClass('select_2');
    $("a.arrow_left").removeClass('select_1');
    $("a.arrow_left").removeClass('select_3');
    $("a.arrow_right").addClass('select_1');
    $("a.arrow_right").removeClass('select_3');
    $("a.arrow_right").removeClass('select_2');
    fadeSlide_3();
    $("div.arrow_bg").css("display","block");
    $("div.arrow_bg").delay(2000).fadeOut(0);
    $("div.arrow_block").animate({ 
      opacity: 0.3
    }, 300);
    $("div.arrow_block").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li a").animate({ 
      opacity: 0.3
    }, 300);
    $("ul.points_list li a").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li.point_3 div.arrow_bg").fadeIn(0);
    $("div.left_bg").css("display","block");
    return false;                  
  });
  
  $("div.left_bg").live('click', function() {
    $(this).parent().parent().find('li').removeClass("active");
    $(this).parents("li").addClass('active');
    $("a.arrow_left").addClass('select_1');
    $("a.arrow_left").removeClass('select_2');
    $("a.arrow_left").removeClass('select_3');
    $("a.arrow_right").addClass('select_3');
    $("a.arrow_right").removeClass('select_1');
    $("a.arrow_right").removeClass('select_2');
    fadeSlide_2_left();
    $("div.arrow_bg").css("display","block");
    $("div.arrow_bg").delay(2000).fadeOut("normal");
    $("div.arrow_bg").delay(2000).fadeOut(0);
    $("div.arrow_block").animate({ 
      opacity: 0.3
    }, 300);
    $("div.arrow_block").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li a").animate({ 
      opacity: 0.3
    }, 300);
    $("ul.points_list li a").delay(1800).animate({ 
      opacity: 1
    }, 300);
    $("ul.points_list li.point_2 div.arrow_bg").fadeIn(0);
    $(this).css("display","none");
    return false;                  
  });

/*slider*/  




  
	
  anchor.init()
  
  
  
  $("div.team_list div.photo_bg").click(function(){
    $(this).animate({ 
      height: "0"  
    }, 200); 
    });
  
  $("div.level_1").click(function(){
    
    
    
    $(this).animate({ 
      height: "0"  
    }, 200); 
    });



////////////////////////////////////////////////////////////
  
  $('textarea.enter').each(function() {
    var thisText = $(this).val();
    $(this).bind('focus', function() {
      if ($(this).val() == thisText) {
        $(this).val('');
        $(this).addClass('selected');
        $(this).removeClass('enter');
      }
    });
    $(this).bind('blur', function() {
      if ($(this).val() == '') {
        $(this).val(thisText);
        $(this).removeClass('selected');
      }
    });
  });

////////////////////////////////////////////////////////////	
	
 //Get last twitt
         // set your twitter id
         JQTWEET.loadTweets();
	
  
  jQuery("a.send_more").bind('click', function() {
    jQuery("div.popap_2").fadeOut(250);
    jQuery("div.popap_1").delay(200).fadeIn("normal");
    return false;
  });


  $('.popa_block_block li input,.popa_block_block li textarea').keyup(function()
  {
      var temp=$(this).val();
      if(temp!="")
      {
          $(this).parent().removeClass('error');
      }
  });


  jQuery("div.popap_1 input.submit").bind('click', function() 
  {
    cleanform();
    var name=$('#name_message').val();
    var email=$('#email_message').val();
    var text=$('#text_message').val();
    var phone=$('#phone_message').val();
    var found=$('.select span.text').text();
   
   if(!checkdata(name,email,text))
   {
       return false;
   }
    var data={userName:name, userEmail:email, userPhone:phone,  userMessage:text, userFound:found};
    /*  ajax message sending  */
    $.ajax({
        data: data,
        url: '/sendmail',
        dataType: 'json',
        type: 'post',					
        success: function(response) { 
            if (response.success) 
            {
                //track success event
                _gaq.push(['_trackEvent', 'Feedback', 'Message sent']);
                yaCounter22582369.reachGoal('CONTACT_REQUEST_SENT');

                //close one
                jQuery("div.popap_1").fadeOut(250);
                jQuery("#popa_block").fadeOut(100);
                cleanform();
                resetvalues();
                //open next
                jQuery("div.popap_2").delay(200).fadeIn("normal");
            } 
            else 
            {
                $("div.ajax_error").fadeIn("normal");    
            }
        }
    });           
  });  

function cleanform()
{
    $('.popap_1 ul li').each(function()
    {
        $(this).removeClass('error');
    });
}


function checkdata(name,email,text)
{
    var checker=1;
    var str1 = name.replace(/\s/g, '');
    if((str1=='Name')||(str1==''))
    {
         if (str1=='')
             $("#name_message").val('Name');
         $("#name_message").parent().addClass("error");
         checker=0;
    }

    if((email=='E-mail')||!(validateEmail(email)))
    {
         $("#email_message").parent().addClass("error");
         checker=0;
    }

    var str2 = text.replace(/\s/g, '');
    if((text=='Message')||(str2==''))
    {
         if(str2=='')
             $("#text_message").val('Message');
         $("#text_message").parent().addClass("error");
         checker=0;
    }

    // if(found=='How did you found us?')
    // {
    //      //$("span.selectbox").addClass("error");
    //      checker=0;
    // }
    if(checker==1) return true;
        return false;
}


function resetvalues()
{
    $("#name_message").val('Name');
    $("#email_message").val('E-mail');
    $("#text_message").val('Message');
     $("#phone_message").val('Phone');
    //$("#found_message").val('How did you found us?');
    jQuery("div.ajax_error").css("display","none");
}

function validateEmail(email) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if( !emailReg.test( email ) ) {
		return false;
	} else {
		return true;
	}
}	
	
///////////////////
	
});


JQTWEET = {
     
    // Set twitter username, number of tweets & id/class to append tweets
    user: 'ipolecat_com',
    numTweets: 1,
    appendTo: '#jstwitter',
 
    // core function of jqtweet
    loadTweets: function() {
        $.ajax({
            url: 'http://api.twitter.com/1.1/users/show.json',
            type: 'GET',
            dataType: 'jsonp',
            data: {
                screen_name: JQTWEET.user,
                include_rts: true,
                count: JQTWEET.numTweets,
                include_entities: true
            },
            success: function(data, textStatus, xhr) {
 
                 var html = '<div class="tweet">TWEET_TEXT<div class="time">AGO</div>';
         
                 // append tweets into page
                 for (var i = 0; i < data.length; i++) {
                    $(JQTWEET.appendTo).append(
                        html.replace('TWEET_TEXT', JQTWEET.ify.clean(data[i].text) )
                            .replace(/USER/g, data[i].user.screen_name)
                            .replace('AGO', JQTWEET.timeAgo(data[i].created_at) )
                            .replace(/ID/g, data[i].id_str)
                    );
                 }                  
            }   
 
        });
         
    }, 
     
         
    /**
      * relative time calculator FROM TWITTER
      * @param {string} twitter date string returned from Twitter API
      * @return {string} relative time like "2 minutes ago"
      */
    timeAgo: function(dateString) {
        var rightNow = new Date();
        var then = new Date(dateString);
         
        if ($.browser.msie) {
            // IE can't parse these crazy Ruby dates
            then = Date.parse(dateString.replace(/( \+)/, ' UTC$1'));
        }
 
        var diff = rightNow - then;
 
        var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7;
 
        if (isNaN(diff) || diff < 0) {
            return ""; // return blank string if unknown
        }
 
        if (diff < second * 2) {
            // within 2 seconds
            return "right now";
        }
 
        if (diff < minute) {
            return Math.floor(diff / second) + " seconds ago";
        }
 
        if (diff < minute * 2) {
            return "about 1 minute ago";
        }
 
        if (diff < hour) {
            return Math.floor(diff / minute) + " minutes ago";
        }
 
        if (diff < hour * 2) {
            return "about 1 hour ago";
        }
 
        if (diff < day) {
            return  Math.floor(diff / hour) + " hours ago";
        }
 
        if (diff > day && diff < day * 2) {
            return "yesterday";
        }
 
        if (diff < day * 365) {
            return Math.floor(diff / day) + " days ago";
        }
 
        else {
            return "over a year ago";
        }
    }, // timeAgo()
     
     
    /**
      * The Twitalinkahashifyer!
      * http://www.dustindiaz.com/basement/ify.html
      * Eg:
      * ify.clean('your tweet text');
      */
    ify:  {
      link: function(tweet) {
        return tweet.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g, function(link, m1, m2, m3, m4) {
          var http = m2.match(/w/) ? 'http://' : '';
          return '<a class="twtr-hyperlink" target="_blank" href="' + http + m1 + '">' + ((m1.length > 25) ? m1.substr(0, 24) + '...' : m1) + '</a>' + m4;
        });
      },
 
      at: function(tweet) {
        return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20})/g, function(m, username) {
          return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/intent/user?screen_name=' + username + '">@' + username + '</a>';
        });
      },
 
      list: function(tweet) {
        return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20}\/\w+)/g, function(m, userlist) {
          return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/' + userlist + '">@' + userlist + '</a>';
        });
      },
 
      hash: function(tweet) {
        return tweet.replace(/(^|\s+)#(\w+)/gi, function(m, before, hash) {
          return before + '<a target="_blank" class="twtr-hashtag" href="http://twitter.com/search?q=%23' + hash + '">#' + hash + '</a>';
        });
      },
 
      clean: function(tweet) {
        return this.hash(this.at(this.list(this.link(tweet))));
      }
    } // ify
 
     
};


function getBrowser()
{
  var userAgent = navigator.userAgent.toLowerCase(); 
  $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase()); 
  //var version=parseInt($.browser.version);
  if($.browser.mozilla  && $.browser.version<18.0)
  {
      //alert('mozilla <18');
      return false;
  }
  else
  {
      if ($.browser.msie  &&  $.browser.version<10) 
      {
        //alert('IE <10'); 
        return false;
      }
      else
      {
        if($.browser.chrome)
        {
            var ver=parseInt($.browser.version, 10);
            if(ver<24)
              //alert('Chrome<26');
            return false;
        }
        else
        {
          if($.browser.opera )
          {
            var version=parseInt($.browser.version);
            if($.browser.version<=12)
              return false;
              //alert($.browser.version);
          }
          else
          {
            if($.browser.safari)
            {
                userAgent = userAgent.substring(userAgent.indexOf('version/') +8);
                userAgent = userAgent.substring(0,userAgent.indexOf('.'));
                $.browser.version = userAgent;
                //alert($.browser.version);
                if($.browser.version<5)
                {
                  return false;
                }
            }
          }
        }
      }
  }
  return true;
}


function removeDevelopment()
{
  jQuery(".develop_popap_block .fly_block").remove();  
  jQuery(".develop_popap_block .info_block").remove();
  jQuery(".develop_popap_block .release_block").remove();
  jQuery(".develop_popap_block .tools_block").remove();
  jQuery(".develop_popap_block .tools_too").remove();
}








