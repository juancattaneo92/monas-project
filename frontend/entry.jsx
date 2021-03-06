import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/Store.js";
import Root from "./components/Root.jsx";
import 'babel-polyfill';
import "regenerator-runtime/runtime";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        user: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {
        currentUser: window.currentUser.id
      }
    };
  }

  let store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);
});

