<template>
  <div>
    <!-- header -->
    <header class="headCon">
      <a class="left" href="javascript:;" @click="goBack"></a>
      <h1>注册</h1>
      <router-link tag="a" class="reg" to="/login">登录</router-link>
    </header>
    <!-- main -->
    <div class="main">
      <form action="#">
        <label
          >昵称:<input
            type="text"
            name="nickname"
            v-model="registerList.nickname"
        /></label>
        <label
          >手机号:<input type="text" name="phone" v-model="registerList.phone"
        /></label>
        <label
          >密码:<input
            type="password"
            name="password"
            v-model="registerList.password"
        /></label>
        <label
          >验证码:<input type="text" name="ver" v-model="ver" />
          <a href="javascript:;">重新发送</a></label
        >
        <input type="button" value="下一步" @click="next" />
        <label
          ><input type="checkbox" v-model="check" />我已阅读并同意<a
            href="javascript:;"
            >使用条款</a
          >和<a href="javascript:;">隐私条款</a></label
        >
      </form>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { getRegister } from "../utils/axios";
export default {
  data() {
    return {
      registerList: {
        nickname: "",
        phone: "",
        password: "",
      },
      ver: "",
      check: false,
    };
  },
  methods: {
    next() {
      if (
        this.registerList.nickname == "" ||
        this.registerList.phone == "" ||
        this.registerList.password == "" ||
        this.ver == "" ||
        this.check == false
      ) {
        alert("请填好必填项并确认协议");
      } else {
        // console.log(this.registerList);
        getRegister(this.registerList)
        .then((res) => {
          Toast.success(res.data.msg);
          this.$router.push('/login')
        });
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
form label:nth-last-of-type(2) a {
  float: right;
  color: #666666;
  font: 0.2rem/0.95rem "微软雅黑";
}
form label:nth-last-of-type(1) {
  border: 0;
}
form label:nth-last-of-type(1) input {
  margin-right: 5px;
}
</style>