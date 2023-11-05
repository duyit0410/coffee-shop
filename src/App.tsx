import React from "react";
import "./styles/global.scss";
import Router from "./Router";
import { Provider } from "react-redux";
import { store } from "@redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "@config";

const App = () => {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Router />
      </GoogleOAuthProvider>
    </Provider>
  );
};

export default App;
