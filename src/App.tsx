import React, { ReactElement } from "react";
import AppRoutes from "./routes/Router";
import { history } from "./services/history";
import CustomHistoryRouter from "./routes/CustomHistoryRouter";

function App(): ReactElement {
  return (
    <CustomHistoryRouter history={history}>
      <div className="App flex flex-col h-screen overflow-y-auto overflow-x-hidden">
        <AppRoutes />
      </div>
    </CustomHistoryRouter>
  );
}

export default App;
