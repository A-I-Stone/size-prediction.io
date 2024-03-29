# Shirt Measurement Application

This is a web-based application which provides the primary functionality of calculating recommended shirt sizes for users, based on input parameters such as: Height, Weight, Age, and Waist size.

## Technical Overview

The application takes user measurement input and based on internal algorithms, suggest a shirt size specific to the user. This application is specifically designed for Men and Boys as the algorithm used takes into consideration the measurement difference in both category to provide accurate recommendations.

## Technologies

This project is created with:
- HTML
- CSS
- JavaScript
- Google Fonts

## Getting Started

To get started with this project, do the following:

1. Clone the repository to your local machine.
2. Open the `index.html` file in your preferred browser.

## Source files

The main HTML document is `index.html` which contains the structure of the web application.

The primary styles are contained in the `style.css` file, located in `assets/css`.

The project also utilizes three different JavaScript files stored in `assets/js`:

- `main.js` - Contains the core functionality of the application
- `mens.js` - Contains specific size calculation and rendering logic for men
- `boys.js` - Contains specific size calculation and rendering logic for boys

## Features

- Single Page Application (SPA) that carries a measurement form for user inputs.
- Real-time toggling functionality between men and boys to switch between datasets and calculation criteria.
- A calculation process that suggests tailored fits based on entered data.
- The form submission triggers a loading animation mimicking the calculation process.
- Defined functions to handle different sizes and fits for men and boys separately.
- Dynamic generation of measurement tables based on user input and gender.
- User-friendly messages and quality user interface.

## Usage 

Open the HTML file in your preferred browser. Fill the form with the required details and click the `"Find My Size"` button to get the appropriate shirt size. The page will calculate and provide a visualization of the suggested shirt dimensions.
