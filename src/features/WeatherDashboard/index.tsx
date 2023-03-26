import { Outlet } from "react-router";
import { TYPES_IOC } from "@Helpers/ioc/constants";
import { ICityService, IWeatherService } from "@Services";
import { useInjection } from "inversify-react";
import { useCallback, useEffect } from "react";
import { Header } from "@Components/Header";

function WeatherDashboard() {
  const cityService = useInjection<ICityService>(TYPES_IOC.CityService);

  const weatherService = useInjection<IWeatherService>(
    TYPES_IOC.WeatherService,
  );

  const fetchCities = useCallback(async () => {
    const weather = await weatherService.fetchCityFiveDaysForecast("Aligarh");
    console.log(weather);
  }, [cityService, weatherService]);

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default WeatherDashboard;
