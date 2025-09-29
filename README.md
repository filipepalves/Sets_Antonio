# 🎭 Playwright Tests - Sets António Coutinho

This project contains automated tests using Playwright for the website https://sets.antoniocoutinho.pt/

## 🚀 GitHub Actions - Automated Testing

### ⏰ Automatic Execution
Tests run automatically **every day at 21:00** (Lisbon time) via GitHub Actions.

### 🔧 Manual Execution
To run tests immediately:

1. Go to the **Actions tab** on GitHub: `https://github.com/[your-username]/Sets_Antonio/actions`
2. Click on **"Daily Playwright Tests"** in the workflow list
3. Click the **"Run workflow"** button (top right)
4. Confirm by clicking **"Run workflow"** again
5. Wait a few minutes and view the results

### 📊 View Results
After execution, results appear automatically:
- **Detailed summary** on the action page (in Portuguese)
- **HTML reports** in artifacts (downloadable for 7 days)
- **Screenshots** of failures (if any)

## 💻 Local Installation

```bash
npm install
npx playwright install
```

## 🧪 Running Tests Locally

```bash
# Run all tests
npm test

# Visual test interface
npm run test:ui

# Visible browser during tests
npm run test:headed

# Debug mode
npm run test:debug

# View report after execution
npm run test:report
```

## 📁 Test Structure

- `tests/basic.spec.ts` - 🌐 Basic functionality, downloads, playlist, audio player tests
- `tests/content.spec.ts` - 📋 Content and music structure tests
- `tests/accessibility.spec.ts` - ♿ Accessibility and page structure tests
- `tests/performance.spec.ts` - ⚡ Performance and speed tests

## 🎯 What is Tested

### ✅ Basic Functionality
- Main page loading
- Content display (Michael Larkin - Larkination 2025.01-06)
- Mobile responsiveness
- No console errors

### 🎵 Audio Player
- Functional play button
- HTML5 player loading
- Correct audio source (Dropbox)
- Playback controls

### 📁 Download System
- Functional download buttons
- Correct file names
- Format: "Michael Larkin - Larkination 2025.0X.mp3"

### 📋 Playlist
- Show/hide playlist button
- Playlist elements visible
- Functional close button

### ♿ Accessibility
- Proper page structure
- Keyboard navigation
- Color contrast
- Language attributes

### ⚡ Performance
- Loading speed
- Core Web Vitals
- Memory management

## 📊 Browsers Tested

- 🌐 **Chrome** (Desktop)
- 🦊 **Firefox** (Desktop)
- 🧭 **Safari** (Desktop)
- 📱 **Chrome Mobile**
- 📱 **Safari Mobile**

## ⚙️ Configuration

The Playwright configuration is in `playwright.config.ts` and includes:
- Automatic multi-browser testing
- Mobile device testing
- Screenshots on failure
- Trace for debugging
- Base URL configured for the target site

## 📝 Additional Documentation

See `GITHUB_ACTIONS.md` for more details about GitHub Actions configuration.