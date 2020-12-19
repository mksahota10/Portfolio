import React from 'react';
//react router
import {Route} from 'react-router-dom'
// Components imports
import Home from "./components/Home";
import Layout from "./components/common/Layout"
import Blog from "./components/Blog"
import About from "./components/About"
import Projects from "./components/Projects"

// CSS imports
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
      <Route exact path="/" component={Home}/>
      <Route  exact path="/Blog" component={Blog}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/Projects" component={Projects}/>
      </Layout>
    </div>
  );
};

export default App;
