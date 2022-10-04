import React from 'react';
import LoginForm from '../form/LoginForm';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {

    const history = useHistory();

    const navigateTo = () => {
        history.push('/register')
    }

    return (
        <div>
            <h1>Login Form</h1>
            <LoginForm />  
            <button onClick={navigateTo}>Register</button>  
        </div>
    );
};

export default LoginPage;