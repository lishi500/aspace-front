import React from 'react';
import EnterPageComponent from "./Pages/enter/EnterPage";
import {Route, BrowserRouter as Router} from "react-router-dom";
import HomePageComponent from "./Pages/home/HomePage";
import {ProjectPageComponent} from "./Pages/project/ProjectPage";
import {ProjectDetailPageComponent} from "./Pages/project/ProjectDetailPage";
import {AboutPageComponent} from "./Pages/about/AboutPage";
import './css/App.scss';
import AdminPageComponent from "./Pages/admin/AdminPage";
import AdminProjectPageComponent from "./Pages/admin/AdminProjectPage";
import ContactPageComponent from "./Pages/contact/ContactPage";
import ClientPageComponent from "./Pages/client/ClientPage";
import {AdminStaffPageComponent} from "./Pages/admin/AdminStaffPage";

function App() {
  return (
      <div className="App">
          <Router>
              <Route path="/" exact component={EnterPageComponent} />
              <Route path="/home" exact component={HomePageComponent} />
              <Route path="/home/:type" exact component={HomePageComponent} />
              <Route path="/project" exact component={ProjectPageComponent} />
              <Route path="/projectDetail/:id" exact component={ProjectDetailPageComponent} />
              <Route path="/profile" exact component={AboutPageComponent} />
              <Route path="/admin" exact component={AdminPageComponent} />
              <Route path="/admin/project" exact component={AdminProjectPageComponent} />
              <Route path="/admin/staff" exact component={AdminStaffPageComponent} />
              <Route path="/contact" exact component={ContactPageComponent} />
              <Route path="/client" exact component={ClientPageComponent} />
          </Router>
      </div>
  );
}

export default App;
