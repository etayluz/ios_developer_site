<?php
/**
 * @package Basic Law
 * @since Basic Law 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<h1 class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'basiclaw' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h1>

		<?php if ( 'post' == get_post_type() ) : ?>
		<div class="entry-meta">
<div class="postedon"><?php basiclaw_posted_on(); ?></div> <div class="commentsico"> <?php comments_popup_link( __( 'Leave a comment', 'basiclaw' ), __( '1 Comment', 'basiclaw' ), __( '% Comments', 'basiclaw' ) ); ?></div>
		</div><!-- .entry-meta -->
		<?php endif; ?>
		
	</header><!-- .entry-header -->

	<?php if ( is_search() ) : // Only display Excerpts for Search ?>
	<div class="entry-content">
		<?php the_excerpt(); ?>
	</div><!-- .entry-summary -->
	<?php else : ?>
	<div class="entry-content">
		<?php the_post_thumbnail('single-post-thumbnail'); ?>
		<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'basiclaw' ) ); ?>
		<?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'basiclaw' ), 'after' => '</div>' ) ); ?>
	</div><!-- .entry-content -->
	<?php endif; ?>

	<footer class="entry-meta">
		<?php edit_post_link( __( 'Edit this post', 'basiclaw' ), '<span class="edit-link">', '</span>' ); ?>
	</footer><!-- #entry-meta -->
</article><!-- #post-<?php the_ID(); ?> -->
