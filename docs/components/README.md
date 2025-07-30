# Component Documentation

This directory contains detailed documentation for all React components in the All-In-One application.

## Component Categories

### Layout Components
- [Navbar](./Navbar.md) - Responsive navigation bar with theme switching
- [Footer](./Footer.md) - Comprehensive footer with social links and company info
- [Middle](./Middle.md) - Main content area with feature cards

### Page Components
- [HomePage](./HomePage.md) - Main landing page layout
- [About](./About.md) - About page component
- [Counter](./Counter.md) - Counter application page
- [Timer](./Timer.md) - Timer application page
- [TodoApp](./TodoApp.md) - Todo application page
- [Blogs](./Blogs.md) - Blog page component
- [Contact](./Contact.md) - Contact page component

### Routing Components
- [AllRoutes](./AllRoutes.md) - Route configuration component

### Application Components
- [App](./App.md) - Root application component

## Quick Reference

| Component | File | Purpose | Props |
|-----------|------|---------|-------|
| App | `src/App.js` | Root component | None |
| HomePage | `src/pages/HomePage.jsx` | Main layout | None |
| Navbar | `src/components/HomeComps/Navbar.jsx` | Navigation | None |
| Footer | `src/components/HomeComps/Footer.jsx` | Footer | None |
| Middle | `src/components/HomeComps/Middle.jsx` | Content area | None |
| AllRoutes | `src/components/AllRoutes.jsx` | Routing | None |

## Usage Guidelines

1. All components are functional components using React hooks
2. Components follow React naming conventions (PascalCase)
3. Most components currently don't accept props (future enhancement opportunity)
4. Components use MDB React UI Kit and Bootstrap for styling
5. Navigation uses React Router DOM

## Development Notes

- Many page components are currently placeholders awaiting implementation
- Theme switching is partially implemented in Navbar
- Responsive design is implemented throughout
- Components are ready for prop validation and testing implementation