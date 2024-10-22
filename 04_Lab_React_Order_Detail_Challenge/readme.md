# 🛡️ Order Verification Platform

This project is a simple Order Management Application built using React. The application allows users to manage orders, including editing order lines, validating them, and calculating the total amount of the order. The core focus is on dividing the application into reusable components, managing communication between them, and implementing state updates effectively.

This project follows the same **Pod-based architecture model** as the previous one, making it easier to manage, scale, and maintain over time.

The boilerplate is built with **Webpack** as the bundler, and comes with built-in support for **Material UI (MUI)**, **Sass**, and **CSS Modules**, ensuring a scalable and flexible foundation for styling your components. It's designed to be clean, efficient, and easily adaptable to different project needs.

**LIVE DEMO:** https://order-verification-platform.netlify.app/

<img src="public/readme/desktop-preview.png" alt="Desktop Preview" />

## Features

- Organized **Pods Architecture** for modular and scalable code
- **Webpack** bundler configuration
- **Material UI (MUI)** integration for fast and responsive UI development
- **Sass** for powerful CSS pre-processing
- **CSS Modules** for scoped and maintainable styles

## Getting Started

Follow these steps to get the project up and running locally.

### 1. Install Dependencies

First, clone the repository and navigate to the project directory. Then run:

```bash
npm install
```

This will install all the necessary dependencies.

### 2. Start the Development Server

To start the development server, run:

```bash
npm start
```

This will launch the app on **http://localhost:8080**. Open it in your browser, and you'll see the app running!

The development server will automatically reload when you make changes to the code.

## Key Functionality

- **Editing Order Lines**: Users can directly edit the amount of an order line. When the amount is modified, the total amount of the order is recalculated in real-time.

- **Validating Lines**: Each line can be marked as "validated" or "pending" using a checkbox. The order can only be submitted when all lines are validated.

- **Dynamic State Calculation**:

- - The total amount is recalculated based on the updated prices of the lines.
- - The validation state shows the percentage of lines that are validated.
