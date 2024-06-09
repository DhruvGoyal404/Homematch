import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Advertise from './pages/Advertise';
import Explore from './pages/Explore';
import Detail from './pages/Content';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './components/Auth';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/advertise',
        element: <Advertise />,
      },
      {
        path: '/explore',
        element: <Explore />,
      },
      {
        path: '/content',
        element: <Detail />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
