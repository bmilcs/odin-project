import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Error from "./Error";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
