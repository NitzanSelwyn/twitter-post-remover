# Twitter Ad Remover Chrome Extension

A simple Chrome extension that automatically removes ad posts from your Twitter feed by detecting posts containing ad-related text.

## Features

- Automatically detects and removes posts containing ad-related text
- Works on both twitter.com and x.com
- Real-time detection of new posts
- Lightweight and efficient

## Installation

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the directory containing the extension files

## How it Works

The extension works by:
1. Scanning Twitter posts for ad-related text (ad, advertisement, promoted, sponsored)
2. Hiding posts that contain these terms
3. Continuously monitoring for new posts using a MutationObserver

## Files

- `manifest.json`: Extension configuration
- `content.js`: Main script that handles ad detection and removal
- `icon48.png` and `icon128.png`: Extension icons (you'll need to add these)

## Note

You'll need to add icon files (icon48.png and icon128.png) to make the extension complete. You can create these icons yourself or use placeholder images.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 