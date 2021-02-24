import './App.css';
import {
  BrowserRouter,
  Switch,
  Route 
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Hall from './pages/Hall';
import Kitchen from './pages/Kitchen';

function App() {
  return (

    <BrowserRouter>
      
        {/* <Link to="/login">login</Link>            <Link to="/register">register</Link> */}


        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/hall' component={Hall} />
          <Route path='/kitchen' component={Kitchen} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;