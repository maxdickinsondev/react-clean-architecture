import { axiosHttpClient } from "../../../infrastructure/http/axios-http-client";
import { HttpClient } from "../../../presentation/protocols/http";

export const makeHttpClient = (): HttpClient => {
  return axiosHttpClient;
};
