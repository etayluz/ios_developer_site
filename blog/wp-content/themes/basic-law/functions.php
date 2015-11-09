<?php
/**
 * basiclaw functions and definitions
 *
 * Sets up the theme and provides some helper functions. Some helper functions
 * are used in the theme as custom template tags. Others are attached to action and
 * filter hooks in WordPress to change core functionality.
 *
 * When using a child theme (see http://codex.wordpress.org/Theme_Development and
 * http://codex.wordpress.org/Child_Themes), you can override certain functions
 * (those wrapped in a function_exists() call) by defining them first in your child theme's
 * functions.php file. The child theme's functions.php file is included before the parent
 * theme's file, so the child theme functions would be used.
 *
 * Functions that are not pluggable (not wrapped in function_exists()) are instead attached
 * to a filter or action hook. The hook can be removed by using remove_action() or
 * remove_filter() and you can attach your own function to the hook.
 *
 * For more information on hooks, actions, and filters, see http://codex.wordpress.org/Plugin_API.
 *
 * @package Basic Law
 * @since Basic Law 1.0
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) )
	$content_width = 610; /* pixels */

if ( ! function_exists( 'basiclaw_setup' ) ):
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which runs
 * before the init hook. The init hook is too late for some features, such as indicating
 * support post thumbnails.
 *
 * To override basiclaw_setup() in a child theme, add your own basiclaw_setup to your child theme's
 * functions.php file.
 */
function basiclaw_setup() {
	/**
	 * Make theme available for translation
	 * Translations can be filed in the /languages/ directory
	 * If you're building a theme based on basiclaw, use a find and replace
	 * to change 'basiclaw' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'basiclaw', get_template_directory() . '/languages' );

	$locale = get_locale();
	$locale_file = get_template_directory() . "/languages/$locale.php";
	if ( is_readable( $locale_file ) )
		require_once( $locale_file );

	/**
	 * Add default posts and comments RSS feed links to head
	 */
	add_theme_support( 'automatic-feed-links' );
	
	add_editor_style();


	// This theme allows users to set a custom background
	add_custom_background( 'basiclaw_custom_background_callback' );
	
	// custom function thanks to devpress.com
	function basiclaw_custom_background_callback() {

	/* Get the background image. */
	$image = get_background_image();

	/* If there's an image, just call the normal WordPress callback. We won't do anything here. */
	if ( !empty( $image ) ) {
		_custom_background_cb();
		return;
	}

	/* Get the background color. */
	$color = get_background_color();

	/* If no background color, return. */
	if ( empty( $color ) )
		return;

	/* Use 'background' instead of 'background-color'. */
	$style = "background: #{$color};";

	?>
	<style type="text/css">body { <?php echo trim( $style ); ?> }</style>
	<?php

	}

		
define('HEADER_TEXTCOLOR', '');
define('HEADER_IMAGE', '%s/images/header.jpg'); // %s is the template dir uri
define('HEADER_IMAGE_WIDTH', 864); // use width and height appropriate for your theme
define('HEADER_IMAGE_HEIGHT', 189);
define('NO_HEADER_TEXT', true );

// gets included in the site header
function header_style() {
    ?><style type="text/css">
        #header {
            background: url(<?php header_image(); ?>);
        }
    </style><?php
}
// gets included in the admin header
function admin_header_style() {
    ?><style type="text/css">
        #headimg {
            width: <?php echo HEADER_IMAGE_WIDTH; ?>px;
            height: <?php echo HEADER_IMAGE_HEIGHT; ?>px;
            background: no-repeat;
        }
    </style><?php
}
add_custom_image_header('header_style', 'admin_header_style');
	
	/**
	 * This theme uses wp_nav_menu() in one location.
	 */
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'basiclaw' ),
		'secondary' => __( 'Secondary Menu', 'basiclaw' ),
	) );

	/**
	 * Add support for the Aside and Gallery Post Formats
	 */
	add_theme_support( 'post-formats', array( 'aside', 'image', 'gallery' ) );
}
endif; // basiclaw_setup

/**
 * Tell WordPress to run basiclaw_setup() when the 'after_setup_theme' hook is run.
 */
add_action( 'after_setup_theme', 'basiclaw_setup' );

// Enable post thumbnails
add_theme_support( 'post-thumbnails' );
set_post_thumbnail_size( 50, 50, true );
add_image_size( 'single-post-thumbnail', 610, 200, true );

/* Exclude pages from search results */

function mySearchFilter($query) {
if ($query->is_search) {
$query->set('post_type', 'post');
}
return $query;
}

add_filter('pre_get_posts','mySearchFilter');

if ( ! function_exists( 'basiclaw_posted_on' ) ) :
/**
 * Prints HTML with meta information for the current post—date/time and author.
 *
 * @since basiclaw 1.0
 */
function basiclaw_posted_on() {
	// use the "byline" class to hide the author name and link. We should make this appear automatically with a multi-author conditional tag in the future
	printf( __( '<span class="%1$s">Posted on</span> %2$s <span class="%4$s"><span class="meta-sep">by</span> %3$s</span>', 'basiclaw' ),
		'meta-prep meta-prep-author',
		sprintf( '<a href="%1$s" title="%2$s" rel="bookmark"><span class="entry-date">%3$s</span></a>',
			get_permalink(),
			esc_attr( get_the_time() ),
			get_the_date('m/d/Y')
		),
		sprintf( '<span class="author vcard"><a class="url fn n" href="%1$s" title="%2$s">%3$s</a></span>',
			get_author_posts_url( get_the_author_meta( 'ID' ) ),
			sprintf( esc_attr__( 'View all posts by %s', 'basiclaw' ), get_the_author() ),
			get_the_author()
		),
		'byline'
	);
}
endif;

/**
 * Get our wp_nav_menu() fallback, wp_page_menu(), to show a home link.
 */
function basiclaw_page_menu_args( $args ) {
	$args['show_home'] = true;
	return $args;
}
add_filter( 'wp_page_menu_args', 'basiclaw_page_menu_args' );

/**
 * Register widgetized area and update sidebar with default widgets
 */
function basiclaw_widgets_init() {
	register_sidebar( array(
		'name' => __( 'Sidebar', 'basiclaw' ),
		'id' => 'sidebar',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget' => "</aside>",
		'before_title' => '<h1 class="widget-title">',
		'after_title' => '</h1>',
	) );
}
add_action( 'init', 'basiclaw_widgets_init' );

if ( ! function_exists( 'basiclaw_content_nav' ) ):
/**
 * Display navigation to next/previous pages when applicable
 *
 * @since basiclaw 1.0
 */
function basiclaw_content_nav( $nav_id ) {
	global $wp_query;

	?>
	<nav id="<?php echo $nav_id; ?>">
		<h1 class="assistive-text section-heading"><?php _e( 'Post navigation', 'basiclaw' ); ?></h1>

	<?php if ( is_single() ) : // navigation links for single posts ?>

		<?php previous_post_link( '<div class="nav-previous">%link</div>', '<span class="meta-nav">' . _x( '&larr;', 'Previous post link', 'basiclaw' ) . '</span> %title' ); ?>
		<?php next_post_link( '<div class="nav-next">%link</div>', '%title <span class="meta-nav">' . _x( '&rarr;', 'Next post link', 'basiclaw' ) . '</span>' ); ?>

	<?php elseif ( $wp_query->max_num_pages > 1 && ( is_home() || is_archive() || is_search() ) ) : // navigation links for home, archive, and search pages ?>

		<?php if ( get_next_posts_link() ) : ?>
		<div class="nav-previous"><?php next_posts_link( __( '<span class="meta-nav">&larr;</span> Older posts', 'basiclaw' ) ); ?></div>
		<?php endif; ?>

		<?php if ( get_previous_posts_link() ) : ?>
		<div class="nav-next"><?php previous_posts_link( __( 'Newer posts <span class="meta-nav">&rarr;</span>', 'basiclaw' ) ); ?></div>
		<?php endif; ?>

	<?php endif; ?>

	</nav><!-- #<?php echo $nav_id; ?> -->
	<?php
}
endif; // basiclaw_content_nav


if ( ! function_exists( 'basiclaw_comment' ) ) :
/**
 * Template for comments and pingbacks.
 *
 * Used as a callback by wp_list_comments() for displaying the comments.
 *
 * @since basiclaw 1.0
 */
function basiclaw_comment( $comment, $args, $depth ) {
	$GLOBALS['comment'] = $comment;
	switch ( $comment->comment_type ) :
		case 'pingback' :
		case 'trackback' :
	?>
	<li class="post pingback">
		<p><?php _e( 'Pingback:', 'basiclaw' ); ?> <?php comment_author_link(); ?><?php edit_comment_link( __( '(Edit)', 'basiclaw' ), ' ' ); ?></p>
	<?php
			break;
		default :
	?>
	<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
		<article id="comment-<?php comment_ID(); ?>" class="comment">
			<footer>
				<div class="comment-author vcard">
					<?php echo get_avatar( $comment, 40 ); ?>
					<?php printf( __( '%s <span class="says">says:</span>', 'basiclaw' ), sprintf( '<cite class="fn">%s</cite>', get_comment_author_link() ) ); ?>
				</div><!-- .comment-author .vcard -->
				<?php if ( $comment->comment_approved == '0' ) : ?>
					<em><?php _e( 'Your comment is awaiting moderation.', 'basiclaw' ); ?></em>
					<br />
				<?php endif; ?>

				<div class="comment-meta commentmetadata">
					<a href="<?php echo esc_url( get_comment_link( $comment->comment_ID ) ); ?>"><time pubdate datetime="<?php comment_time( 'c' ); ?>">
					<?php
						/* translators: 1: date, 2: time */
						printf( __( '%1$s at %2$s', 'basiclaw' ), get_comment_date(), get_comment_time() ); ?>
					</time></a>
					<?php edit_comment_link( __( '(Edit)', 'basiclaw' ), ' ' );
					?>
				</div><!-- .comment-meta .commentmetadata -->
			</footer>

			<div class="comment-content"><?php comment_text(); ?></div>

			<div class="reply">
				<?php comment_reply_link( array_merge( $args, array( 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
			</div><!-- .reply -->
		</article><!-- #comment-## -->

	<?php
			break;
	endswitch;
}
endif; // ends check for basiclaw_comment()

if ( ! function_exists( 'basiclaw_posted_on' ) ) :
/**
 * Prints HTML with meta information for the current post-date/time and author.
 * Create your own basiclaw_posted_on to override in a child theme
 *
 * @since basiclaw 1.0
 */
function basiclaw_posted_on() {
	printf( __( '<span class="sep">Posted on </span><a href="%1$s" title="%2$s" rel="bookmark"><time class="entry-date" datetime="%3$s" pubdate>%4$s</time></a><span class="byline"> <span class="sep"> by </span> <span class="author vcard"><a class="url fn n" href="%5$s" title="%6$s" rel="author">%7$s</a></span></span>', 'basiclaw' ),
		esc_url( get_permalink() ),
		esc_attr( get_the_time() ),
		esc_attr( get_the_date( 'c' ) ),
		esc_html( get_the_date() ),
		esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
		esc_attr( sprintf( __( 'View all posts by %s', 'basiclaw' ), get_the_author() ) ),
		esc_html( get_the_author() )
	);
}
endif;

/**
 * Adds custom classes to the array of body classes.
 *
 * @since basiclaw 1.0
 */
function basiclaw_body_classes( $classes ) {
	// Adds a class of single-author to blogs with only 1 published author
	if ( ! is_multi_author() ) {
		$classes[] = 'single-author';
	}

	return $classes;
}
add_filter( 'body_class', 'basiclaw_body_classes' );

/**
 * Returns true if a blog has more than 1 category
 *
 * @since basiclaw 1.0
 */
function basiclaw_categorized_blog() {
	if ( false === ( $all_the_cool_cats = get_transient( 'all_the_cool_cats' ) ) ) {
		// Create an array of all the categories that are attached to posts
		$all_the_cool_cats = get_categories( array(
			'hide_empty' => 1,
		) );

		// Count the number of categories that are attached to the posts
		$all_the_cool_cats = count( $all_the_cool_cats );

		set_transient( 'all_the_cool_cats', $all_the_cool_cats );
	}

	if ( '1' != $all_the_cool_cats ) {
		// This blog has more than 1 category so basiclaw_categorized_blog should return true
		return true;
	} else {
		// This blog has only 1 category so basiclaw_categorized_blog should return false
		return false;
	}
}

/**
 * Flush out the transients used in basiclaw_categorized_blog
 *
 * @since basiclaw 1.0
 */
function basiclaw_category_transient_flusher() {
	// Like, beat it. Dig?
	delete_transient( 'all_the_cool_cats' );
}
add_action( 'edit_category', 'basiclaw_category_transient_flusher' );
add_action( 'save_post', 'basiclaw_category_transient_flusher' );

/**
 * Filter in a link to a content ID attribute for the next/previous image links on image attachment pages
 */
function basiclaw_enhanced_image_navigation( $url ) {
	global $post;

	if ( wp_attachment_is_image( $post->ID ) )
		$url = $url . '#main';

	return $url;
}
add_filter( 'attachment_link', 'basiclaw_enhanced_image_navigation' );


/**
 * This theme was built with PHP, Semantic HTML, CSS, and on a cold morning.
 */