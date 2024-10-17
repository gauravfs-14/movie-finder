import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { SearchContext } from './context/context';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import MovieDetails from './pages/MovieDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "movie/:id",
    element: <MovieDetails />
  }
]);

function Root() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <StrictMode>
      <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
        <RouterProvider router={router} />
      </SearchContext.Provider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);
