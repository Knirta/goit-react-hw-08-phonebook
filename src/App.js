import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "components/AppBar";
import Container from "components/Container";
import Loader from "react-loader-spinner";
import "./App.scss";

const HomePage = lazy(() =>
  import("pages/HomePage" /* webpackChunkName: 'home-page' */)
);
const RegistrationPage = lazy(() =>
  import("pages/RegistrationPage" /* webpackChunkName: 'registration-page' */)
);
const LoginPage = lazy(() =>
  import("pages/LoginPage" /* webpackChunkName: 'login-page' */)
);
const ContactsPage = lazy(() =>
  import("pages/ContactsPage" /* webpackChunkName: 'contacts-page' */)
);

const App = () => {
  return (
    <Container>
      <AppBar />

      <Suspense
        fallback={
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        }
      >
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/register">
            <RegistrationPage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/contacts">
            <ContactsPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
