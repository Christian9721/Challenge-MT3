import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./pages/dashboard.page";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Dashboard />
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
