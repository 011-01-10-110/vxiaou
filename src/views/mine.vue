<template>
  <div>
    <!-- header -->
    <header class="headCon">
      <a href="javascript:;" @click="goBack"></a>
      <h1>我的订单</h1>
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <div class="main">
      <!-- user -->
      <div class="user">
        <div class="userFl">
          <div class="hshod"></div>
          <div class="name">
            <p>{{nickname}}</p>
            <p>V1</p>
          </div>
        </div>
        <a class="sign" href="#">每日签到</a>
      </div>
      <!-- menu -->
      <div class="menuList">
        <a href="#">
          <img src="../assets/images/iconMine_1.jpg" alt="pic" />
          <p>全部订单</p>
        </a>
        <a href="#">
          <img src="../assets/images/iconMine_2.jpg" alt="pic" />
          <p>待付款</p>
        </a>
        <a href="#">
          <img src="../assets/images/iconMine_3.jpg" alt="pic" />
          <p>待收货</p>
        </a>
      </div>
      <funlist></funlist>
    </div>
    <!-- <v-nav></v-nav> -->
  </div>
</template>

<script>
// import vNav from "../../common/nav";
import funlist from "../common/funlist";
export default {
  data() {
    return {
      nickname:JSON.parse(sessionStorage.getItem('userInfo')).nickname
    }
  },
  components: {
    // vNav,
    funlist,
  },
  methods: {
    // 返回
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
  border: none;
}
.headCon a {
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
.headCon .menu span {
  background: #fff;
}
.main {
  background: #f1f1f1;
}
.user {
  height: 2.06rem;
  padding: 0 0.28rem;
  background: #f26b11;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user .userFl {
  display: flex;
  justify-content: flex-start;
}
.user .userFl .hshod {
  width: 1.42rem;
  height: 1.42rem;
  border: 0.04rem solid #fff;
  border-radius: 50%;
  background: url(../assets/images/mine.png) no-repeat center;
  background-size: 1.42rem 1.42rem;
}
.user .userFl .name {
  margin-left: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.user .userFl .name p:nth-child(1) {
  color: #fff;
  font: 0.3rem "微软雅黑";
}
.user .userFl .name p:nth-child(2) {
  color: #1d1c22;
  font: italic 0.28rem "微软雅黑";
}
.user a {
  display: block;
  width: 1.59rem;
  height: 0.71rem;
  border-radius: 0.05rem;
  text-align: center;
  background: #fff;
  color: #f46215;
  font: 0.26rem/0.71rem "微软雅黑";
}
.menuList {
  height: 1.42rem;
  margin-bottom: 0.21rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.menuList > a {
  display: block;
  text-align: center;
}
.menuList > a img {
  width: 0.34rem;
  height: 0.34rem;
}
.menuList > a p {
  margin-top: 0.21rem;
  color: #646464;
  font: 0.24rem "微软雅黑";
}
</style>