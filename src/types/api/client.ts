export type JsonObj = Record<string, unknown>;
export type Response = {
  data: JsonObj;
  status: number;
};

export interface APIClient {
  get(path: string, body: JsonObj, header: JsonObj): Promise<Response>;
  post(path: string, body: JsonObj, header: JsonObj): Promise<Response>;
  put(path: string, body: JsonObj, header: JsonObj): Promise<Response>;
  del(path: string, body: JsonObj, header: JsonObj): Promise<Response>;
}
