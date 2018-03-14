import axios from 'axios'

export const GET = async function (url, success, failure) {
  axios.get(url)
    .then(response => {
      console.log(response.data)
      success(response)
    })
    .catch(error => {
      console.log(error)
      // alert('网络错误，不能访问, 跨域访问, 浏览器需要设置')
      failure(error)
    })
}
