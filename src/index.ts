import { AxiosRequestConfig } from "./types"
import xhr from "./xhr"

const axios = (config: AxiosRequestConfig): void => {
  xhr(config)
}
export default axios