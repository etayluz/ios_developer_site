= Basic Law
* by General Themes, http://generalthemes.com/

== READ ME ==

1. If possible try to keep the site title short. The theme is not developed for long site titles. If this is an issue, you can adjust the font size in the style sheet by editing the 'style.css' file. Find the following:

#site-title {
	font:normal 40px "garamond", georgia, helvetica neue, helvetica, arial, times;
	padding: 20px 0 0 18px;
	margin:0;
	color: #fff;
	text-transform:uppercase;
	text-shadow:1px 1px #000;
	letter-spacing:2px;
}

And change the 40px under 'font:normal 40px "garamond", georgia, helvetica neue, helvetica, arial, times;'. You can change the number to any size.

==

2. Regarding the menus: Basic Law supports two menus. A main menu and a secondary that is intended for category names etc. If you do not need the second menu, simply find the following in the 'header.php' file and delete it:

		<div id="sec-access" role="navigation">
			<?php wp_nav_menu( array( 'theme_location' => 'secondary' ) ); ?>
		</div><!-- #access -->

==

		
3. A second note on menus, it is only intended to have a limited number of parent pages. If you have several menu items, try to adjust them so they display as a sub menu.


==


If you need assistance setting up your theme, please contact us at:
http://generalthemes.com/contact/ for a free quote. Our prices are extremely cost-effective. Thanks for using Basic Law. 


== Changelog ==

= 1.0.1
*fixed custom image header issues. Adjustments made only to the functions.php file.

= 1.0
Initial Release.

