import axios, { AxiosResponse } from "axios";

const agent = axios;
agent.defaults.baseURL = "https://localhost:44301";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;
const requests = {
  get: <T>(url: string) => agent.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
};

export { requests };
