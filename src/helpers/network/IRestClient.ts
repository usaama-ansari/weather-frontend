import { RequestBody, RequestConfig, Response } from "./types";

export interface IRestClient {
  get(url: string, config?: RequestConfig): Promise<Response>;
  post(
    url: string,
    body: RequestBody,
    config?: RequestConfig,
  ): Promise<Response>;
  put(
    url: string,
    body: RequestBody,
    config?: RequestConfig,
  ): Promise<Response>;
  delete(
    url: string,
    body: RequestBody,
    config?: RequestConfig,
  ): Promise<Response>;
}
