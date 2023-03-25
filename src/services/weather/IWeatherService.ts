import { RequestError } from "@Helpers/network";
import { Result } from "@Helpers/Result";
import { CityWeatherDTO } from "@Types";

export interface IWeatherService {
  fetchCityCurrentWeather(
    cityName: string,
  ): Promise<Result<CityWeatherDTO | RequestError>>;

  fetchCityFiveDaysForecast(
    cityName: string,
  ): Promise<Result<Array<Array<CityWeatherDTO>> | RequestError>>;
}
