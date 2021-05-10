import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../src/components/Home/Home';
import Courses from '../src/components/Courses/Courses';
import Test from '../src/components/Test/Test';
import CourseDetails from './components/CourseDetails/CourseDetails';
import NavBar from '../src/components/NavBar/NavBar';
function App() {
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

export default App;
