/*
© 2026 Not Found Pages · 404-retro-macos-window
Released under the Apache-2.0 License

Repository → https://github.com/notfoundpages/404-retro-macos-window
Live Preview → https://notfoundpages.github.io/404-retro-macos-window

Discover the full collection → https://notfoundpages.github.io
*/

/**
 * Changes the background color of the page and updates the CSS custom property.
 * This function is called when macOS-style window control buttons are clicked,
 * allowing users to dynamically change the background color of the 404 page.
 *
 * @function changeColor
 * @param {string} color - Hex color code or CSS color value (e.g., '#ff5f56', 'rgb(255, 95, 86)')
 * @returns {void}
 * @example
 * // Change background to red
 * changeColor('#ff5f56');
 */

function changeColor(color) {
  // Update the body element's background color
  document.body.style.backgroundColor = color;
  
  // Update the CSS custom property (--bg-color) to maintain consistency
  // This ensures the drop shadow color and other dependent styles update
  document.documentElement.style.setProperty('--bg-color', color);
}