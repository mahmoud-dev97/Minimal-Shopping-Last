# Minimal Shopping App
- This is a simple React app that displays a list of products retrieved from a dummy API and allows the user to add or remove products to/from a favorites list, as well as edit the details of a product. The app uses Redux for state management and Axios for API calls.

## Installation
- To install the app, clone the repository and run the following command in the project directory:
- **npm install**
- This will install all the necessary dependencies for the app.

## Usage
- To start the app, run the following command in the project directory:

- **npm start**

- This will start the app in development mode and open it in your default browser at http://localhost:3000.

- The app consists of two main pages: the product list page and the product details page.

## Product List Page
- The product list page displays a grid of product cards, each containing an image, a title, a price, and a heart icon. The heart icon represents whether the product is in the favorites list or not.

- Clicking on a product card will take you to the product details page for that product.

- Clicking on the heart icon will add or remove the product from the favorites list. The favorites list is stored in local storage and persists across sessions.

## Product Details Page
- The product details page displays the details of a single product, including the image, title, price, and description. The page also includes a form to edit the product details.

- To edit a product, simply change the values in the form and click the "Save Changes" button. The app will send a PATCH request to the dummy API to update the product with the new values, and the product list and details page will be updated accordingly.
