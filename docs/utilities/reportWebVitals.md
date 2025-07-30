# reportWebVitals Utility

## Overview

The `reportWebVitals` function is a performance monitoring utility that measures and reports Core Web Vitals metrics using the `web-vitals` library. It provides insights into user experience and page performance.

## File Location
`src/reportWebVitals.js`

## Function Signature
```javascript
const reportWebVitals = onPerfEntry => {}
```

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `onPerfEntry` | Function | Yes | Callback function to handle performance entries |

## Core Web Vitals Measured

### Metrics Overview

| Metric | Full Name | Type | Description | Good Threshold |
|--------|-----------|------|-------------|----------------|
| **CLS** | Cumulative Layout Shift | Stability | Visual stability of page | < 0.1 |
| **FID** | First Input Delay | Interactivity | Time to first user interaction | < 100ms |
| **FCP** | First Contentful Paint | Loading | Time to first content render | < 1.8s |
| **LCP** | Largest Contentful Paint | Loading | Time to largest content render | < 2.5s |
| **TTFB** | Time to First Byte | Loading | Server response time | < 600ms |

### Metric Details

#### Cumulative Layout Shift (CLS)
```javascript
getCLS(onPerfEntry);
```
- **Purpose**: Measures visual stability
- **Range**: 0 to infinity (lower is better)
- **Good**: < 0.1
- **Poor**: > 0.25
- **Common Causes**: Images without dimensions, dynamic content insertion

#### First Input Delay (FID)
```javascript
getFID(onPerfEntry);
```
- **Purpose**: Measures interactivity responsiveness
- **Unit**: Milliseconds
- **Good**: < 100ms
- **Poor**: > 300ms
- **Common Causes**: Heavy JavaScript execution, large bundle sizes

#### First Contentful Paint (FCP)
```javascript
getFCP(onPerfEntry);
```
- **Purpose**: Measures loading performance
- **Unit**: Milliseconds
- **Good**: < 1.8s
- **Poor**: > 3.0s
- **Common Causes**: Slow server response, render-blocking resources

#### Largest Contentful Paint (LCP)
```javascript
getLCP(onPerfEntry);
```
- **Purpose**: Measures loading performance of main content
- **Unit**: Milliseconds
- **Good**: < 2.5s
- **Poor**: > 4.0s
- **Common Causes**: Slow server response, large images, client-side rendering

#### Time to First Byte (TTFB)
```javascript
getTTFB(onPerfEntry);
```
- **Purpose**: Measures server response time
- **Unit**: Milliseconds
- **Good**: < 600ms
- **Poor**: > 1500ms
- **Common Causes**: Slow server processing, network latency, CDN issues

## Implementation

### Core Function
```javascript
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
```

### Dynamic Import Benefits
- **Bundle Size**: Reduces initial bundle size
- **Performance**: Loads only when needed
- **Tree Shaking**: Better optimization in production builds

## Usage Examples

### Basic Console Logging
```javascript
import reportWebVitals from './reportWebVitals';

// Log all metrics to console
reportWebVitals(console.log);

// Custom logging with formatting
reportWebVitals((metric) => {
  console.log(`${metric.name}: ${metric.value}`, metric);
});
```

### Google Analytics Integration
```javascript
import reportWebVitals from './reportWebVitals';

function sendToGoogleAnalytics(metric) {
  gtag('event', 'web_vital', {
    name: metric.name,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    event_label: metric.id,
    non_interaction: true,
  });
}

reportWebVitals(sendToGoogleAnalytics);
```

### Custom Analytics Service
```javascript
import reportWebVitals from './reportWebVitals';

function sendToAnalytics(metric) {
  // Send to your analytics service
  fetch('/api/analytics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: metric.name,
      value: metric.value,
      id: metric.id,
      delta: metric.delta,
      entries: metric.entries,
      timestamp: Date.now(),
    }),
  });
}

reportWebVitals(sendToAnalytics);
```

### Multiple Handlers
```javascript
import reportWebVitals from './reportWebVitals';

function handleMetrics(metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }
  
  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    sendToAnalytics(metric);
  }
  
  // Store in local storage for debugging
  const metrics = JSON.parse(localStorage.getItem('webVitals') || '[]');
  metrics.push(metric);
  localStorage.setItem('webVitals', JSON.stringify(metrics.slice(-10))); // Keep last 10
}

reportWebVitals(handleMetrics);
```

## Metric Object Structure

### Standard Metric Properties
```typescript
interface Metric {
  name: string;        // Metric name (CLS, FID, FCP, LCP, TTFB)
  value: number;       // Metric value
  id: string;          // Unique identifier for the metric
  delta: number;       // Delta since last report
  entries: PerformanceEntry[]; // Performance entries used to calculate the metric
}
```

### Example Metric Object
```javascript
{
  name: 'LCP',
  value: 1234.5,
  id: 'v3-1629123456789-123456789',
  delta: 1234.5,
  entries: [PerformanceEntry, PerformanceEntry]
}
```

## Integration with React Application

### Application Entry Point
```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Start measuring performance
reportWebVitals(console.log);
```

### Conditional Monitoring
```javascript
import reportWebVitals from './reportWebVitals';

// Only monitor in production
if (process.env.NODE_ENV === 'production') {
  reportWebVitals(sendToAnalytics);
}

// Monitor with different handlers based on environment
const handler = process.env.NODE_ENV === 'production' 
  ? sendToAnalytics 
  : console.log;

reportWebVitals(handler);
```

## Performance Optimization

### Lazy Loading Implementation
The function uses dynamic imports to avoid loading the `web-vitals` library until needed:

```javascript
// Only loads web-vitals when reportWebVitals is called
import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
  // Measure metrics
});
```

### Bundle Size Impact
- **Without dynamic import**: ~5KB added to main bundle
- **With dynamic import**: ~5KB loaded only when used
- **Tree shaking**: Unused metrics can be excluded in optimized builds

## Error Handling

### Robust Implementation
```javascript
const reportWebVitals = onPerfEntry => {
  try {
    if (onPerfEntry && typeof onPerfEntry === 'function') {
      import('web-vitals')
        .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(onPerfEntry);
          getFID(onPerfEntry);
          getFCP(onPerfEntry);
          getLCP(onPerfEntry);
          getTTFB(onPerfEntry);
        })
        .catch(error => {
          console.warn('Failed to load web-vitals:', error);
        });
    }
  } catch (error) {
    console.warn('Error in reportWebVitals:', error);
  }
};
```

### Handler Error Handling
```javascript
function safeMetricHandler(metric) {
  try {
    // Your metric handling logic
    sendToAnalytics(metric);
  } catch (error) {
    console.error('Failed to handle metric:', error, metric);
  }
}

reportWebVitals(safeMetricHandler);
```

## Testing Considerations

### Unit Tests
```javascript
import reportWebVitals from './reportWebVitals';

describe('reportWebVitals', () => {
  test('calls onPerfEntry function', async () => {
    const mockHandler = jest.fn();
    
    // Mock web-vitals module
    jest.doMock('web-vitals', () => ({
      getCLS: jest.fn(handler => handler({ name: 'CLS', value: 0.1 })),
      getFID: jest.fn(handler => handler({ name: 'FID', value: 50 })),
      getFCP: jest.fn(handler => handler({ name: 'FCP', value: 1500 })),
      getLCP: jest.fn(handler => handler({ name: 'LCP', value: 2000 })),
      getTTFB: jest.fn(handler => handler({ name: 'TTFB', value: 200 })),
    }));

    reportWebVitals(mockHandler);
    
    // Wait for dynamic import
    await new Promise(resolve => setTimeout(resolve, 0));
    
    expect(mockHandler).toHaveBeenCalledTimes(5);
  });

  test('handles invalid onPerfEntry gracefully', () => {
    expect(() => {
      reportWebVitals(null);
      reportWebVitals(undefined);
      reportWebVitals('invalid');
    }).not.toThrow();
  });
});
```

### Integration Tests
```javascript
import { render } from '@testing-library/react';
import App from './App';
import reportWebVitals from './reportWebVitals';

describe('Performance Monitoring Integration', () => {
  test('measures performance metrics', async () => {
    const metrics = [];
    const collectMetric = (metric) => metrics.push(metric);
    
    render(<App />);
    reportWebVitals(collectMetric);
    
    // Wait for metrics to be collected
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    expect(metrics.length).toBeGreaterThan(0);
    expect(metrics.some(m => m.name === 'FCP')).toBe(true);
  });
});
```

## Browser Compatibility

### Supported Browsers
- Chrome 60+
- Firefox 58+
- Safari 12+
- Edge 79+

### Polyfill Considerations
```javascript
// Check for Performance Observer support
if ('PerformanceObserver' in window) {
  reportWebVitals(handleMetrics);
} else {
  console.warn('Performance monitoring not supported in this browser');
}
```

## Monitoring Best Practices

### 1. Sampling
```javascript
function sampledHandler(metric) {
  // Only send 10% of metrics to reduce load
  if (Math.random() < 0.1) {
    sendToAnalytics(metric);
  }
}

reportWebVitals(sampledHandler);
```

### 2. Batching
```javascript
let metricsBatch = [];

function batchedHandler(metric) {
  metricsBatch.push(metric);
  
  // Send batch every 10 metrics or after 30 seconds
  if (metricsBatch.length >= 10) {
    sendBatchToAnalytics(metricsBatch);
    metricsBatch = [];
  }
}

// Send remaining metrics on page unload
window.addEventListener('beforeunload', () => {
  if (metricsBatch.length > 0) {
    sendBatchToAnalytics(metricsBatch);
  }
});

reportWebVitals(batchedHandler);
```

### 3. User Consent
```javascript
function consentAwareHandler(metric) {
  if (hasUserConsent()) {
    sendToAnalytics(metric);
  }
}

reportWebVitals(consentAwareHandler);
```

## Troubleshooting

### Common Issues

#### Metrics Not Reporting
- Check browser compatibility
- Verify dynamic import support
- Ensure handler function is valid

#### High CLS Values
- Add dimensions to images
- Avoid inserting content above existing content
- Use CSS containment

#### High FID Values
- Reduce JavaScript bundle size
- Use code splitting
- Optimize third-party scripts

#### High LCP Values
- Optimize images (WebP, lazy loading)
- Improve server response time
- Use CDN for static assets

## Related Documentation

- [Web Vitals Official Documentation](https://web.dev/vitals/)
- [Chrome DevTools Performance](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance)
- [React Performance Optimization](https://reactjs.org/docs/optimizing-performance.html)