# Playwright Tests for Sets António Coutinho

This project contains automated tests using Playwright for the website https://sets.antoniocoutinho.pt/

## Installation

```bash
npm install
npx playwright install
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests with visual interface
npm run test:ui

# Run tests with visible browser
npm run test:headed

# Debug tests
npm run test:debug

# View test report
npm run test:report
```

## Test Structure

- `tests/basic.spec.ts` - Basic functionality tests
- `tests/performance.spec.ts` - Performance tests
- `tests/accessibility.spec.ts` - Accessibility tests

## Configuration

The Playwright configuration is in `playwright.config.ts` and includes:
- Multi-browser testing (Chrome, Firefox, Safari)
- Mobile device testing
- Screenshots on failure
- Trace for debugging
- Base URL configured for the target site