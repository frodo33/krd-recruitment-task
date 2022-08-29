import { Method, AxiosRequestConfig } from "axios"

interface RouteConfig extends Partial<AxiosRequestConfig> {
  method: Method,
  url: string,
}

export const getTopDebts: RouteConfig = {
  method: "GET",
  url: "/GetTopDebts"
}

export const getFilteredDebts = (query: string): RouteConfig => ({
  method: "POST",
  url: "/GetFilteredDebts"
})

const routes = {
  getTopDebts,
  getFilteredDebts,
}

export default routes
