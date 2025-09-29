# GitHub Actions Setup

The GitHub Action is configured to run **automatically** without additional configuration needed.

## ⏰ Schedule

The workflow is configured to run:
- **Daily at 21:00** (Lisbon time)
- **Manually** whenever you want (workflow_dispatch)

## 📊 View Results

Results are shown directly on the **GitHub Actions page**:

1. Go to **Actions** tab in your repo
2. Select **Daily Playwright Tests** 
3. Click on a specific run
4. View the **detailed summary** on the action page
5. Download **artifacts** with complete HTML reports

## 🔍 What is tested

- ✅ Basic functionality tests
- 🎵 Audio player functionality  
- 📱 Download functionality
- 📋 Playlist functionality
- ♿ Accessibility tests
- ⚡ Performance tests
- 📱 Mobile responsiveness

## 📊 Browsers Tested

- 🌐 Chrome (Desktop)
- 🦊 Firefox (Desktop)  
- 🧭 Safari (Desktop)
- 📱 Chrome Mobile
- 📱 Safari Mobile

## 🧪 Manual Testing

To execute immediately:
1. Go to **Actions** on GitHub
2. Select **Daily Playwright Tests**
3. Click **Run workflow** → **Run workflow**

**Note:** No email configuration needed - all results are visible directly on GitHub!