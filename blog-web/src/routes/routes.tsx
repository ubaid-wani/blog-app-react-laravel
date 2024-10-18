import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserForm from '../components/UserForm';
import Users from '../components/Users';
import ProfileDetails from '../components/ProfileDetails';
import EditProfile from '../components/EditProfile';
import AppLayout from '../components/layout/AppLayout';

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Users />,
            },
            {
                path: '/addprofile',
                element: <UserForm />,
            },
            {
                path: '/profile/:id',
                element: <ProfileDetails />,
            },
            {
                path: '/updateprofile/:id',
                element: <EditProfile />,
            },
            {
                path: '*', // catch-all route
                element: <h1>404 Not Found</h1>,
            },
        ],
    },
]);

const AppRouter: React.FC = () => {
    return (<RouterProvider router={router} />);
};

export default AppRouter;
