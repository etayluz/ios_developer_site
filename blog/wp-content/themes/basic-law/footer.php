<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package Basic Law
 * @since Basic Law 1.0
 */
?>

</div><!-- #main -->
	<footer id="colophon" role="contentinfo">
		<div id="site-generator">			
		
		
			Powered by <a href="http://wordpress.org/" title="<?php esc_attr_e( 'A Semantic Personal Publishing Platform', '_s' ); ?>" rel="generator"><?php printf( __( '%s', '_s' ), 'WordPress' ); ?></a>.

<?php printf( __( 'Theme: %1$s by %2$s.', 'basiclaw' ), 'Basic Law', '<a href="http://generalthemes.com/basic-law/" rel="designer">General Themes</a>' ); ?>

		</div>
		
		<div id="logoinfo">
			<h3 id="site-title"><a href="<?php echo home_url( '/' ); ?>"><?php bloginfo('name'); ?></a></h3>

			<p class="address">111 Example Drive &middot; Moscow, Idaho &middot; 53219</p>


			<p class="legal"><strong>Disclaimer:</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
		</div>	
	</footer><!-- #colophon -->

	</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>