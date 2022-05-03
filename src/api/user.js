import http from '@/utils/request'

//登录
export async function login(parms){
  return await http.login("/api/club/user/login",parms);
}
//获取用户个人资料
export async function getInfoApi(parms){
  return await http.get("/api/club/user/userInfo",parms)
}
//新增用户
export async function addUserApi(parm){
  return await http.post("/api/club/user",parm)
}
//编辑用户个人资料
export async function editUserInfoApi(parm){
  return await http.put("/api/club/user",parm)
}
//退出登录
export async function loginOutApi(parm){
  return await http.post("/api/sysUser/loginOut",parm)
}
//刷新token
export async function refreshTokenApi(parm){
  return await http.post("/api/sysUser/refreshToken",parm)
}
//获取用户展示信息
export async function getShowDataApi(parms){
  return await http.get("/api/club/user/showData",parms)
}

