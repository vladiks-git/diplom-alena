import React from 'react';
import AuthPage from './pages/AuthPage/AuthPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StudentPage } from './pages/StudentPage/StudentPage';
import { StudentEvents } from './components/student/StudentEvents/StudentEvents';
import { StudentRequests } from './components/student/StudentRequests/StudentRequests';
import { AdminPage } from './pages/AdminPage/AdminPage';
import ResponsiblePage from './pages/ResponsiblePage/ResponsiblePage';

const AppRouter = () => {
    const routes = createBrowserRouter([
        {
            path: '/auth',
            element: <AuthPage />,
        },
        {
            path: '/student',
            element: <StudentPage />,
            children: [
                {
                    path: 'requests',
                    element: <StudentRequests />,
                },
                {
                    path: 'events',
                    element: <StudentEvents />,
                },
            ],
        },
        {
            path: '/admin',
            element: <AdminPage />,
        },
        {
            path: '/responsible',
            element: <ResponsiblePage />,
        },
    ]);

    return <RouterProvider router={routes} />;
};

export default AppRouter;
