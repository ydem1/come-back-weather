import React, { ReactElement } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Router";
import { store } from "./redux/store";

function App(): ReactElement {
  return (
    <Router>
      <ReduxProvider store={store}>
        <AppRoutes />
      </ReduxProvider>
    </Router>
  );
}

export default App;
