

function smartPosition1(obj) {
  jQuery(window).scroll(function() {
    if ( (document.documentElement.scrollTop || document.body.scrollTop) >= jQuery(obj).offset().top) {
      jQuery('ul.nav_list li').removeClass('active');
      jQuery('li.nav_1').addClass('active');
      jQuery('ul.nav_list').addClass('pos_top');
      jQuery('ul.nav_list').removeClass('bg');
    } else {
      jQuery('li.nav_1').removeClass('active');
      jQuery('ul.nav_list').removeClass('pos_top');
    }
  });
};


function smartPosition2(obj) {
  jQuery(window).scroll(function() {
    if ( (document.documentElement.scrollTop || document.body.scrollTop) >= jQuery(obj).offset().top) {
      jQuery('ul.nav_list li').removeClass('active');
      jQuery('li.nav_2').addClass('active');
      jQuery('ul.nav_list').removeClass('bg');
    } else {
      jQuery('li.nav_2').removeClass('active');
    }
  });
};

function smartPosition3(obj) {
  jQuery(window).scroll(function() {
    if ( (document.documentElement.scrollTop || document.body.scrollTop) >= jQuery(obj).offset().top) {
      jQuery('ul.nav_list li').removeClass('active');
      jQuery('li.nav_3').addClass('active');
      jQuery('ul.nav_list').removeClass('bg');
    } else {
      jQuery('li.nav_3').removeClass('active');
    }
  });
};

function smartPosition4(obj) {
  jQuery(window).scroll(function() {
    if ( (document.documentElement.scrollTop || document.body.scrollTop) >= jQuery(obj).offset().top) {
      jQuery('ul.nav_list li').removeClass('active');
      jQuery('li.nav_4').addClass('active');
      jQuery('ul.nav_list').removeClass('bg');
    } else {
      jQuery('li.nav_4').removeClass('active');
    }
  });
};

function smartPosition5(obj) {
  jQuery(window).scroll(function() {
    if ( (document.documentElement.scrollTop || document.body.scrollTop) >= jQuery(obj).offset().top) {
      jQuery('ul.nav_list li').removeClass('active');
      jQuery('li.nav_5').addClass('active');
      jQuery('ul.nav_list').removeClass('bg');
      jQuery('ul.nav_list').addClass('pos_bot');
    } else {
      jQuery('li.nav_5').removeClass('active');
      jQuery('ul.nav_list').removeClass('pos_bot');
    }
  });
};

function smartPosition9(obj) {
  jQuery(window).scroll(function() {
    if ( (document.documentElement.scrollTop || document.body.scrollTop) >= jQuery(obj).offset().top) {
      jQuery('ul.nav_list').addClass('bg');
    } else {
      
    }
  });
};

function smartPosition10(obj) {
  jQuery(window).scroll(function() {
    if ( (document.documentElement.scrollTop || document.body.scrollTop) >= jQuery(obj).offset().top) {
      jQuery('ul.nav_list').removeClass('bg');
    } else {
      
    }
  });
};



$(document).ready(function() 
{

  smartPosition1('#link_1_1');
  smartPosition2('#link_2_1');
  smartPosition3('#link_3_1');
  smartPosition4('#link_4_1');
  smartPosition5('#link_5_1');
  
  smartPosition9('#bg_position_1');
  smartPosition10('#bg_position_2');

});