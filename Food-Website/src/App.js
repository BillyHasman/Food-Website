import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'; 
import Categories from './components/Categories/Categories';
import RandomMeal from './components/RandomMeal/RandomMeal';
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/About Us/aboutus.js'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/categories" component={Categories}/>
        <Route exact path="/random" component={RandomMeal}/>
        <Route exact path="/aboutus" component={AboutUs}/>
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;