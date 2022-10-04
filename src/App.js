import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import "./App.css";
import LoginPage from './auth/LoginPage';
import RegisterPage from './auth/RegisterPage';
import TasksList from './components/taskFormik';
import HomePage from './home/HomePage';
// import FormFormik from "./components/taskFormik";

function App() {

  let logged = true;

  return (
    <Router>

      <div className="App">

        <Switch>
          <Route exact path='/'component={HomePage}/>
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/tasks' component={TasksList}>
            {
              logged ? 
              <TasksList />
              :
              () => {
                alert('You must logged in. Redirecting to Login...')
                  return (<Redirect to='/login' />)
              }
            }
          </Route>
        </Switch>

      </div>

    </Router>
  );
}

export default App;
