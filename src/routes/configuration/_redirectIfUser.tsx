import { Navigate } from 'react-router-dom';

const redirectIfUser = () => {
    // Implement your logic to check if the user is already logged in
    const isUserLoggedIn = false; // Replace this with your actual logic to check if the user is logged in

    // If the user is logged in, redirect them to a different route (for example, the dashboard)
    if (isUserLoggedIn) {
        return <Navigate to="/login" />;
    }

    return null;
};

export default redirectIfUser;
