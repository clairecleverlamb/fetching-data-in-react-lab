# **Starship Search Engine SPA**

![Starship Demo](./src/assets/starshipAPI.gif)

A Star Wars-themed Single Page Application (SPA) for searching starships using the SWAPI (Star Wars API). Search for starships by name, model, manufacturer, or class, and view relevant details in a visually appealing card format.

## **Features**

- **Dynamic Search Engine**: Case-insensitive, real-time filtering of starships by name, model, manufacturer, and class, powered by React state management.
- **Typewriter Animation**: CSS-driven `@keyframes` animation with `steps()` timing, rendering a galactic typing effect for the landing header.
- **Starship Cards**: Modular components displaying key attributes (name, class, manufacturer, model) in a visually cohesive card layout.
- **Search Metadata**: Real-time updates of result counts and last query, enhancing user context and interaction clarity.
- **Reset Functionality**: One-click reset to display all starships, implemented via event-driven state updates.
- **Responsive UI**: CSS Grid and Flexbox ensure seamless adaptability across desktop and mobile breakpoints.


## **Tech Stack**

- **React**: v18.x, leveraging hooks (`useState`, `useEffect`) for efficient state and side-effect management.
- **SWAPI**: RESTful API integration with asynchronous data fetching and pagination handling.
- **CSS**: Custom styles with `@keyframes`, `transform`, and glowing pseudo-elements for a Star Wars aesthetic.
- **Star Jedi Font**: Imported via `/assets` for thematic typography.
- **Build Tools**: npm for package management; compatible with Vite or Webpack bundlers.


## **Styling Highlights**
- **Galactic Theme**: Dark space background with glowing blue accents (--lightsaber-glow) and yellow text (--force-yellow).
- **Typography**: "Star Jedi" font for headers, paired with subtle text shadows for depth.
- **Animations**: Performant CSS transitions (opacity, transform) for fade-ins and hover effects.

## Typing Animation
To add a dynamic touch to your headers, use the following typing effect animation CSS:

```css
@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

.typing-header {
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 0 5px var(--galaxy-blue);
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid var(--lightsaber-glow); 
    animation: 
        typing 3s steps(23, end) forwards, 
        blink 0.75s step-end infinite; 
}


[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![SWAPI](https://img.shields.io/badge/SWAPI-Star%20Wars%20API-green)](https://swapi.dev/)
