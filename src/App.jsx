  import React from 'react'
  import {RouterProvider, createBrowserRouter} from "react-router-dom";
  import AppLayout from './layout/AppLayout';
  import LandingPage from './pages/LandingPage'
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />
        },
        {
          path: "/about",
          element: <div>About</div>
        },
        {
          path: "/contact",
          element: <div>Contact</div>
        },

      ]

    }
  ])
  function App() {
    return (
        <RouterProvider router={router} />  );
  }

  export default App;
