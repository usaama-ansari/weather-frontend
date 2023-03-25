import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { GenericObject } from "@Types";

export type RequestBody = GenericObject | string; // as `string`, to support URLSearchParams
export type ModifiedResponse = GenericObject;
export type GenericResponse = GenericObject;
export type RequestConfig = AxiosRequestConfig;
export type Response<T = any> = AxiosResponse<T>;
export type RequestError = AxiosError;
