import axios, { AxiosInstance } from "axios"
import { apiUrl } from "../utils/constants"

export const api: AxiosInstance = axios.create({
  baseURL: apiUrl,
})

api.interceptors.request.use()

api.interceptors.response.use()
