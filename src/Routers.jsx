import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import HomePages from './Pages/HomePage/HomePages';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePages /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
]);

export default routes;
