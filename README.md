# Mini Project 03

An app that creates a Grocery list for the User through a dropdown menu.

## Author
Annika Maringer

## Website link
https://project003-mini-annikama.vercel.app/
(netlify gave me problems so i needed to use something else)

# Description
This is a Grocery List React application that allows the User to create a grocery list from a dropdown menu. There are three lists that contain the different types of Pasta, Sauce and Meat. As soon as the selection is made the Items are displayed with a add or decrease button to choose the quantity and a remove button to fully remove the Item.

## Project Files
### App.jsx
This is the parent component and with that the main component. In this file the grocery categories are being defined and stores the User selection with 'useState'.
It also shows the dropdown menu for each category and displays the selection in a separate list. The user is also allowed to remove items in this file through a remove button that acts onClick.
App also creates a function/handler called handleChange, that sets the state of the named category to an empty string when called.

### AddGroceries
This File is a child component and helps to keep the code organized. Here we define the quantity of the items and add or decrease the count when the buttons '+' or '-' are clicked. To do that, the file includes two functions called handleUpClick and handleDownClick, which manage the counting part. Furthermore, that is not the only thing that handleCLickDown is doing. In this function is an If-Else-Statement, which says if the count equals one, call handleChange from the parent component with it's item name, else decrease the quantity by one.

### index.html
This is the root HTML File which was already given when generating vite 

### App.css 
includes the styling for the application to make it look professional and unique. This file determines the look of each of the buttons, the dropdown menu and the List as well as the text. It also includes responsive design for smaller screens.

## Features
### Dropdown Menu
There are three different dropdown menus.
- sauce: Tomato Sauce, Alfredo Sauce, Marinara Sauce
- Meat: Ground Beef, Chicken, Pork
- Pasta: Spaghetti, Penne, Macaroni
Each dropdown displays it's Selection

### Grocery List
This is the Selection from the Menus displayed as a List underneath each other. This List includes Remove buttons which change the state of the Selection to an empty String
It also Includes the Buttons '+' and '-' from the Child Component AddGroceries.jsx

## React Components used
- useState to manage the items and it's visibility
- map() to generate the dropdown options
- Event Handlers like onCLick and onChange
- importing/exporting components

