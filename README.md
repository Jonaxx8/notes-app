# Notes react app

This project is a Short Notes Taking website developed in ReactJS, allowing users to manage and organize their notes efficiently.

## Features

- **Homepage:**
  - Displays a list of user's notes.
  - Clicking on a note provides detailed information.

- **Create New Note:**
  - Floating button at the bottom right for creating a new note.
  - Fields include Title, Description, and Color Palette.

- **Search:**
  - Search bar on the homepage for easy note retrieval based on title.

- **Sorting:**
  - Ascending/Descending sorting based on the time of note creation.

- **Storage:**
  - Used the local storage for the notes.
  - User can also delete the notes if needed.

- **Responsive Design:**
  - Mobile-responsive for a seamless experience on various devices.

## Additional Features

- **Redux State Management (Optional):**
  - Implementation of Redux for efficient state management.

- **Authentication (Optional):**
  - Login and signup functionality for secure access was done using Firebase.

## Folder Structure

The project adheres to a clean folder structure to enhance maintainability:

- `src/`
  - `components/`: Reusable React components.
  - `pages/`: Individual pages of the application.
  - `util/`: Utility functions and components.
  - `assets/`: For the images used in the web app.

  ## Getting Started

Follow these steps to get the project up and running on your local machine:
1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd notes-app
2. **Install Dependencies**
    ```bash
   npm install
2. **Run the Application:**
    ```bash
   npm run dev
