import {
  CITIES_API_PATH,
  CITY_5_DAYS_FORECAST_API_PATH,
  CITY_CURRENT_WEATHER_API_PATH,
} from "@Constants/api";
import MockAdapter from "axios-mock-adapter/types";

export const mockHandlers = function (mockServer: MockAdapter) {
  mockServer.onGet(CITIES_API_PATH).reply(200, {
    data: ["Aligarh", "Delhi", "Agra"],
  });

  mockServer.onGet(CITY_CURRENT_WEATHER_API_PATH).reply(200, {
    data: {
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
    },
  });

  const singleDayData = Array(8)
    .fill(0)
    .map(() => ({
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
    }));

  mockServer.onGet(CITY_5_DAYS_FORECAST_API_PATH).reply(200, {
    data: [
      [...singleDayData],
      [...singleDayData],
      [...singleDayData],
      [...singleDayData],
      [...singleDayData],
    ],
  });
};
