import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import logo from "./logo.svg";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import BodyElement from "./components/layouts/BodyElement";
import LoginCaresekeer from "./components/auth/LoginCaresekeer";
import LoginCaregiver from "./components/auth/LoginCaregiver";
import Alert from "./components/layouts/Alert";
import SignupCaresekeer from "./components/auth/SignupCaresekeer";
import SignupCaregiver from "./components/auth/SignupCaregiver";
import SignupCaregiver2 from "./components/auth/SignupCaregiver2";
import ProfileCaregiver from "./components/profiles/ProfileCaregiver";
import PrivateRoute from "./components/routing/PrivateRoute";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Help from "./components/pages/Help";
import Privacy from "./components/pages/Privacy";
import TermsOfUse from "./components/pages/TermsOfUse";
import Faq from "./components/pages/Faq";

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
          <Navbar />
          <Route exact path='/' component={BodyElement} />

          <section className='container'>
            <Alert />
            <Switch>
              <Route
                exact
                path='/login-caresekeer'
                component={LoginCaresekeer}
              />
              <Route exact path='/login-caregiver' component={LoginCaregiver} />
              <Route
                exact
                path='/signup-caresekeer'
                component={SignupCaresekeer}
              />
              <Route
                exact
                path='/signup-caregiver'
                component={SignupCaregiver}
              />
              <Route
                exact
                path='/signup-caregiver2'
                component={SignupCaregiver2}
              />
              <PrivateRoute
                exact
                path='/profile-caregiver'
                component={ProfileCaregiver}
              />
            </Switch>
          </section>
          <Route exact path='/services' component={Services} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/help' component={Help} />
          <Route exact path='/privacy' component={Privacy} />
          <Route exact path='/terms' component={TermsOfUse} />
          <Route exact path='/faq' component={Faq} />
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
