// process.env.NODE_ENV
// 当前环境
const environment = process.env.NODE_ENV
const TIME_OUT = 5000
let BASE_URL = '/'
if (environment === 'production') {
  BASE_URL = '/'
} else if (environment === 'development') {
  BASE_URL = '/'
} else {
  BASE_URL = '/'
}
export { BASE_URL, TIME_OUT }
