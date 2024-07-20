export type HttpMethod = "get" | "post" | "put" | "delete";

export interface HttpRequest<T = any, K = any> {
  url: string;
  method: HttpMethod;
  body?: T;
  headers?: K;
}

export interface HttpResponse<T> {
  statusCode: number;
  body?: T;
}

export interface HttpClient<T = any, K = any> {
  request<R>(request: HttpRequest<T, K>): Promise<HttpResponse<R>>;
}
