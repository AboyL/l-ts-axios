import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from "../types"
import xhr from "./xhr"
import { buildUrl } from "../helpers/url"
import { transformData, transformResponse } from "../helpers/data"
import { processHeaders } from "../helpers/headers"

const dispatchRequest = (config: AxiosRequestConfig): AxiosPromise => {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

const processConfig = (config: AxiosRequestConfig) => {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config) // 必须在处理data之前
  config.data = transformRequestData(config)
}

const transformUrl = (config: AxiosRequestConfig) => {
  return buildUrl(config.url!, config.params)
}

const transformRequestData = (config: AxiosRequestConfig) => {
  return transformData(config.data)
}

const transformHeaders = (config: AxiosRequestConfig) => {
  return processHeaders(config.headers || {}, config.data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}

export default dispatchRequest