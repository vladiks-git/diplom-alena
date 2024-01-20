import React from 'react';
import AuthPage from './pages/AuthPage/AuthPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StudentPage } from './pages/StudentPage/StudentPage';
import { StudentEvents } from './components/student/StudentEvents/StudentEvents';

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
                    element: <div>requests</div>,
                },
                {
                    path: 'events',
                    element: <StudentEvents />,
                },
            ],
        },
    ]);

    return <RouterProvider router={routes} />;
};

export default AppRouter;
