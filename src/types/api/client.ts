type JsonObj = Record<string, unknown>;

export interface APIClient {
  get(path: string, body: JsonObj, header: JsonObj): JsonObj;
  post(path: string, body: JsonObj, header: JsonObj): JsonObj;
  put(path: string, body: JsonObj, header: JsonObj): JsonObj;
  del(path: string, body: JsonObj, header: JsonObj): JsonObj;
}
