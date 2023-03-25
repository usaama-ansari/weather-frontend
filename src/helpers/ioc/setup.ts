import "reflect-metadata";
import { Container } from "inversify";
import { RestClient, IRestClient, axiosInstance } from "@Helpers/network";
import {
  CityService,
  WeatherService,
  ICityService,
  IWeatherService,
} from "@Services";
import { TYPES_IOC } from "./constants";

const iocContainer = new Container();

iocContainer
  .bind<IRestClient>(TYPES_IOC.RestClient)
  .toConstantValue(new RestClient(axiosInstance));

iocContainer
  .bind<ICityService>(TYPES_IOC.CityService)
  .to(CityService)
  .inSingletonScope();

iocContainer
  .bind<IWeatherService>(TYPES_IOC.WeatherService)
  .to(WeatherService)
  .inSingletonScope();

export { iocContainer };
