import React from 'react';
import AuthPage from './pages/AuthPage/AuthPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppRouter = () => {
    const routes = createBrowserRouter([
        {
            path: '/auth',
            element: <AuthPage />,
        },
    ]);

    return <RouterProvider router={routes} />;
};

export default AppRouter;
