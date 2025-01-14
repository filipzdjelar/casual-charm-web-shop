# Project Overview

This project is a React app that uses **Next.js** for server-side rendering, **Tailwind CSS** for styling, and **TanStack React Query** for data fetching. It displays products from the **Fake Store API** and implements pagination and mobile responsiveness.

## Features

1. **Display 4 items initially**: The app fetches products from the Fake Store API and displays the first 4 items.
2. **Product Card**: Each product displays only its image and name. The card is clickable.
3. **Mobile Responsiveness**: The layout is responsive, showing 4 columns of products initially and switching to 2 columns on smaller screens.
4. **Product Details**: When a product is clicked, the user is directed to a product page that displays all the information of that product (`/products/[page-num]`).
5. **Infinite Scroll**: When the user reaches the end of the screen, 4 more products are automatically fetched and displayed.

## Installation

### Clone the repository

```bash
git clone https://github.com/filipzdjelar/casual-charm-web-shop.git
```

## Installation and Setup

### Install Dependencies

```bash
cd casual-charm-web-shop
npm install
```

### Development Server

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Starts the Next.js development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check for code issues

## Dependencies

### Core Dependencies

- **@tanstack/react-query** - Data-fetching and state management
- **next** - React framework
- **react** - UI library
- **react-dom** - React DOM utilities
- **react-toastify** - Notification system

## API Usage

The app uses the **Fake Store API** to fetch product data.

- **Endpoint**: `https://fakestoreapi.com/products`

### Sample Response:

```json
[
  {
    "id": 1,
    "title": "Product Name",
    "price": 10.99,
    "description": "Product description here.",
    "category": "Category name",
    "image": "https://example.com/product-image.jpg",
    "rating": { "rate": 4.5, "count": 120 }
  }
]
```

The app uses the **Fake Store API** to fetch categories data.

- **Endpoint**: `https://fakestoreapi.com/categories`

### Sample Response:

```json
["electronics", "jewelery", "men's clothing", "women's clothing"]
```
