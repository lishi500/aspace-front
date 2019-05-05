import React from 'react';
import EnterPageComponent from "./Pages/enter/EnterPage";
import {Route, BrowserRouter as Router} from "react-router-dom";
import HomePageComponent from "./Pages/home/HomePage";
import {ProjectPageComponent} from "./Pages/project/ProjectPage";
import {ProjectDetailPageComponent} from "./Pages/project/ProjectDetailPage";
import {AboutPageComponent} from "./Pages/about/AboutPage";
import './css/App.scss';

function App() {
  return (
      <div className="App">
          <Router>
              <Route path="/" exact component={EnterPageComponent} />
              <Route path="/home" exact component={HomePageComponent} />
              <Route path="/project" exact component={ProjectPageComponent} />
              <Route path="/projectDetail/:id" exact component={ProjectDetailPageComponent} />
              <Route path="/about" exact component={AboutPageComponent} />
              <Route path="/admin" exact component={AboutPageComponent} />
          </Router>
      </div>
  );
}

export default App;
