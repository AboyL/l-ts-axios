import { AxiosRequestConfig } from "./types"

const xhr = (config: AxiosRequestConfig): void => {
  const { data, method = 'get', url } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}

export default xhr