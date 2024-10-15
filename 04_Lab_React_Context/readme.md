# CatPic | Get Your Daily Dose of Feline Awesomeness!

This project follows the same **Pod-based architecture model** as the previous one, making it easier to manage, scale, and maintain over time.

The boilerplate is built with **Webpack** as the bundler, and comes with built-in support for **Material UI (MUI)**, **Sass**, and **CSS Modules**, ensuring a scalable and flexible foundation for styling your components. It's designed to be clean, efficient, and easily adaptable to different project needs.

We will primarily focus on working with the **React context**, using a list of images.

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

**Attention! ⚠️** If you want to see all the features adapted for mobile, such as the sliding cart, it will not be enough to use your browser window. That's why I've prepared the following live demo for you to open it from your smartphone.

**LIVE DEMO:** https://catpic.netlify.app/

## Store View Functionality

We have a main store view where the available images are displayed on the left and a shopping cart on the right. Each time the user selects an image on one of the pages, it is added to the cart. If a user removes an image from the cart, it is deselected from the page (if it is currently active).

### Other Features Implemented:

- We have enabled the cart to be shown and hidden.
- We have added a category filtering option in the top menu.
- We have included an option to empty the entire cart.
- We have added an additional Checkout Page.
- We have added floating notifications to inform the user when an image is added to the cart.

![Desktop Preview](public/readme/desktop-preview.gif)

## Mobile Design Adaptation

In the mobile design, we've implemented an alternative method for hiding the cart, as the desktop approach was too intrusive for mobile users. To enhance the user experience, we've utilized a **Swipeable Drawer from MUI**, the library we've employed to style the entire application. This allows users to easily access the cart without interrupting their browsing experience, making it more convenient and intuitive for mobile users.

![Mobile Preview](public/readme/mobile-preview.gif)
