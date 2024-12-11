<?php
/**
 * Plugin Name: Codewing Media
 * Description: Adds a new "Codewing Media" tab in the WordPress Media Upload Modal.
 * Version: 1.0
 * Author: Your Name
 * Text Domain: codewing-media
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

class Codewing_Media {
    public function __construct() {
        $this->init();
    }

    public function init(){
        add_action( 'admin_enqueue_scripts', [$this, 'enqueue_scripts'] );
        add_action('print_media_templates', [$this, 'add_media_templates']);
    }

    //Enqueue scripts
    public function enqueue_scripts( $hook ) {
        wp_enqueue_script(
            'codewingmedia',
            plugins_url('js/codewingmedia.js', __FILE__ ),
            ['jquery', 'media-views']
        );
    }
    public function add_media_templates() {
        ?>
        <script type="text/html" id="tmpl-codewingmedia">
            <div class="wrapper-codewingmedia">
                    <div class="codewingmedia__content__title">This is a title</div>
                    <div class="codewingmedia__content__description">This is description</div>
                    <button>Click Me</button>
                </div>
            </div>  
        </script>
        <?php
    }
}

new Codewing_Media();