import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//css
import './index.css';

//components
import App from './App.jsx';
import Home from './components/Home.jsx';
import Dashboard from './components/Dashboard.jsx';

//routes
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App>
        <Home />
      </App>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <App>
        <Dashboard />
      </App>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
