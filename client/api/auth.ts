import { ILoginRequest } from "types/api";
import { axiosInstance } from "./instance";
import { Endpoints } from "./api";

export const login = (params: ILoginRequest) => axiosInstance.post(Endpoints.AUTH.LOGIN, params)