import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {

    const history = useHistory();

    const tasks = () => {
        history.push('/tasks')
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={tasks}>Tasks</button>
        </div>
    );
};

export default HomePage;