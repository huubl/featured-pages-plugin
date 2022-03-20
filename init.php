<?php
/**
 * Plugin Name:       Featured Pages Block
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Huubl
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       featured-pages
 *
 * @package           featured-pages-block
 */

function featured_pages_block_init() {

	register_block_type(
		plugin_dir_path( __FILE__ ) . 'build',
		array(
			'render_callback' => 'featured_pages_block_render_callback',
		)
	);
}
add_action( 'init', 'featured_pages_block_init' );


function featured_pages_block_render_callback( $attributes, $content, $block) {
	ob_start();
?>
	<p <?php echo get_block_wrapper_attributes(); ?>>
		<?php esc_html_e( 'Render pages here', 'featured-pages' ); ?>
		<?php var_export($attributes); ?>
	</p>
<?php
	return ob_get_clean();
}
