import React, { ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Router";

function App(): ReactElement {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
