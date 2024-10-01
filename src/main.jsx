import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { persistor, store } from "./Redux/Store.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
);
