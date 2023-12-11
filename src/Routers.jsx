import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import ErrorPage from './Pages/ErrorPage';
import ContactPage from './Pages/ContactPage';
import HomePages from './Pages/HomePages';

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
