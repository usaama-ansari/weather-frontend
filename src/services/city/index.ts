import { inject, injectable } from "inversify";
import { TYPES_IOC } from "@Helpers/ioc/constants";
import type { IRestClient, RequestError } from "@Helpers/network";
import { Result } from "@Helpers/Result";
import { CITIES_API_PATH } from "@Constants/api";
import { ICityService } from "./ICityService";

@injectable()
export class CityService implements ICityService {
  @inject(TYPES_IOC.RestClient)
  private restClient: IRestClient;

  async addCity(cityName: string) {
    try {
      await this.restClient.post("efw", { city: cityName });
      return Result.ok<void>();
    } catch (err) {
      return Result.fail(err as RequestError);
    }
  }

  async addCities(cityNames: string[]) {
    try {
      await this.restClient.post("efw", { cities: cityNames });
      return Result.ok<void>();
    } catch (err) {
      return Result.fail(err as RequestError);
    }
  }

  async getCities() {
    try {
      const { data: cities } = await this.restClient.get(CITIES_API_PATH);
      return Result.ok<string[]>(cities);
    } catch (err) {
      return Result.fail(err as RequestError);
    }
  }
}

export * from "./ICityService";
