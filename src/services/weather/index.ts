/* eslint-disable */
import { inject, injectable } from "inversify";
import { TYPES_IOC } from "@Helpers/ioc/constants";
import type { IRestClient, RequestError } from "@Helpers/network";
import { Result } from "@Helpers/Result";
import { IWeatherService } from "./IWeatherService";
import { CityWeatherDTO } from "@Types";

@injectable()
export class WeatherService implements IWeatherService {
  @inject(TYPES_IOC.RestClient)
  private restClient: IRestClient;

  async fetchCityCurrentWeather(cityName: string) {
    try {
      const request = await this.restClient.get("efw", {
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
}

export * from "./IWeatherService";
