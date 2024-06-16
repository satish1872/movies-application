# Movies Application

This is a movie list application built using Next.js 13.6 and Material-UI (MUI). The application fetches data directly from the TMDB API and demonstrates best practices in writing clean, modular, extensible, testable, and well-tested code.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [UI/UX Implementation](#uiux-implementation)
- [State Management](#state-management)
- [Performance Optimization](#performance-optimization)
- [Deployed Application](#deployed-application)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetch and display a list of movies from the TMDB API
- Search functionality to find specific movies
- Load more functionality to handle large lists of movies
- Responsive and user-friendly UI using Material-UI
- Error handling for API requests
- Efficient state management

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/satish1872/movies-application.git
   ```
2. Navigate to the project directory:
   ```bash
   cd movies-application
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Create a `.env` file in the root directory and add your TMDB API key:
   ```env
   NEXT_PUBLIC_API_KEY=your_api_key_here
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:3000`.


## API Integration

This project integrates with the TMDB API to fetch movie data. The API integration is modular and secure, with the API key stored in environment variables.

- `app/api/allmovies/route.jsx`: Fetches a list of popular movies.
- `app/api/search/route.jsx`: Searches for movies based on a query string.

## UI/UX Implementation

The application uses Material-UI (MUI) to create an appealing and responsive user interface. Key components include:

- `MovieCard`: Displays individual movie details.
- `Movies`: Displays a list of movies with pagination.
- `SearchBar`: Provides search functionality to filter movies.
- `MoviesWrapper`: Wraps the `Movies` and `SearchBar` components and handles state management.

## State Management

State management in this application is handled using React's `useState` and `useEffect` hooks. The state is managed for:

- Loading and error states
- Search functionality
- Movie details

## Performance Optimization

The application implements efficient data loading techniques, including pagination, to handle large amounts of data from the TMDB API. This ensures smooth scrolling and fast load times.

## Deployed Application

You can view the live application deployed on Vercel:
[Movies Application](https://movies-application-ivory.vercel.app/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

# DEMO
<img width="1512" alt="Screenshot 2024-06-16 at 4 28 23 PM" src="https://github.com/satish1872/movies-application/assets/41827034/a5dd0138-6af5-4924-b91f-e599e68c57f2">
<img width="1512" alt="Screenshot 2024-06-16 at 4 28 01 PM" src="https://github.com/satish1872/movies-application/assets/41827034/5c51a3ab-ab9f-473d-b58e-7a6a238a86a2">
<img width="1512" alt="Screenshot 2024-06-16 at 4 27 35 PM" src="https://github.com/satish1872/movies-application/assets/41827034/c91e733f-0811-4e91-ac2b-afeb89b76122">

