import React, { lazy, Suspense, useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "components/AppBar";
import Container from "components/Container";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import Loader from "react-loader-spinner";
import authOperations from "redux/auth/auth-operations";
import authSelectors from "redux/auth/auth-selectors";

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
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />

        <Suspense
          fallback={
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          }
        >
          <Switch>
            <PublicRoute path="/" exact>
              <HomePage />
            </PublicRoute>

            <PublicRoute path="/register" restricted>
              <RegistrationPage />
            </PublicRoute>

            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <LoginPage />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>

            <PublicRoute>
              <HomePage />
            </PublicRoute>
          </Switch>
        </Suspense>
      </Container>
    )
  );
};

export default App;
