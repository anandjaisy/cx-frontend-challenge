# React Role-Based Access Control Application Coding Challenge

This coding challenge aims to evaluate your ability to create a Role-Based Access Control (RBAC) web application using React. We encourage you to approach this challenge as an opportunity to demonstrate your understanding of best practices in terms of coding standards, design patterns, scalability, performance optimization, and overall structure of a React application.

There is no expectation to spend anymore than 2 hours on this test, and your submission will be evaluated based on the following criteria:

- **Functionality**: Does the application work as described in the requirements?
- **Project Structure/Code Quality**: Is the project structure and code easy to understand and maintain?
- **State Management**: Is the application state managed effectively and efficiently?
- **UI/UX**: Is the application easy to use and navigate?

Feel free to make assumptions where necessary and if you were given more time, mention what improvements or additions you would make to the application.

## Objective

Your task is to build an RBAC application where you can perform CRUD (Create, Read, Update, Delete) operations on users. Users have different roles (`Admin` or `Staff`) and permissions that dictate their access to certain application routes/features. 

## Initial Setup

Seed your application's initial state with user data from the JSON Placeholder API (`https://jsonplaceholder.typicode.com/users`). Once the initial state is set, handle all subsequent state changes locally using either the Context API or Redux.

## Roles and Permissions

Each user can have one of two roles:

- `Admin`: Full access to all routes and can perform all CRUD operations.
- `Staff`: Restricted access, can only view users and has conditional access to view ProtectedRoute1 and ProtectedRoute2 routes based on individual user permissions.

User permissions include:

- `CanCreateUser`
- `CanReadUser`
- `CanUpdateUser`
- `CanDeleteUser`
- `CanViewProtectedRoute1`
- `CanViewProtectedRoute2`

## Routes

Your application should include three main routes: `Users`, `ProtectedRoute1`, `ProtectedRoute2`. The `ProtectedRoute1` and `ProtectedRoute2` components can just be simple placeholders with a page title.

## Role Assumption

Add a feature to the navigation bar that allows an `Admin` user to "assume" the role and permissions of another user. When this role assumption occurs, display a notification that indicates who has assumed the role of whom, i.e., "Admin has assumed the role of John Doe".

