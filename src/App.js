import  React  from 'react';
import './App.css';
import  Navbar  from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Home  from "./components/pages/home";
import  Services from "./components/pages/Services";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/signup';
import product from './components/product';
function App() {
  return (
    <>
      <Router>
      		<Navbar />
			  <Switch>
		  			<Route path='/' exact  component = {Home}/>
					  <Route path='/services' component = {Services}/>
					  <Route path='/sign-up' component = {Signup}/>
					  
			  </Switch>
	  </Router>
    </>
  );
}

export default App;
