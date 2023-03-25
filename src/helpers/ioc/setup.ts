import "reflect-metadata";
import { Container } from "inversify";
import { RestClient, IRestClient, axiosInstance } from "@Helpers/network";
import { TYPES_IOC } from "./constants";

const iocContainer = new Container();

iocContainer
  .bind<IRestClient>(TYPES_IOC.RestClient)
  .toConstantValue(new RestClient(axiosInstance));

export { iocContainer };
