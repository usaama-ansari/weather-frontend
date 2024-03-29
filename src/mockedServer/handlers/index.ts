import {
  CITIES_API_PATH,
  CITY_5_DAYS_FORECAST_API_PATH,
  CITY_API_PATH,
  CITY_CURRENT_WEATHER_API_PATH,
} from "@Constants/api";
import MockAdapter from "axios-mock-adapter/types";

export const mockHandlers = function (mockServer: MockAdapter) {
  mockServer.onPost(CITY_API_PATH).reply(200);
  mockServer
    .onGet(CITIES_API_PATH)
    .reply(200, ["Aligarh", "Delhi", "Agra", "New York"]);

  mockServer.onGet(CITY_CURRENT_WEATHER_API_PATH).reply(200, {
    cityName: "Aligarh",
    country: "IN",
    date: new Date(),
    coordinates: {
      lat: 34,
      lon: 55,
    },
    temperature: "45",
    humidity: "60",
    pressure: "100",
    weather: {
      type: "Cloudy",
      desc: "Cloudy weather",
    },
    windSpeed: "30mph",
  });

  const singleDayData = {
    cityName: "Aligarh",
    country: "IN",
    date: new Date(),
    coordinates: {
      lat: 34,
      lon: 55,
    },
    temperature: "45",
    humidity: "60",
    pressure: "100",
    weather: {
      type: "Cloudy",
      desc: "Cloudy weather",
    },
    windSpeed: "30mph",
  };

  mockServer.onGet(CITY_5_DAYS_FORECAST_API_PATH).reply(200, {
    weatherData: [
      singleDayData,
      singleDayData,
      singleDayData,
      singleDayData,
      singleDayData,
    ],
  });
};
