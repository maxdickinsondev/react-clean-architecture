import axios from "axios";

import { HttpClient } from "../../presentation/protocols/http";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const axiosHttpClient: HttpClient = {
  async request({ url, method, body, headers }) {
    const response = await api.request({
      url,
      method,
      data: body,
      headers,
    });
    return {
      body: response.data,
      statusCode: response.status,
    };
  },
};
