import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home'
import Index1 from './pages/in1'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/in1",
    element: <Index1 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
