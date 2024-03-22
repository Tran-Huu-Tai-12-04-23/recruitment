import { createBrowserRouter } from 'react-router-dom';
import redirectIfUser from './_redirectIfUser';

// Import your components
import Home from '../../pages/home/index';
import RecruitmentLayout from '../../layouts/MainLayout'; // Assuming correct path
import Login from '../../pages/auth/login';
import ForgotPassword from '../../pages/auth/forgot-password';
import { AuthLayout } from '../../layouts';
import ResetPassword from '../../pages/auth/forgot-password/reset-password';

export const router = createBrowserRouter([
    {
        path: '/auth',
        element: <AuthLayout children={undefined} />,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />,
            },
            {
                path: 'reset-password',
                element: <ResetPassword />,
            },
        ],
    },
    {
        path: '/',
        element: <RecruitmentLayout />,
        children: [
            {
                path: '',
                element: <Home />,
            },
        ],
    },
]);
