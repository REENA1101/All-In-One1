# Utility Functions Documentation

This directory contains documentation for utility functions used throughout the All-In-One React application.

## Available Utilities

### Performance Monitoring
- [reportWebVitals](./reportWebVitals.md) - Core Web Vitals performance monitoring

## Quick Reference

| Function | File | Purpose | Parameters |
|----------|------|---------|------------|
| reportWebVitals | `src/reportWebVitals.js` | Performance monitoring | `onPerfEntry` (Function) |

## Usage Guidelines

1. All utility functions are pure functions where possible
2. Functions follow camelCase naming convention
3. Utilities are designed to be reusable across components
4. Each utility includes proper error handling
5. Performance utilities use dynamic imports for optimization

## Integration Examples

### Basic Performance Monitoring
```javascript
import reportWebVitals from './reportWebVitals';

// Log to console
reportWebVitals(console.log);

// Send to analytics
reportWebVitals(sendToAnalytics);
```

### Custom Analytics Integration
```javascript
import reportWebVitals from './reportWebVitals';

function sendToAnalytics(metric) {
  // Google Analytics example
  gtag('event', 'web_vital', {
    name: metric.name,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    event_label: metric.id,
  });
}

reportWebVitals(sendToAnalytics);
```

## Development Notes

- Utilities are designed for tree-shaking compatibility
- All utilities include TypeScript-ready implementations
- Performance utilities use lazy loading to minimize bundle size
- Error boundaries are recommended when using utilities in components