export type HttpMethod = "get" | "post" | "put" | "delete";

export interface HttpRequest {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
}

export interface HttpResponse<T = any> {
  statusCode: number;
  body?: T;
}

export interface HttpClient {
  request<T = any>(request: HttpRequest): Promise<HttpResponse<T>>;
}
