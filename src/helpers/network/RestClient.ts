import "reflect-metadata";
import { injectable } from "inversify";
/** disabling this rule as eslint throws error despite AxiosError being used at multiple places. */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import type { AxiosInstance } from "axios";
import type { RequestBody, RequestConfig } from "./types";
import { IRestClient } from "./IRestClient";

@injectable()
export default class RestClient implements IRestClient {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async get(url: string, config: RequestConfig = {}) {
    const response = await this.axios.get(url, config);
    return response;
  }

  async post(url: string, body: RequestBody = {}, config: RequestConfig = {}) {
    const response = await this.axios.post(url, body, config);
    return response;
  }

  async put(url: string, body: RequestBody = {}, config: RequestConfig = {}) {
    const response = await this.axios.put(url, body, config);
    return response;
  }

  async delete(
    url: string,
    body: RequestBody = {},
    config: RequestConfig = {},
  ) {
    const mergedConfig = Object.assign(config, { data: config.data || body });
    const response = await this.axios.delete(url, mergedConfig);
    return response;
  }
}
