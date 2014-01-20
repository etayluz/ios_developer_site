/**
 * Created by ThemeVan.
 * SimpleKey Jquery functions.
 */

jQuery(function ($) { 
  /*Loading HomePage*/
  if(isHome==1){
    $('body').jpreLoader({
		loaderVPos: '50%',
	});
  } 
});
 
jQuery(document).ready(function($){
	
  function initPrimaryNavi(){
	   /*Fix the primary navi when scrolling*/
	   $("#primary-menu").sticky({topSpacing:0});
	   
       /*Sub menu*/
	   menulink=$('#primary-menu-container li');
	   menulink.each(function(){
			$(this).mouseover(function(){
			 $(this).children('ul.sub-menu').show();
			 $(this).children('ul.sub-menu li a').animate({paddingLeft:'18px'},'fast','linear');
			});
			$(this).mouseout(function(){
			 $(this).children('ul.sub-menu').hide();
			 $(this).children('ul.sub-menu li a').animate({paddingLeft:'15px'},'fast','linear');
			});
	   });
	   
	   /*Mobile menu*/
	   $('#mobile-menu').click(function(){
		 var menulist=$(this).children('ul#menulist');
		 if(menulist.css('display')=='none'){
			menulist.show();
			menulist.html($('#primary-menu-container ul').html());
		 }else{
			menulist.hide();
		 }
	   });
	   
   }initPrimaryNavi();
   
   /*Init Portfolio block*/
   $('.overlay').hide();
   function initPortfolioBlocks(){
	   /*Show Portfolio's detail*/
	   function portfolioHoverIn(){
		   $(this).children('.overlay').fadeIn(200);
		   $(this).children('.tools').fadeIn(200);
	   }
	   /*Hide Portfolio's detail*/
	   function portfolioHoverOut(){
		   $(this).children('.overlay').fadeOut();
		   $(this).children('.tools').fadeOut();
	   }
	   $('.portfolio-item').hoverIntent({
			 sensitivity: 2,
			 interval: 20,
			 over: portfolioHoverIn,
			 timeout: 0,
			 out: portfolioHoverOut
	   });
	   
	   //init isotope
	   $('.portfolios').isotope({ 
          itemSelector: '.portfolio-item'
	   });
	   $('#filter a').click(function(){
		  var selector = $(this).attr('data-filter');
		  $('.portfolios').isotope({ 
		    filter: selector
		  });
		  $(this).parent().attr('class','filter_current');
		  $(this).parent().siblings().removeAttr('class');
		  return false;
		});
		
		//Set Portfolio Width
		var portfolioWidth=$('.portfolio-item').width();
		$('.portfolio-item').css('height',portfolioWidth+'px')
		
		//Ajax load content - #v1.0.4
		$('.portfolio-item > a').add('.zoomin').click(function(){
		   var url=$(this).parent().attr('data-url');
		   if(url!==''){
			   $("body").getNiceScroll().hide();
			   portfolioTop = $(this).parent().offset().top;
			   $("#ajax-load").slideDown();
			   ajaxload('#ajax-content',url,'#portfolio-single');
		   }
		});
		$("#ajax-load #close").click(function(){
			$('html,body').animate({scrollTop:portfolioTop-100},'slow');
			$("#ajax-load").slideUp();
			$('#ajax-content').html('');
			$("body").getNiceScroll().show();
		});
		
   }initPortfolioBlocks();
   
   /*Init Team block*/
   function initTeamBlocks(){
	   /*Show Portfolio's detail*/
	   function TeamHoverIn(){
		   $(this).children('.overlay').fadeIn();
	   }
	   /*Hide Portfolio's detail*/
	   function TeamHoverOut(){
		   $(this).children('.overlay').fadeOut();
	   }
	   $('.member .avatar').hoverIntent({
			 sensitivity: 2,
			 interval: 100,
			 over: TeamHoverIn,
			 timeout: 0,
			 out: TeamHoverOut
	   })
   }initTeamBlocks();
	
   function initPageScroll(){
	   /*Smooth Scroll to section*/
	   $.localScroll({
		target:'body',
		offset: {left: 0, top: -65}
	   });
	   
	   /*Smooth scroll event*/
	   $("body").niceScroll({
		   cursorcolor:"#000",
		   scrollspeed:70,
		   horizrailenabled:false,
		   autohidemode:false
	   });
   }initPageScroll();
   
   /*Flex slider*/
   $('.flexslider').flexslider();
   if($(window).width() <= 640) {
	 $('.slide_bg').each(function() {
         var newSrc=$(this).children('img').attr('data-url');
	     if(newSrc!==''){
           $(this).children('img').attr('src',newSrc);
	     }
     });
   }
   
   
   /*Lightbox*/
   $('a.lightbox').colorbox({
	  maxWidth:"98%"
   });
   $('.attachment a').colorbox({
	  maxWidth:"98%"
   });
   
   /*Lazyload*/
   if (navigator.platform == "iPad") return;
   $("img").lazyload({
       effect:"fadeIn",
       placeholder: pixel
   });
   
   $("input, textarea").placeholder();
	
   /*Ajax load*/
   function ajaxload(id,url,object) { 
	$(id).addClass("loader"); 
	$.ajax({ 
		type: "get", 
		url: url, 
		cache: false, 
		error: function() {(id).html('Loading error!');}, 
		success: function(data) { 
			$(id).removeClass("loader"); 
            $("body").css({"overflow":"hidden"});
			$("#ajax-load").css({"overflow":"auto"});
			$content=$(data).find(object).html();
			$(id).append($content);
			//Load effects
			$('.flexslider').flexslider();
			$('a.lightbox').colorbox({maxWidth:"98%"});
		}
	}); 
   }
})