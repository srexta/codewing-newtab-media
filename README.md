# Codewing Media AI Image List Plugin

**Contributors:** Codewing Media  
**Tags:** media, images, AI, Gutenberg, WordPress Media Library  
**Requires at least:** 5.0  
**Tested up to:** 6.3  
**Stable tag:** 1.0  
**Requires PHP:** 7.0  
**License:** GPL-2.0+  
**License URI:** https://www.gnu.org/licenses/gpl-2.0.html  

## Description

The **Codewing Media AI Image List Plugin** adds a new "AI Image List" tab to the WordPress Media Modal. This tab enables users to browse and select AI-generated images dynamically fetched from an external source. Each image can be seamlessly inserted into the WordPress editor.

### Features

- Adds a custom "AI Image List" tab in the WordPress Media Modal.
- Dynamically fetches AI-generated images via AJAX.
- Displays image thumbnails, names, and an "Insert" button for easy usage.

## Installation

1. Download the plugin and upload the folder to the `/wp-content/plugins/` directory.
2. Activate the plugin through the "Plugins" menu in WordPress.
3. The "AI Image List" tab will now be available in the WordPress Media Modal.

## Screenshots

### 1. AI Image List Tab
This screenshot shows the "AI Image List" tab in the WordPress Media Modal with dynamically fetched AI-generated images.

![AI Image List Screenshot](https://via.placeholder.com/800x400)

### 2. Insert AI Images
This screenshot shows the "Insert" button for each AI-generated image in the list.

![Insert AI Images Screenshot](https://via.placeholder.com/800x400)

## Frequently Asked Questions

### Q: How do I fetch my own AI-generated images?
You can modify the `ai_fetch_ai_images()` function in the `ai-image-list-plugin.php` file to pull images from your own external API or data source.

### Q: Can I use this plugin with a custom media modal?
Yes! This plugin is designed to extend the WordPress media modal, and it can be integrated into custom implementations as well.

## Changelog

### 1.0
- Initial release
- Adds a custom "AI Image List" tab to the WordPress Media Modal
- Displays dynamically fetched AI-generated images
- Provides an "Insert" button for each image

## License

This plugin is licensed under the [GPL-2.0+](https://www.gnu.org/licenses
