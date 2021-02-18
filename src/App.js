import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div>             
            {/* <Link to="/login">login</Link>            <Link to="/register">register</Link> */}
           
        
        <Switch>
                  
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;