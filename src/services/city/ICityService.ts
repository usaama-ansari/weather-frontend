import { RequestError } from "@Helpers/network";
import { Result } from "@Helpers/Result";

export interface ICityService {
  addCity(cityName: string): Promise<Result<void | RequestError>>;
  addCities(cityNames: string[]): Promise<Result<void | RequestError>>;
}
