import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import logo from "./logo.svg";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import BodyElement from "./components/layouts/BodyElement";
import LoginCareseeker from "./components/auth/LoginCareseeker";
import LoginCaregiver from "./components/auth/LoginCaregiver";
import Alert from "./components/layouts/Alert";
import SignupCareseeker from "./components/auth/SignupCareseeker";
import SignupCaregiver from "./components/auth/SignupCaregiver";
import CreateCaregiverProfile from "./components/profile-forms/CreateCaregiverProfile";
import EditCaregiverProfile from "./components/profile-forms/EditCaregiverProfile";
import ProfileCaregivers from "./components/profiles/ProfileCaregivers";
import ProfileCaregiver from "./components/profile/ProfileCaregiver";
import PrivateRoute from "./components/routing/PrivateRoute";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Help from "./components/pages/Help";
import Privacy from "./components/pages/Privacy";
import TermsOfUse from "./components/pages/TermsOfUse";
import Faq from "./components/pages/Faq";
import AddEducation from "./components/profile-forms/AddEducation";
import AddCertification from "./components/profile-forms/AddCertification";
import CaregiverProfiles from "./components/showProfiles/CaregiverProfiles";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={BodyElement} />
            <div className="body-element container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/login-careseeker"
                  component={LoginCareseeker}
                />
                <Route
                  exact
                  path="/caregiver-profile"
                  component={ProfileCaregivers}
                />
                <Route
                  exact
                  path="/profile-caregiver/:id"
                  component={ProfileCaregiver}
                />
                <Route
                  exact
                  path="/caregiver-profiles"
                  component={CaregiverProfiles}
                />
                <Route
                  exact
                  path="/login-caregiver"
                  component={LoginCaregiver}
                />
                <Route
                  exact
                  path="/signup-careseeker"
                  component={SignupCareseeker}
                />
                <Route
                  exact
                  path="/signup-caregiver"
                  component={SignupCaregiver}
                />
                <PrivateRoute
                  exact
                  path="/create-caregiver-profile"
                  component={CreateCaregiverProfile}
                />
                <PrivateRoute
                  exact
                  path="/edit-caregiver-profile"
                  component={EditCaregiverProfile}
                />
                <PrivateRoute
                  exact
                  path="/profile-caregiver"
                  component={ProfileCaregiver}
                />
                <PrivateRoute
                  exact
                  path="/add-caregiver-education"
                  component={AddEducation}
                />
                <PrivateRoute
                  exact
                  path="/add-caregiver-certification"
                  component={AddCertification}
                />
              </Switch>
            </div>
            <Route exact path="/services" component={Services} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/terms" component={TermsOfUse} />
            <Route exact path="/faq" component={Faq} />
            <Footer />
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
