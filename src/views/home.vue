<template>
  <div>
    <div>
      <header class="headCon">
        <a class="logo" href="#">
          <img src="../assets/images/logo.jpg" alt="logo" />
        </a>
        <input type="search" name="search" id="search" placeholder="寻找商品" />
        <p class="menu">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>
      <!-- navbar -->
      <nav class="navbar">
        <ul class="clearfix">
          <li class="cnt"><a href="#">推荐</a></li>
          <li><a href="#">女装</a></li>
          <li><a href="#">鞋包</a></li>
          <li><a href="#">居家</a></li>
          <li><a href="#">母婴儿童</a></li>
          <li><a href="#">美食</a></li>
          <li><a href="#">美食</a></li>
          <li><a href="#">美食</a></li>
        </ul>
        <p class="arrow">
          <em></em>
        </p>
      </nav>
      <!-- banner -->
      <div class="banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in bannerList" :key="item.id">
              <img :src="$imgUrl+item.img" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- iMenu -->
      <ul class="iMenu">
        <li>
          <a href="#">
            <img src="../assets/images/indexicon1.jpg" alt="icon" />
            <p>限时抢购</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/images/indexicon2.jpg" alt="icon" />
            <p>积分商城</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/images/indexicon3.jpg" alt="icon" />
            <p>联系我们</p>
          </a>
        </li>
        <li>
          <router-link tag="a" to="/classify" href="shopList.html">
            <img src="../assets/images/indexicon4.jpg" alt="icon" />
            <p>商品分类</p>
          </router-link>
        </li>
      </ul>
      <limit></limit>
      <!-- adv -->
      <div class="adv">
        <img src="../assets/images/bar.jpg" alt="adv" />
      </div>
      <shop-list></shop-list>
    </div>
  </div>
</template>

<script>
import { getBanner } from "../utils/axios";
import limit from "../common/limit";
import shopList from "../common/shoplist";

export default {
  data() {
    return {
      bannerList: [],
    };
  },
  components: {
    limit,
    shopList,
  },
  methods: {
    getBannerList() {
      getBanner().then((res) => {
        // console.log(res);
        this.bannerList = res.data.list;
      });
    },
  },
  mounted() {
    this.getBannerList();
  },
};
</script>

<style scoped>

.page {
  max-width: 7.5rem;
  margin: 0 auto;
}
.headCon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.88rem;
  padding: 0.4rem 0.23rem 0;
  border-bottom: 1px solid #e4e4e4;
  background: #fff;
}
.headCon .menu {
  width: 0.55rem;
  display: flex;
  justify-content: space-between;
}
.headCon .menu span {
  display: block;
  width: 0.12rem;
  height: 0.12rem;
  border-radius: 50%;
  background: #000;
}
body {
  background: #f1f1f1;
}
.headCon .logo img {
  width: 1.5rem;
  height: auto;
}
.headCon #search {
  width: 3.04rem;
  height: 0.38rem;
  font: 0.18rem/0.38rem "微软雅黑";
  text-align: center;
  background: #eeeeee;
  border-radius: 6px;
}
.headCon #search::placeholder {
  color: #c0c0c0;
}
.navbar {
  background: #fff;
  overflow: hidden;
  position: relative;
}
.navbar ul {
  width: 20rem;
  padding-top: 0.23rem;
  padding-left: 0.12rem;
}
.navbar ul li {
  margin: 0 0.2rem;
  float: left;
  position: relative;
}
.navbar ul li a {
  display: block;
  color: #1f1f1f;
  padding-bottom: 0.18rem;
  border-bottom: 4px solid transparent;
  font: 0.28rem/0.32rem "微软雅黑";
}
.navbar ul .cnt::before {
  content: "";
  width: 1px;
  height: 0.32rem;
  background: #f1f1f1;
  position: absolute;
  right: -0.2rem;
  top: 0;
}
.navbar ul .cnt a {
  border-bottom-color: #ff0140;
  color: #ff0140;
}
.navbar .arrow {
  position: absolute;
  top: 0.23rem;
  right: 0;
  width: 0.75rem;
  height: 0.32rem;
  background: #ffffff url(../assets/images/arrow.jpg) no-repeat center;
  background-size: 0.35rem 0.21rem;
}
.banner {
  width: 100%;
  height: 2.91rem;
}
.my-swipe{
  width: 100%;
  height: 100%;
}
.banner img {
  width: 100%;
  height: 2.91rem;
}
.iMenu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 1.79rem;
  background: #fff;
}
.iMenu li a {
  display: block;
  text-align: center;
}
.iMenu li a img {
  height: 0.62rem;
  width: auto;
}
.iMenu li a p {
  color: #5d5d5d;
  font: 0.28rem/0.69rem "微软雅黑";
}
.adv {
  margin: 0.3rem 0;
}
.adv img {
  width: 100%;
  height: auto;
}
</style>