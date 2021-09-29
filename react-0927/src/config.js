const debug = true

export const devUrl = 'http://localhost:3000'
// 開發中用的網址
export const prodUrl = 'http://www.abc.com'
// 生產中用的網址
export const imgUrl = debug ? devUrl : prodUrl
// 判斷開發中還是生產中
