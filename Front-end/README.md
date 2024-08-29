# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## Overview

This project is a modern React application that leverages a variety of libraries to create a seamless user experience. It incorporates React Hook Form for form management, Zod for schema validation, Material-UI for UI components, and TanStack Query for data fetching. The following sections detail the purpose of each dependency used in this project.

## Dependencies

### @emotion/react and @emotion/styled

- **Purpose**: Provides utilities for writing CSS styles with JavaScript. These libraries are used by Material-UI for styling components.
- **Usage**: Used for creating styled components and applying custom styles.

### @mui/material

- **Purpose**: The core Material-UI library that provides a set of pre-designed React components following Material Design guidelines.
- **Usage**: Includes components like buttons, text fields, and dialogs that you can use to build your user interface.

### @mui/icons-material

- **Purpose**: Provides Material Design icons as React components.
- **Usage**: Used to add icons to your Material-UI components for improved visual appeal and usability.

### @mui/x-date-pickers and @mui/x-date-pickers-pro

- **Purpose**: Provides date and time picker components for Material-UI.
- **Usage**: Allows users to select dates and times through intuitive UI components. `@mui/x-date-pickers-pro` includes additional premium components.

### date-fns

- **Purpose**: A lightweight library for handling dates in JavaScript.
- **Usage**: Used for date manipulation and formatting within the date picker components.

### react-hook-form

- **Purpose**: A library for managing form state and validation in React applications.
- **Usage**: Provides an easy and efficient way to handle form inputs, validation, and submission.

### zod

- **Purpose**: A TypeScript-first schema validation library.
- **Usage**: Used with React Hook Form to validate form data using a schema, ensuring the data meets specified criteria before submission.

### @hookform/resolvers

- **Purpose**: Provides resolvers for integrating various validation libraries with React Hook Form.
- **Usage**: Allows Zod (and other libraries) to work seamlessly with React Hook Form by converting validation errors into the format expected by React Hook Form.

### @tanstack/react-query

- **Purpose**: A library for managing server-state and data fetching in React applications.
- **Usage**: Simplifies data fetching, caching, synchronization, and more, providing hooks like `useQuery` and `useMutation` to interact with remote data.

### axios

- **Purpose**: A promise-based HTTP client for making requests to external APIs.
- **Usage**: Used for sending HTTP requests to the backend or other APIs, and receiving responses to be used in the application.

### lodash

- **Purpose**: A utility library that provides a range of functions for common programming tasks.
- **Usage**: Used for tasks such as deep cloning objects, merging data, and manipulating arrays and objects.

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
Navigate to the project directory:

bash
Copy code
cd <project-directory>
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open the application in your browser:

Visit http://localhost:3000 to view the application.

Usage
Form Handling: Use react-hook-form and zod for building and validating forms.
UI Components: Utilize Material-UI components for consistent and modern design.
Date Picking: Implement date and time pickers from Material-UI's date picker library.
Data Fetching: Fetch and manage data using @tanstack/react-query.
HTTP Requests: Make API calls using axios.
Utility Functions: Use lodash for utility functions as needed.

