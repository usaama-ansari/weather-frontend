import { Outlet } from "react-router";
import { Header } from "@Components/Header";
import { WeatherProvider } from "@Context/weatherContext";

function WeatherDashboard() {
  return (
    <WeatherProvider>
      <div>
        <Header />
        <Outlet />
      </div>
    </WeatherProvider>
  );
}

export default WeatherDashboard;
