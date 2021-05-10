import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useEffect} from 'react';
import Home from '../src/components/Home/Home';
import Courses from '../src/components/Courses/Courses';
import Test from '../src/components/Test/Test';
import CourseDetails from './components/CourseDetails/CourseDetails';
import NavBar from '../src/components/NavBar/NavBar';
import {checkAuthStatus} from './Redux/auth/authActions'
import { connect } from 'react-redux';
function App({checkAuthStatus}) {
  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus])
  return (
    <div className="App">
    <Router>
        <NavBar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        
        <Route path = "/courses">
        <Courses/>
        </Route>

        <Route path= "/course/:id">
        <CourseDetails/>
        </Route>

        <Route path = "/test">
        <Test/>
        </Route>

      </Switch>
      </Router>
    </div>
  );
}
var actions = ({
  checkAuthStatus,
})

export default connect(null, actions)(App);
