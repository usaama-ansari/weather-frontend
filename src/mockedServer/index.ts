import MockAdapter from "axios-mock-adapter";
import { axiosInstance } from "@Helpers/network";

export const mockServer = function (initMockHandlers: (...args: any) => void) {
  const mock = new MockAdapter(axiosInstance);
  initMockHandlers(mock);
};

export * from "./handlers";
