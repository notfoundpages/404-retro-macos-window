# Contributing to 404-retro-macos-window

Thank you for your interest in contributing! We're excited to have you help improve this project. This document provides guidelines to make the contribution process smooth and effective.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Types of Contributions](#types-of-contributions)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Submitting Changes](#submitting-changes)
- [Style Guide](#style-guide)
- [Project Vision](#project-vision)

## 📜 Code of Conduct

By participating in this project, you agree to be respectful and constructive. We're committed to providing a welcoming and inclusive environment for everyone.

- Be respectful of differing opinions and experiences
- Provide and accept constructive feedback gracefully
- Focus on what is best for the community
- Show empathy towards other community members

## 🚀 Getting Started

### Prerequisites
- Git knowledge (basic commands)
- A code editor (VS Code, Sublime Text, etc.)

### Fork & Clone
1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/404-retro-macos-window.git
   cd 404-retro-macos-window
   ```

3. Add the upstream remote:
   ```bash
   git remote add upstream https://github.com/notfoundpages/404-retro-macos-window.git
   ```

## 🎯 Types of Contributions

### 🐛 Bug Reports
Found an issue? Help us squash bugs!

**Before submitting a bug report:**
- Check if the issue already exists in [GitHub Issues](https://github.com/notfoundpages/404-retro-macos-window/issues)
- Test on multiple browsers if it's a display issue
- Include your browser and OS information

**When submitting a bug report:**
- Use a clear, descriptive title
- Describe the exact steps to reproduce
- Provide specific examples to demonstrate the issue
- Describe the behavior you observed and expected
- Include screenshots if applicable
- Mention your browser, OS, and device type

### ✨ Feature Requests
Have an idea to make this project even better?

**When submitting a feature request:**
- Use a clear, descriptive title
- Provide a detailed description of the proposed feature
- Explain the use case and why this feature would be useful
- Include mockups or examples if applicable
- Keep in mind: we prioritize simplicity and minimal dependencies

### 📝 Documentation Improvements
- Typos or unclear explanations
- Missing code examples
- Improved README sections
- Better inline code comments

### 🔧 Code Enhancements
Small fixes and improvements that maintain the project's minimalist philosophy:
- Performance optimizations
- Accessibility improvements
- CSS refinements
- Cross-browser compatibility fixes

## 🔨 Development Setup

### Project Structure
```
404-retro-macos-window/
├── index.html          # Main HTML structure
├── style.css           # All styling (no preprocessors)
├── script.js           # Pure JavaScript (no frameworks)
├── assets/             # Images and media files
└── LICENSE
```

### No Build Process
This project intentionally avoids build tools to keep it lightweight and dependency-free. You can test changes by:
1. Opening `index.html` directly in your browser
2. Using a local HTTP server (optional) to test locally:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser

## ✏️ Making Changes

### Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
# or for bug fixes
git checkout -b fix/bug-description
```

### Branch Naming Convention
- Feature: `feature/descriptive-name`
- Bug fix: `fix/issue-description`
- Documentation: `docs/what-you-changed`
- Example: `feature/dark-mode-toggle`, `fix/mobile-layout-gap`

### Code Guidelines

#### HTML
- Use semantic HTML5 elements
- Keep markup minimal and clean
- Maintain proper heading hierarchy
- Include meaningful `alt` text for images

#### CSS
- Keep selectors simple and performant
- Use CSS custom properties (variables) for colors
- Avoid complex nesting
- Comment on non-obvious styling decisions
- Mobile-first approach

#### JavaScript
- Keep it vanilla (no frameworks)
- Use meaningful variable and function names
- Write self-documenting code with few comments needed
- Avoid global variables
- Test in multiple browsers

### Example Change

**Adding a new feature:**
```html
<!-- Keep HTML minimal -->
<button class="new-button" onclick="newFunction()">Click</button>
```

```css
/* Use existing patterns */
.new-button {
  background: var(--window-bg);
  border: 2px solid var(--border-color);
  cursor: pointer;
  transition: transform 0.15s;
}

.new-button:hover {
  transform: scale(1.05);
}
```

```javascript
// Keep JavaScript simple and focused
function newFunction() {
  // Do something
}
```

## 📤 Submitting Changes

### Before You Submit

1. **Test your changes** across multiple browsers and screen sizes
2. **Run a final review** of your code
3. **Keep commits logical** — one feature/fix per commit
4. **Update documentation** if you added new functionality

### Commit Messages

Use clear, descriptive commit messages:

```
Add feature: dark mode toggle for 404 page

- Implements toggle button in title bar
- Adds CSS custom properties for dark theme
- Maintains retro aesthetic
- Tested in Chrome, Firefox, Safari
```

Keep commits focused and atomic (one change per commit).

### Create a Pull Request

1. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Open a Pull Request on GitHub with:
   - Clear title describing the change
   - Reference any related issues (e.g., "Fixes #123")
   - Detailed description of what changed and why
   - Screenshots for UI changes
   - Testing notes (browsers tested, etc.)

### PR Template Example

```markdown
## Description
Brief explanation of changes

## Related Issues
Fixes #123

## Changes Made
- Change 1
- Change 2

## Testing
- [x] Chrome (v90+)
- [x] Firefox (v88+)
- [x] Safari (v14+)
- [x] Mobile (iOS Safari, Chrome)

## Screenshots (if applicable)
[Add screenshots here]
```

## 📐 Style Guide

### General Code Style

**Indentation:** 2 spaces
```css
.selector {
  property: value;
}
```

**Variable Naming:** camelCase for JS, kebab-case for CSS
```javascript
let windowHeight = 100;
```

```css
--window-bg: #f9f9f9;
```

**File Organization:**
- Keep related code together
- Comments should explain *why*, not *what*
- Maximum line length: 100 characters for readability

### Color Palette
Stick to the project's established colors:
- Window Background: `#f9f9f9`
- Border: `#000000`
- Blue: `#2b7fff`
- Red: `#ff5f56`
- Yellow: `#ffbd2e`
- Green: `#27c93f`

## 🎨 Project Vision

This project maintains a specific philosophy:

✅ **Do:**
- Keep it minimal and lightweight
- Use pure HTML/CSS/JavaScript
- Prioritize accessibility
- Support modern browsers
- Maintain retro macOS aesthetic

❌ **Don't:**
- Add build tools or dependencies
- Use frameworks or libraries
- Over-complicate the design
- Add features that bloat the payload
- Break mobile responsiveness

## 📞 Questions?

- Comment on relevant GitHub Issues
- Create a discussion if your question doesn't fit an issue
- Check the [README.md](README.md) for technical details

## 🎓 Learn More

- [GitHub Contributing Guide](https://github.com/github/docs/blob/main/CONTRIBUTING.md)
- [Open Source Guides](https://opensource.guide/)
- [Keep a Changelog](https://keepachangelog.com/)

---

**Thank you for contributing to 404-retro-macos-window!** Your efforts help make the web more creative and fun. 🎉

**Made with ❤️ by [Not Found Pages](https://notfoundpages.github.io)**
