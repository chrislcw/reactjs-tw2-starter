import React, { Suspense, lazy, useCallback } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
// import { I18nProvider } from "@lingui/react"

// Redux
import { connect } from "react-redux";

// UI Component
import { Header } from "./components/layouts";
import { Loader } from "./components/atoms";

// Public Container
const Login = lazy(() => import("./screens/Login"));
const ForgotPassword = lazy(() => import("./screens/ForgotPassword"));
const ResetPassword = lazy(() => import("./screens/ResetPassword"));

const PublicSwitch = () => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Login {...props} />} />
      <Route
        exact
        path="/forgotpassword"
        render={(props) => <ForgotPassword {...props} />}
      />
      <Route
        exact
        path="/resetpassword"
        render={(props) => <ResetPassword {...props} />}
      />
      {/* <Redirect to="/splash-screen" /> */}
    </Switch>
  );
};

const AppRouter = (props) => {
  const roleSwitch = useCallback((role) => {
    switch (role) {
      default:
        return <PublicSwitch />;
    }
  }, []);

  const { history, loader, token, role } = props;

  const exceptionPaths = ["/register", "/forgotpassword", "/resetpassword"];

  let location = window.location;

  if (token === null && exceptionPaths.indexOf(location.pathname) < 0) {
    props.history.push("/");
  }

  return (
    <Suspense fallback={<Loader />}>
      <ConnectedRouter history={history}>
        {loader && <Loader />}
        <Header {...props} />
        {roleSwitch(role)}
      </ConnectedRouter>
    </Suspense>
  );
};

const mapStateToProps = (state) => {
  return {
    loader: state.App.loader,
    token: state.Auth.access_token,
    role: state.Auth.role,
  };
};

export default connect(mapStateToProps, null)(AppRouter);
