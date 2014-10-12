	<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link href="/wp-content/themes/simplekey/style.css" rel="stylesheet" type="text/css" />
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php // Loads HTML5 JavaScript file to add support for HTML5 elements in older IE versions. ?>
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
<!-- 	<header id="masthead" class="site-header" role="banner">
		<hgroup>
			<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
		</hgroup>

		<nav id="site-navigation" class="main-navigation" role="navigation">
			<button class="menu-toggle"><?php _e( 'Menu', 'twentytwelve' ); ?></button>
			<a class="assistive-text" href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentytwelve' ); ?>"><?php _e( 'Skip to content', 'twentytwelve' ); ?></a>
			<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu' ) ); ?>
		</nav><!-- #site-navigation 

		<?php if ( get_header_image() ) : ?>
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php header_image(); ?>" class="header-image" width="<?php echo get_custom_header()->width; ?>" height="<?php echo get_custom_header()->height; ?>" alt="" /></a>
		<?php endif; ?>
	</header><!-- #masthead --> 

	  <nav id="primary-menu">
   <div class="wrapper">
    <h1 id="site-logo"><a href="index.html" title="Freelance/Contract iPhone Developer, iOS Consultant, Programmer"></a></h1>
    <div id="primary-menu-container">
        <ul id="menu-top-menu" class=""><li id="menu-item-47" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="../index.html#experiences">Experiences</a></li>
<li id="menu-item-26" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="../index.html#portfolio">Portfolio</a></li>
<li id="menu-item-22" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="../index.html#about">About me</a></li>
<li id="menu-item-22" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="/blog">Blog</a></li>
<li id="menu-item-20" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="../index.html#contact">Contact</a></li>
</ul>    </div>
             
    <div id="mobile-menu">
      <span>NAVIGATE TO...</span>
      <ul id="menulist"></ul>
    </div>
   </div>
  </nav>

	<div id="main" class="wrapper">