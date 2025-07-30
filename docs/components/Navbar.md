# Navbar Component

## Overview

The `Navbar` component is a responsive navigation bar that provides site navigation, mobile menu functionality, and theme switching capabilities.

## File Location
`src/components/HomeComps/Navbar.jsx`

## Component Signature
```javascript
const Navbar = () => {}
```

## Features

- **Responsive Design**: Automatically adapts to mobile and desktop layouts
- **Mobile Menu**: Hamburger menu for mobile devices
- **Theme Toggle**: Switch between light and dark themes
- **Navigation Links**: Links to all main application pages
- **Custom Logo**: Company branding display

## State Management

### State Variables
```javascript
const [showNavbar, setShowNavbar] = useState(false);
const [theme, setTheme] = useState(false);
```

| State | Type | Default | Description |
|-------|------|---------|-------------|
| `showNavbar` | boolean | `false` | Controls mobile menu visibility |
| `theme` | boolean | `false` | Controls current theme (false = light, true = dark) |

### State Methods
```javascript
const handleShowNavbar = () => {
  setShowNavbar(!showNavbar);
};

const handleToggleTheme = (e) => {
  e.preventDefault();
  setTheme(!theme);
};
```

## Navigation Links

The navbar includes the following navigation links:

| Link | Path | Description |
|------|------|-------------|
| Home | `/` | Main landing page |
| Counter | `/counter` | Counter application |
| Timer | `/timer` | Timer application |
| Todo App | `/todoApp` | Todo application |
| About | `/about` | About page |

## Sub-Components

### Hamburger Component
```javascript
const Hamburger = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="24" viewBox="0 0 52 24">
    {/* SVG hamburger icon */}
  </svg>
);
```

**Purpose**: Displays a custom SVG hamburger menu icon for mobile navigation.

**Styling**: 
- Width: 52px
- Height: 24px
- Fill color: #574c4c

### Logo Component
```javascript
const Logo = () => (
  <img 
    style={{width: "180px", height: "58px", backgroundColor: "#fef7e5"}} 
    src="https://github.com/REENA1101/All-In-One1/assets/112796706/996c52e0-c1d1-46ad-8e64-77d04b1f84ed" 
    alt="logo"
  />
);
```

**Purpose**: Displays the company logo.

**Styling**:
- Width: 180px
- Height: 58px
- Background: #fef7e5

## Theme Toggle

The theme toggle uses MDB icons to indicate the current theme:

```javascript
{theme ? (
  <a href="">
    <MDBIcon icon='cube' />
  </a>
) : (
  <a href="">
    <MDBIcon icon='circle' />
  </a>
)}
```

- **Light Theme**: Circle icon
- **Dark Theme**: Cube icon

## CSS Classes

The component relies on CSS classes for styling:

```javascript
<nav className="navbar">
  <div className="container">
    <div className="logo">
      <Logo />
    </div>
    <div className="menu-icon" onClick={handleShowNavbar}>
      <Hamburger />
    </div>
    <div className={`nav-elements ${showNavbar && "active"}`}>
      {/* Navigation content */}
    </div>
  </div>
</nav>
```

### Key Classes
- `navbar` - Main navigation container
- `container` - Content wrapper
- `logo` - Logo container
- `menu-icon` - Mobile menu toggle
- `nav-elements` - Navigation links container
- `active` - Applied when mobile menu is open

## Usage Examples

### Basic Usage
```javascript
import Navbar from './components/HomeComps/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      {/* Rest of your app */}
    </div>
  );
}
```

### With Layout Component
```javascript
import React from 'react';
import Navbar from './components/HomeComps/Navbar';
import Footer from './components/HomeComps/Footer';

function Layout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
```

## Dependencies

### Required Imports
```javascript
import { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
```

### External Dependencies
- React (useState hook)
- React Router DOM (NavLink for navigation)
- MDB React UI Kit (MDBIcon component)

## Accessibility Considerations

### Current Implementation
- Uses semantic `<nav>` element
- Includes `alt` attribute for logo image
- Uses proper button-like interaction for menu toggle

### Recommended Improvements
```javascript
// Add ARIA attributes for better accessibility
<div 
  className="menu-icon" 
  onClick={handleShowNavbar}
  role="button"
  tabIndex={0}
  aria-label="Toggle navigation menu"
  aria-expanded={showNavbar}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleShowNavbar();
    }
  }}
>
  <Hamburger />
</div>

// Add ARIA label for theme toggle
<li 
  onClick={handleToggleTheme}
  role="button"
  tabIndex={0}
  aria-label={`Switch to ${theme ? 'light' : 'dark'} theme`}
>
  {/* Theme toggle content */}
</li>
```

## Responsive Behavior

### Desktop (Large Screens)
- Full navigation menu visible
- Logo displayed on the left
- Navigation links in horizontal layout
- Theme toggle visible

### Mobile (Small Screens)
- Hamburger menu icon displayed
- Navigation menu hidden by default
- Menu slides in when `showNavbar` is true
- Logo remains visible

### CSS Media Queries (Recommended)
```css
/* Desktop styles */
.navbar .nav-elements {
  display: flex;
}

.navbar .menu-icon {
  display: none;
}

/* Mobile styles */
@media (max-width: 768px) {
  .navbar .nav-elements {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
  }
  
  .navbar .nav-elements.active {
    display: flex;
  }
  
  .navbar .menu-icon {
    display: block;
  }
}
```

## Performance Considerations

### Optimization Opportunities
1. **Memoization**: Use `React.memo` to prevent unnecessary re-renders
2. **Callback Optimization**: Use `useCallback` for event handlers
3. **Icon Loading**: Consider lazy loading or sprite sheets for icons

### Optimized Version Example
```javascript
import React, { useState, useCallback, memo } from 'react';

const Navbar = memo(() => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [theme, setTheme] = useState(false);

  const handleShowNavbar = useCallback(() => {
    setShowNavbar(prev => !prev);
  }, []);

  const handleToggleTheme = useCallback((e) => {
    e.preventDefault();
    setTheme(prev => !prev);
  }, []);

  // Component JSX remains the same
});

export default Navbar;
```

## Testing Considerations

### Unit Tests
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  const renderNavbar = () => {
    return render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  };

  test('renders navigation links', () => {
    renderNavbar();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Counter')).toBeInTheDocument();
    expect(screen.getByText('Timer')).toBeInTheDocument();
  });

  test('toggles mobile menu', () => {
    renderNavbar();
    const menuIcon = screen.getByRole('button'); // Would need proper ARIA
    fireEvent.click(menuIcon);
    // Assert menu visibility change
  });

  test('toggles theme', () => {
    renderNavbar();
    const themeToggle = screen.getByRole('button'); // Theme toggle
    fireEvent.click(themeToggle);
    // Assert theme change
  });
});
```

## Future Enhancements

1. **Complete Theme Implementation**: Apply theme changes to entire application
2. **Animation**: Add smooth animations for mobile menu and theme transitions
3. **User Preferences**: Persist theme preference in localStorage
4. **Search Functionality**: Add search bar to navigation
5. **User Menu**: Add user authentication and profile menu
6. **Breadcrumbs**: Add breadcrumb navigation for nested routes

## Related Components

- [Footer](./Footer.md) - Page footer component
- [AllRoutes](./AllRoutes.md) - Route configuration
- [HomePage](./HomePage.md) - Uses Navbar component