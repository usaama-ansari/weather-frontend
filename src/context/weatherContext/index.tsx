/* eslint-disable */
import React, { useCallback, useState, createContext } from "react";
import { useInjection } from "inversify-react";
import { TYPES_IOC } from "@Helpers/ioc/constants";
import { ICityService, IWeatherService } from "@Services";
import { CityFiveDaysForecastDTO, CityWeatherDTO } from "@Types";

export const WeatherContext = createContext<any>(null);

export function WeatherProvider(props: { children: React.ReactElement }) {
  const [currentWeather, setCurrentWeather] = useState<CityWeatherDTO | null>(
    null,
  );
  const [forecastedWeather, setForecastedWeather] =
    useState<CityFiveDaysForecastDTO>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");

  const cityService = useInjection<ICityService>(TYPES_IOC.CityService);
  const weatherService = useInjection<IWeatherService>(
    TYPES_IOC.WeatherService,
  );

  const getCitiesList = useCallback(async () => {
    const result = await cityService.getCities();
    if (result.isSuccess) {
      const cities = result.getValue();
      setCities(cities as string[]);
    } else {
      console.log(result.getValue());
    }
  }, [cityService, setCities]);

  const fetchCityWeather = useCallback(async (city: string) => {
    const currentWeather = await weatherService.fetchCityCurrentWeather(city);
    const forecastWeather = await weatherService.fetchCityFiveDaysForecast(
      city,
    );

    if (currentWeather.isSuccess && forecastWeather.isSuccess) {
      setCurrentWeather(currentWeather.getValue() as CityWeatherDTO);
      setForecastedWeather(
        forecastWeather.getValue() as CityFiveDaysForecastDTO,
      );
      selectCity(city);
    } else {
      console.log("Error in fetching weather data");
    }
  }, []);

  const fetchCurrentWeather = useCallback(
    async (city: string) => {
      const result = await weatherService.fetchCityCurrentWeather(city);
      if (result.isSuccess) {
        const weather = result.getValue() as CityWeatherDTO;
        setCurrentWeather(weather);
      } else {
        console.log(result.getValue());
      }
    },
    [weatherService, setCurrentWeather],
  );

  const selectCity = useCallback(
    (city: string) => {
      if (selectedCity != city) setSelectedCity(city);
    },
    [selectedCity, setSelectedCity],
  );

  const clearWeatherData = useCallback(() => {
    setCurrentWeather(null);
    setForecastedWeather([]);
  }, []);

  const contextValue = {
    currentWeather,
    forecastedWeather,
    cities,
    selectedCity,
    clearWeatherData,
    fetchCityWeather,
    selectCity,
    fetchCurrentWeather,
    getCitiesList,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {props.children}
    </WeatherContext.Provider>
  );
}
