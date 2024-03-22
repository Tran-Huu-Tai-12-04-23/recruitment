import { createBrowserRouter } from 'react-router-dom';

// Import your components
import RecruitmentLayout from '../../layouts/MainLayout'; // Assuming correct path
import Login from '../../pages/auth/login';
import ForgotPassword from '../../pages/auth/forgot-password';
import { AuthLayout } from '../../layouts';
import ResetPassword from '../../pages/auth/forgot-password/reset-password';
import { path } from '../path';
import RecruitmentPage from '../../pages/recruitment/index';
import RecruitmentRegisterPage from '../../pages/recruitment/register';

export const router = createBrowserRouter([
    {
        path: '',
        element: <AuthLayout children={undefined} />,
        children: [
            {
                path: path.login,
                element: <Login />,
            },
            {
                path: path.forgotPassword,
                element: <ForgotPassword />,
            },
            {
                path: path.resetPassword,
                element: <ResetPassword />,
            },
        ],
    },
    {
        path: '',
        element: <RecruitmentLayout />,
        children: [
            {
                path: path.recruitment,
                element: <RecruitmentPage />,
            },
            {
                path: path.recruitment_register,
                element: <RecruitmentRegisterPage />,
            },
        ],
    },
]);
