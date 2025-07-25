  import axios from "axios";
import { responseInterceptor } from "./interceptors";
import { error } from "console";
import { Environment } from "../../../environment";

  const Api = axios.create({
    baseURL: Environment.URL_BASE,
  });

  Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => responseInterceptor(error)
  );

  export { Api };