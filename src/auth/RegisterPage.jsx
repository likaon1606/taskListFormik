import React from 'react';
import { useHistory } from 'react-router-dom'

import RegisterForm from '../form/RegisterForm';

const RegisterPage = () => {

    const history = useHistory();

    const navigateTo = () => {
        history.push('/login')
    }

    return (
        <div>
            <h1>Register</h1>
            <RegisterForm />
            <button onClick={navigateTo}>Login</button>
        </div>
    );
};

export default RegisterPage;