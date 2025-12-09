# Task React Project

A modern, responsive React application built with Vite, Bootstrap, and AOS (Animate On Scroll).

## 🚀 Performance Optimizations

We have recently implemented significant performance improvements to enhance the user experience and load times (targeting a previous 31% performance score).

### Key Improvements:
1.  **Code Splitting (Lazy Loading)**:
    *   Implemented `React.lazy` and `Suspense` for all main routes (`Home`, `About`, `Services`, `Packages`, `Contact`).
    *   **Benefit**: The browser now only downloads the code necessary for the current page, drastically reducing the initial bundle size. Users don't wait for the "Contact" page code to download just to view the "Home" page.

2.  **Strategic Chunking**:
    *   Configured `vite.config.js` to split vendor libraries (React, Bootstrap, AOS) into their own separate chunks.
    *   **Benefit**: These stable libraries are cached by the browser. When you update your app code, the user doesn't need to re-download these heavy libraries, leading to faster subsequent visits.

3.  **Build Optimization**:
    *   Optimized Rollup options to ensure efficient asset output.

## 🛠️ Tech Stack

*   **Framework**: React 19
*   **Build Tool**: Vite
*   **Routing**: React Router DOM
*   **Styling**: Bootstrap 5, Custom CSS
*   **Animations**: AOS (Animate On Scroll)
*   **Icons**: React Icons

## 📦 Installation & Running

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```
    *Check the `dist/` folder to see the optimized chunks in action.*
