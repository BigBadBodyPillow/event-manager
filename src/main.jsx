import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//css
import './index.css';

//components
import App from './App.jsx';
import Home from './components/Home.jsx';
import AddEvent from './components/AddEvent.jsx';
import Dashboard from './components/Dashboard.jsx';
import Help from './components/Help.jsx';

// context
import { LoginProvider } from './context/LoginContext.jsx';
import { EventProvider } from './context/EventContext.jsx';
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
    path: '/addevent',
    element: (
      <App>
        <AddEvent />
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
  {
    path: '/help',
    element: (
      <App>
        <Help />
      </App>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginProvider>
      <EventProvider>
        <RouterProvider router={router} />
      </EventProvider>
    </LoginProvider>
  </StrictMode>
);
