/* eslint-disable */
import { inject, injectable } from "inversify";
import { TYPES_IOC } from "@Helpers/ioc/constants";
import type { IRestClient, RequestError } from "@Helpers/network";
import { Result } from "@Helpers/Result";
import { IWeatherService } from "./IWeatherService";
import { CityFiveDaysForecastDTO, CityWeatherDTO } from "@Types";
import {
  CITY_5_DAYS_FORECAST_API_PATH,
  CITY_CURRENT_WEATHER_API_PATH,
} from "@Constants/api";

@injectable()
export class WeatherService implements IWeatherService {
  @inject(TYPES_IOC.RestClient)
  private restClient: IRestClient;

  async fetchCityCurrentWeather(cityName: string) {
    try {
      const request = await this.restClient.get(CITY_CURRENT_WEATHER_API_PATH, {
        params: {
          city: cityName,
        },
      });
      // TODO: use data mapper for weather data
      const data: CityWeatherDTO = request.data;
      return Result.ok(data);
    } catch (err) {
      return Result.fail(err as RequestError);
    }
  }

  async fetchCityFiveDaysForecast(cityName: string) {
    try {
      const request = await this.restClient.get(CITY_5_DAYS_FORECAST_API_PATH, {
        params: {
          city: cityName,
        },
      });
      const data: CityFiveDaysForecastDTO = request.data.weatherData;
      return Result.ok(data);
    } catch (err) {
      return Result.fail(err as RequestError);
    }
  }
}

export * from "./IWeatherService";
