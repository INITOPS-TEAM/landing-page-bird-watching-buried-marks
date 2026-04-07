# Birdwatching / Buried Marks Landing Page

This repository contains the source code for the centralized entry point to our microservices architecture. It is a lightweight, pure static Single Page Application (SPA) designed with a dual-state UI.

## Architecture & Stack

To ensure maximum performance, instant load times, and perfect compatibility with AWS S3 static hosting, this project uses a "Vanilla" stack with zero build steps:
- **HTML5** (Structure)
- **CSS3** (Styling, Flexbox, CSS Transitions)
- **JavaScript** (DOM manipulation, Event Listeners)

## Key Features

1. **Dual-Theme UI:**
   - **Default State:** A light-themed landing page for the "Birdwatching Community".
   - **Secret State:** A dark, post-apocalyptic UI for the classified "Buried Marks" project.
2. **Dynamic Routing:** The application uses JavaScript (`window.location.host`) to calculate destination URLs dynamically.
3. **Hidden Mechanics:**
   Access to the dark theme is protected by an Easter egg. Clicking the period (`.`) in the footer copyright text 4 times within 1.5 seconds triggers the UI transition.

## Local Development

Since there is no build process, you can serve this project locally using any basic web server. Do not open `index.html` directly in the browser via `file://` protocol, as some JavaScript features might behave differently.

**Option 1: VS Code (Recommended)**
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
2. Right-click on `index.html` and select **"Open with Live Server"**.
