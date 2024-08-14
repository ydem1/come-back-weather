import React, { ReactElement } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/Router";
import { store } from "./redux/store";
import { history } from "./services/history";
import CustomHistoryRouter from "./routes/CustomHistoryRouter";

function App(): ReactElement {
  return (
    <CustomHistoryRouter history={history}>
      <ReduxProvider store={store}>
        <AppRoutes />
        <ToastContainer
          position="bottom-right"
          theme="light"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ReduxProvider>
    </CustomHistoryRouter>
  );
}

export default App;
