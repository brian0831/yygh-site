import request from "~/utils/request";

const api_name = '/api/user'

export default {

  login(loginVo) {
    return request({
      url: `${api_name}/login`,
      method: 'post',
      data: loginVo
    })
  },

  saveUserAuah(userAuthVo) {
    return request({
      url: `${api_name}/auth/userAuth`,
      method: 'post',
      data: userAuthVo
    })
  },

  getUserInfo() {
    return request({
      url: `${api_name}/auth/getUserInfo`,
      method: 'get'
    })
  }

}
