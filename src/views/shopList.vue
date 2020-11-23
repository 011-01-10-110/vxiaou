<template>
  <div>
    <!-- header -->
    <header class="headCon">
      <a href="javascript:;" @click="goBack"></a>
      <img src="../assets/images/logo.jpg" alt="logo" />
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <!-- search -->
    <form action="#">
      <input type="search" name="search" id="search" placeholder="搜索商品" />
    </form>
    <!-- list -->
    <ul class="list">
      <li v-for="item in goodsList" :key="item.id" @click="$router.push('/shopDetail?id='+item.id)">
        <img :src="item.img ? $imgUrl+item.img:'https://img.yzcdn.cn/vant/apple-1.jpg'" alt="shop" />
        <div class="Rt">
          <h3>
            {{item.goodsname}}
          </h3>
          <p>&yen;{{item.price}}</p>
          <p><span>3625</span>条评论</p>
        </div>
      </li>
      <!-- <li>
        <img src="../assets/images/slisticon_03.jpg" alt="shop" />
        <div class="Rt">
          <h3>
            阿道夫修护滋养洗发香乳 洗发水 持久留香520ml*2瓶 旗舰店正品焕新升级款
          </h3>
          <p>&yen;123.00</p>
          <p><span>3625</span>条评论</p>
        </div>
      </li>
      <li>
        <img src="../assets/images/slisticon_03.jpg" alt="shop" />
        <div class="Rt">
          <h3>
            阿道夫修护滋养洗发香乳 洗发水 持久留香520ml*2瓶 旗舰店正品焕新升级款
          </h3>
          <p>&yen;123.00</p>
          <p><span>3625</span>条评论</p>
        </div>
      </li>
      <li>
        <img src="../assets/images/slisticon_03.jpg" alt="shop" />
        <div class="Rt">
          <h3>
            阿道夫修护滋养洗发香乳 洗发水 持久留香520ml*2瓶 旗舰店正品焕新升级款
          </h3>
          <p>&yen;123.00</p>
          <p><span>3625</span>条评论</p>
        </div>
      </li> -->
    </ul>
    <!-- <v-nav></v-nav> -->
  </div>
</template>

<script>
import {getGoods} from '../utils/axios';
// import vNav from "../../common/nav";
export default {
  data() {
    return {
      goodsList:[]
    }
  },
  components: {
    // vNav,
  },
  methods: {
    // 返回
    goBack() {
      this.$router.back();
    },
    getGoodsList(){
      getGoods({fid:this.$route.query.id})
      .then(res=>{
        // console.log(res);
        this.goodsList = res.data.list
      })
    }
  },
  mounted() {
    // console.log(this.$route.query.id);
    this.getGoodsList()
  },
};
</script>

<style scoped>
.headCon {
  padding: 0.4rem 0.35rem 0 0.29rem;
}
.headCon a {
  display: block;
  width: 0.17rem;
  height: 0.29rem;
  background: url(../assets/images/arrowLeft.jpg) no-repeat center;
  background-size: 0.17rem 0.29rem;
}
.headCon img {
  width: 1.5rem;
  height: auto;
}
form {
  margin: 0.22rem 0 0.33rem;
  display: flex;
  padding: 0 0.65rem;
  position: relative;
}
form #search {
  flex: 1;
  border-radius: 0.32rem;
  text-align: center;
  font: 0.26rem/0.77rem "微软雅黑";
  background: #f26b11 url(../assets/images/search.jpg) no-repeat 2.15rem
    0.28rem;
  background-size: 0.26rem 0.27rem;
}
form #search::placeholder {
  padding-left: 0.5rem;
  color: #fff;
}
.list {
  padding: 0 0.25rem;
}
.list li {
  height: 2.02rem;
  border-bottom: 1px solid #d1d1d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list li img {
  width: 1.55rem;
  height: auto;
}
.list li .Rt {
  width: 4.85rem;
}
.list li .Rt h3 {
  color: #333333;
  font: 0.26rem/0.37rem "微软雅黑";
}
.list li .Rt p:nth-of-type(1) {
  color: #e43a3b;
  font: 0.3rem/0.55rem "微软雅黑";
}
.list li .Rt p:nth-ot-type(2) {
  color: #999999;
  font: 0.24rem/0.39rem "微软雅黑";
}
.list li .Rt p:nth-ot-type(2) span {
  font: 0.26rem/0.39rem Arial;
}
.list li:nth-last-child(1) {
  margin-bottom: 1.2rem;
}
</style>