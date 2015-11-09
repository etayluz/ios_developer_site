<?php
/**
 * Front to the WordPress application. This file doesn't do anything, but loads
 * wp-blog-header.php which does and tells WordPress to load the theme.
 *
 * @package WordPress
 */

/**
 * Tells WordPress to load the WordPress theme and output it.
 *
 * @var bool
 */
define('WP_USE_THEMES', true);

/** Loads the WordPress Environment and Template */
require( dirname( __FILE__ ) . '/wp-blog-header.php' );
?>

<!doctype html>
<html lang="en-US">
<head>
<meta charset="utf-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>
<title>ETAY LUZ - Freelance/Contract iPhone Developer, iOS Consultant, Programmer</title>
<link href="wp-content/themes/simplekey/style.css" rel="stylesheet" type="text/css" />
<link rel="pingback" href="xmlrpc.php" />
<!--[if lt IE 9]>
<script src="wp-content/themes/simplekey/js/html5.js" type="text/javascript"></script>
<![endif]-->
<link rel="alternate" type="application/rss+xml" title="ETAY LUZ &raquo; Comments Feed" href="http://www.kominak.com/comments/feed" />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="xmlrpc.php-rsd.xml" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://www.kominak.com/wp-includes/wlwmanifest.xml" /> 
<meta name="generator" content="WordPress 3.7.1" />
<!-- HeadSpace SEO 3.6.41 by John Godley - urbangiraffe.com -->
<meta name="description" content="Native iPhone/iPad apps for business or lifestyle. 3 years of iOS experiences. 9+ years of web and Facebook applications development." />
<!-- HeadSpace -->
<script type="text/javascript" src="wp-content/themes/simplekey/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="wp-content/themes/simplekey/js/jpreloader.min.js"></script>
<script type="text/javascript" src="wp-content/themes/simplekey/js/jquery.placeholder.js"></script>
<script type="text/javascript">
var isHome=1;
var isMobile=0;
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-39749841-1', 'auto');
  ga('send', 'pageview');

</script>
<link rel="stylesheet" href="wp-content/themes/simplekey/functions/css/shortcodes.css" type="text/css" media="all" />
<link rel="stylesheet" href="wp-content/themes/simplekey/js/FlexSlider/flexslider.css" type="text/css" media="all" />
<link rel="stylesheet" href="wp-content/themes/simplekey/js/colorbox/colorbox.css" type="text/css" media="all" />
<style type="text/css">
</style>
<link href="wp-content/themes/simplekey/css/media-queries.css" type="text/css" rel="stylesheet" />
<link href="wp-content/themes/simplekey/custom.css" type="text/css" rel="stylesheet" />
</head>

<body class="home blog">
<div id="ajax-load">
  <div id="close">X</div>
  <div id="ajax-content"></div>
</div>
<header id="top">
    <div class="wrapper">
      <div class="social-icons">
<a href="https://www.facebook.com/etay.luz" title="Facebook" class="facebook">Facebook</a> 
<a href="https://twitter.com/etayluz" title="Twitter" class="twitter">Twitter</a> 
<!--<a href="http://www.linkedin.com/pub/oto-kominak/28/618/283" title="linkedIn" class="linkedIn">linkedIn</a>-->
</div>
  </div>
    
  <nav id="primary-menu">
   <div class="wrapper">
    <h1 id="site-logo"><a href="index.html" title="Freelance/Contract iPhone Developer, iOS Consultant, Programmer"></a></h1>
    <div id="primary-menu-container">
        <ul id="menu-top-menu" class=""><li id="menu-item-47" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="index.html#experiences">Experiences</a></li>
<li id="menu-item-26" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="index.html#portfolio">Portfolio</a></li>
<li id="menu-item-22" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="index.html#about">About me</a></li>
<li id="menu-item-22" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="blog">Blog</a></li>
<li id="menu-item-20" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="index.html#contact">Contact</a></li>
</ul>    </div>
             
    <div id="mobile-menu">
      <span>NAVIGATE TO...</span>
      <ul id="menulist"></ul>
    </div>
   </div>
  </nav>
  

</header>

<?php
//require('/blog/index.php');
?>

<!--Contact Area-->
    <section id="contact" class="page-area blockbg1">
       <div class="wrapper">
           <hgroup class="title">
              <h1><strong>Contact me</strong></h1>
                         </hgroup>
           
           

<div class="contactform">
      <span class="error"></span>
      <span class="error"></span>
      <span class="error"></span>
    
  <form id="contactForm" method="post" action="./contact.php">
   <input type="text"  name="contactName" id="contactName" class="requiredField" value="" placeholder="Your Name" />
   <input type="text" name="email" id="email" value="" class="requiredField email" placeholder="Your Email" />
   <textarea class="requiredField" name="comments" id="comments" placeholder="Message"></textarea>
   <input type="hidden" name="submitted" id="submitted" value="true" />
   <input type="hidden" name="__no_robots" value="nope" id="skNoRobots" />
   <script type="text/javascript">
     jQuery("#skNoRobots").val("sure");
   </script>
   <button type="submit" name="submit" id="submitMsg" class="large_btn contact-btn">Submit</button>
 </form>
</div>
           
           <div class="contactinfo">
                            <h2><strong>Feel free</strong> to ask</h2>
                          <p>I am happy to answer all your inquiries regarding iPhone and iPad applications. Do not hesitate to contact me via email, phone, skype, or even in person.
<br /><br />


E-mail: <a href="mailto:etayluz@gmail.com" class="white">etayluz@gmail.com</a><br />
Phone: +1.408.775.9647<br />
Skype: etayluz<br />
<!--LinkedIn: <a href="http://www.linkedin.com/pub/oto-kominak/28/618/283" target="_blank" class="white">profile</a>-->
<br /><br />

Address: New York, New York, United States (US)<br />
</p>             <div class="contactway">
                Name: ETAY LUZ<br/>                Email address: hello@kominak.com<br/>                Phone: +421 904 124 577<br/>                Skype: otokominak<br/>                Address: Bratislava, Slovak Republic, European Union (EU)             </div>
             
                          
             <div class="social-icons">
<a href="http://facebook.com/etay.luz" title="Facebook" class="facebook">Facebook</a> 
 <a href="https://twitter.com/etayluz" title="Twitter" class="twitter">Twitter</a> 
<!--<a href="http://www.linkedin.com/pub/oto-kominak/28/618/283" title="linkedIn" class="linkedIn">linkedIn</a>-->
</div>
             
           </div>
       </div>
    </section>
 
    
</div>
<footer id="footer">
 <div class="wrapper">
      <div class="footer-l">
        Copyright 2013 ETAY LUZ. All right reserved.              </div>
      <div class="footer-r menu">        
        <div class="menu-bottom-menu-container"><ul id="menu-bottom-menu" class="menu"><li id="menu-item-21" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-21"><a href="index.html#top">Scroll to top</a></li>
</ul></div>        
      </div>
 </div>
</footer>
<script type="text/javascript" src="wp-content/themes/simplekey/js/retina.js"></script>
<script type="text/javascript" src="wp-content/themes/simplekey/js/jquery.hoverIntent.js"></script>
<script type="text/javascript" src="wp-content/themes/simplekey/js/jquery.scrollTo-1.4.3.1-min.js"></script>
<script type="text/javascript" src="wp-content/themes/simplekey/js/jquery.localscroll-1.2.7-min.js"></script>
<script type="text/javascript" src="wp-content/themes/simplekey/js/jquery.nicescroll.min.js"></script>
<script type="text/javascript" src="wp-content/themes/simplekey/js/jquery.sticky.js"></script>
<script type="text/javascript" src="wp-content/themes/simplekey/js/jquery.lazyload.min.js"></script>
<script type="text/javascript" src="wp-content/themes/simplekey/js/FlexSlider/jquery.flexslider-min.js"></script>
<script type="text/javascript" src="wp-content/themes/simplekey/js/colorbox/jquery.colorbox.js"></script>
<script type="text/javascript" src="wp-content/themes/simplekey/js/jquery.isotope.min.js"></script>
<script type="text/javascript" src="wp-content/themes/simplekey/js/jquery.contact-form.js"></script>
<script type="text/javascript" src="wp-content/themes/simplekey/js/jquery.tweet.js"></script>
<script type="text/javascript" src="wp-content/themes/simplekey/js/jquery.simplekey.js"></script>
<script type="text/javascript">
var pixel="http://www.kominak.com/wp-content/themes/simplekey/functions/images/pixel.gif";
var loadimg="http://www.kominak.com/wp-content/themes/simplekey/functions/images/loader2.gif";
</script>
<script type='text/javascript' src='wp-content/themes/simplekey/functions/js/jquery.van-ver=3.7.1.js'></script>
</body>
</html>
