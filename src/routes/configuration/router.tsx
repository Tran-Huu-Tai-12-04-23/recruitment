import { createBrowserRouter, Navigate } from 'react-router-dom';
import redirectIfUser from './_redirectIfUser'; // Assuming this handles authentication checks

// Import your components
import Home from '../../pages/home';
import RecruitmentLayout from '../../layouts/RecruitmentLayout'; // Assuming correct path

export const router = createBrowserRouter([
    {
        path: '/',
        element: false ? <Navigate to="/login" replace /> : <Home />,
    },
    {
        path: '/recruitment',
        element: <RecruitmentLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
    {
        path: '*',
        element: <div>404 Not Found</div>,
    },
]);
