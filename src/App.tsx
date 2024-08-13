import React, { ReactElement } from "react";
import AppRoutes from "./routes/Router";
import { history } from "./services/history";
import CustomHistoryRouter from "./routes/CustomHistoryRouter";

function App(): ReactElement {
  return (
    <CustomHistoryRouter history={history}>
      <AppRoutes />
    </CustomHistoryRouter>
  );
}

export default App;
