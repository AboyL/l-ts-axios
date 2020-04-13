
const toString = Object.prototype.toString

export const isDate = (val: any): val is Date => {
  return toString.call(val) === '[object Date]'
}

export const isPlainObject = (val: any): val is Object => {
  return toString.call(val) === '[object Object]'

}

/**
 * 将from对象中的方法属性拷贝到to中
 * @param to 
 * @param from 
 */
export const extend = <T, U>(to: T, from: U): T & U => {
  for (let k in from) {
    (to as T & U)[k] = from[k] as any
  }
  return to as T & U
}