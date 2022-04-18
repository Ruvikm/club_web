import { login} from "@/api/user";
import { getToken, setToken, setTokenTime } from "@/utils/auth";

const state = {
  token: getToken(),
  name: "",
  avatar: "",
  introduction: "",
  userId: "",
  deptId: "",
  sex:"",
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_USERUID: (state, userId) => {
    state.userId = userId;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
  SET_DEPTID: (state, deptId) => {
    state.deptId = deptId;
  },
  SET_ISADMIN: (state, isAdmin) => {
    state.isAdmin = isAdmin;
  },
  SET_ROLENAME: (state, roleName) => {
    state.roleName = roleName;
  }
};

const actions = {
  // user login  用户登录
  login({ commit }, userInfo) {
    //解构出用户名和密码
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      //调用api/user里面的login方法
      login({ username: username.trim(), password: password})
        .then(response => {
          const { token, expireTime } = response;
          //把后端返回的token存到vuex中
          commit("SET_TOKEN", token);
          commit("SET_NAME", username);
          //把后端返回的token存到cookies里面
          setToken(token);
          //设置token过期时间
          setTokenTime(expireTime);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
