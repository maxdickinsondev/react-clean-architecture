import axios from "axios";

import { HttpClient } from "../../presentation/protocols/http";

export const axiosHttpClient: HttpClient = {
  async request({ url, method, body, headers }) {
    const baseUrl = `http://localhost:3333${url}`;
    const response = await axios.request({
      url: baseUrl,
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
