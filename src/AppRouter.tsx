import React from 'react';
import AuthPage from './pages/AuthPage/AuthPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StudentPage } from './pages/StudentPage/StudentPage';
import { StudentEvents } from './components/student/StudentEvents/StudentEvents';
import { StudentRequests } from './components/student/StudentRequests/StudentRequests';
import { AdminPage } from './pages/AdminPage/AdminPage';
import ResponsiblePage from './pages/ResponsiblePage/ResponsiblePage';
import ProtectedPage from './components/ProtectedPage/ProtectedPage';

const AppRouter = () => {
    const routes = createBrowserRouter([
        {
            path: '/auth',
            element: <AuthPage />,
        },
        {
            path: '/student',
            element: (
                <ProtectedPage>
                    <StudentPage />
                </ProtectedPage>
            ),
            children: [
                {
                    index: true,
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
            element: (
                <ProtectedPage>
                    <AdminPage />
                </ProtectedPage>
            ),
        },
        {
            path: '/responsible',
            element: (
                <ProtectedPage>
                    <ResponsiblePage />
                </ProtectedPage>
            ),
        },
        {
            path: '*',
            element: (
                <ProtectedPage>
                    <div style={{ textAlign: 'center', marginTop: '100px' }}>
                        404 Страница не найдена
                    </div>
                </ProtectedPage>
            ),
        },
    ]);

    return <RouterProvider router={routes} />;
};

export default AppRouter;
