<?php
/**
 * The Template for displaying all single posts.
 *
 * @package Basic Law
 * @since Basic Law 1.0
 */

get_header(); ?>

		<div id="primary">
			<div id="content" role="main">

			<?php while ( have_posts() ) : the_post(); ?>


				<?php get_template_part( 'content', 'single' ); ?>

				<?php basiclaw_content_nav( 'nav-below' ); ?>

				<?php comments_template( '', true ); ?>

			<?php endwhile; // end of the loop. ?>

			</div><!-- #content -->
		</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>