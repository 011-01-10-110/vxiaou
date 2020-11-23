<template>
  <div>
    <!-- header -->
    <header class="headCon">
      <a class="left" href="javascript:;" @click="goBack"></a>
      <h1>登录</h1>
      <router-link tag="a" class="reg" to="/register">注册</router-link>
    </header>
    <!-- main -->
    <div class="main">
      <form action="#">
        <label
          >手机号:<input type="text" name="tel" v-model="loginForm.phone"
        /></label>
        <label
          >密码:<input type="password" name="pwd" v-model="loginForm.password"
        /></label>
        <a class="forgetPwd" href="javascript:;">忘记密码</a>
        <input type="button" value="登录" @click="login" />
      </form>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import {getLogin} from '../utils/axios';
export default {
  data() {
    return {
      loginForm: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    // 登录
    login() {
      if (this.loginForm.tel == "" || this.loginForm.pwd == "") {
        alert("请输入用户名密码");
      } else {
        // console.log(this.loginForm);
        getLogin(this.loginForm)
        .then(res=>{
          Toast.success(res.data.msg);
          sessionStorage.setItem('userInfo',JSON.stringify(res.data.list))
          this.$router.push('/home')
        })
      }
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.headCon {
  padding: 0.4rem 0.35rem 0 0.29rem;
  background: #f26b11;
}
.headCon a.left {
  display: block;
  width: 0.17rem;
  height: 0.29rem;
  background: url(../assets/images/arrowLeft2.jpg) no-repeat center;
  background-size: 0.17rem 0.29rem;
}
.headCon h1 {
  color: #fff;
  font: 0.35rem/0.88rem "微软雅黑";
}
.headCon a.reg {
  color: #fff;
  font: 0.35rem/0.88rem "微软雅黑";
}
form {
  width: 80%;
  margin: 1.48rem auto 0;
  display: flex;
  flex-direction: column;
}
form label {
  width: 100%;
  border-bottom: 1px solid #a3a3a3;
  font: 0.24rem/0.95rem "微软雅黑";
}
form a.forgetPwd {
  display: block;
  text-align: right;
  color: #666666;
  font: 0.18rem/0.78rem "微软雅黑";
}
form input[type="button"] {
  width: 100%;
  border-radius: 0.05rem;
  background: #ff9900;
  color: #ffffff;
  font: 0.3rem/0.75rem "微软雅黑";
}
</style>