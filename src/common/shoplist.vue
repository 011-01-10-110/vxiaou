<template>
  <div>
    <!-- shopList -->
    <div class="shopList">
      <!-- <ul class="shopNav">
        <li class="active">
          <a href="#">热门推荐</a>
        </li>
        <li>
          <a href="#">发现好货</a>
        </li>
        <li>
          <a href="#">只看专场</a>
        </li>
        <li>
          <a href="#">只看商品</a>
        </li>
      </ul>
      <div class="shopCon">
        <div class="items" v-for="item in shopCon" :key="item.id">
          <div class="pic">
            <img :src="item.img" alt="pic" />
          </div>
          <div class="ItemRt">
            <h5>{{ item.name }}</h5>
            <p>&yen;{{ item.price }}</p>
            <p>已售{{ item.num }}件</p>
            <a href="shopdetail.html">立即抢购</a>
          </div>
        </div>
      </div> -->
      <van-tabs v-model="activeName">
        <!-- 选项 -->
        <van-tab title="热门推荐" name="a">
          <!-- 商品card -->
          <van-card
            :price="item.price"
            desc="描述信息"
            :title="item.goodsname"
            :thumb="item.img ? $imgUrl + item.img : 'https://img.yzcdn.cn/vant/ipad.jpeg'"
            v-for="item in newList"
            :key="item.id"
          />
        </van-tab>
        <van-tab title="发现好货" name="b">
          <!-- 商品card -->
          <van-card
            :price="item.price"
            desc="描述信息"
            :title="item.goodsname"
            :thumb="item.img ? $imgUrl + item.img : 'https://img.yzcdn.cn/vant/ipad.jpeg'"
            v-for="item in hotsList"
            :key="item.id"
          />
        </van-tab>
        <van-tab title="只看专场" name="c">
          <!-- 商品卡片 -->
          <van-card
            v-for="item in goodsList"
            :key="item.id"
            num="2"
            :price="item.price"
            desc="描述信息"
            :title="item.goodsname"
            :thumb="
              item.img
                ? $imgUrl + item.img
                : 'https://img.yzcdn.cn/vant/ipad.jpeg'
            "
          />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { getIndexGoods } from "../utils/axios";
export default {
  data() {
    return {
      // shopCon: [
      //   {
      //     id: 1,
      //     img: require("../assets/images/shop_4.jpg"),
      //     name: "雅诗兰黛染发膏60ml",
      //     price: 123.0,
      //     num: 800,
      //   },
      //   {
      //     id: 2,
      //     img: require("../assets/images/shop_4.jpg"),
      //     name: "雅诗兰黛染发膏60ml",
      //     price: 123.0,
      //     num: 800,
      //   },
      //   {
      //     id: 3,
      //     img: require("../assets/images/shop_4.jpg"),
      //     name: "雅诗兰黛染发膏60ml",
      //     price: 123.0,
      //     num: 800,
      //   },
      // ],
      activeName: "a",
      hotsList: [],
      goodsList: [],
      newList: [],
    };
  },
  methods: {
    getGoods() {
      getIndexGoods().then((res) => {
        this.hotsList = res.data.list[0].content;
        this.goodsList = res.data.list[1].content;
        this.newList = res.data.list[2].content;
      });
    },
  },
  mounted() {
    this.getGoods();
  },
};
</script>

<style scoped>
.shopList {
  background: #fff;
  padding: 0.2rem 0.2rem 0;
  margin-bottom: 1.22rem;
}
.shopList .shopNav {
  margin-bottom: 0.15rem;
  display: flex;
  border-top: 1px solid #d0d0d0;
  border-bottom: 1px solid #d0d0d0;
}
.shopList .shopNav li {
  flex: 1;
  text-align: center;
  border-right: 1px solid #d0d0d0;
}
.shopList .shopNav li a {
  color: #424242;
  font: 0.28rem/0.7rem "微软雅黑";
}
.shopList .shopNav .active {
  background: #f26b11;
  border-right: 0;
}
.shopList .shopNav .active a {
  color: #fff;
}
.shopList .shopCon {
  padding: 0 0 0.2rem;
  margin: 0 0 1.2rem;
}
.shopList .shopCon .items {
  height: 2.99rem;
  margin-bottom: 0.2rem;
  box-shadow: 0 0 0.07rem #ededed;
  display: flex;
  align-items: center;
}
.shopList .shopCon .items .pic {
  width: 2.9rem;
  text-align: center;
}
.shopList .shopCon .items .pic img {
  width: auto;
  height: 2.2rem;
}
.shopList .shopCon .items .ItemRt {
  flex: 1;
  padding-left: 0.15rem;
}
.shopList .shopCon .items .ItemRt h5 {
  color: #1d1d1d;
  font: 0.3rem/0.58rem "微软雅黑";
}
.shopList .shopCon .items .ItemRt p:nth-of-type(1) {
  color: #e72e33;
  font: 0.3rem/0.51rem "微软雅黑";
}
.shopList .shopCon .items .ItemRt p:nth-of-type(2) {
  color: #8d8d8d;
  font: 0.24rem/0.59rem "微软雅黑";
}
.shopList .shopCon .items .ItemRt a {
  display: block;
  width: 1.64rem;
  border-radius: 0.05rem;
  text-align: center;
  color: #fff;
  background: #f26b11;
  font: 0.24rem/0.52rem "微软雅黑";
}
.shopList .shopCon > div:nth-child(3) {
  margin: 0;
}
</style>