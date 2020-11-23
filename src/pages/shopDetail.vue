<template>
  <div>
    <!-- header -->
    <header class="headCon">
      <a href="javascript:;" @click="goBack"></a>
      <h1>商品详情</h1>
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <!-- main -->
    <div class="main">
      <!-- <img src="../assets/images/picDetail_1.jpg" alt="pic" />
      <img src="../assets/images/picDetail_2.jpg" alt="pic" /> -->
      <img :src="goodsInfo.img ? $imgUrl + goodsInfo.img : ''" alt="" />
      <!-- 价格 -->
      <div class="shopDe">
        <!-- <h3>娅芝贵妇素颜霜 贵妇膏神仙膏补水保湿懒人霜遮瑕珍珠膏</h3> -->
        <h3>{{goodsInfo.goodsname}}</h3>
        <p>
          &yen;{{goodsInfo.price}}
          <span>(此价格不与套装优惠同事享受)</span>
        </p>
      </div>
      <!-- 属性 -->
      <div class="shopAttr">
        <div class="pricePro">
          <p>
            促销：
            <em>满减</em>
            <span>满2件9折；3件8折</span>
          </p>
          <i></i>
        </div>
        <div class="sNumber">
          <p>购买数量</p>
          <div class="num">
            <span class="low" @click="num>1?num--:num=1">-</span>
            <input type="text" v-model="num" />
            <span class="add" @click="num++">+</span>
          </div>
        </div>
        <div class="shopAt">
          <p>商品属性</p>
          <i></i>
        </div>
        <div class="shopSel">
          <span>规格</span>
          <div>
            <!-- <a href="#">30g</a>
            <a href="#">5g</a> -->
            <a href="javascript:;" v-for="item in specsattr" :key="item">{{item}}</a>
          </div>
        </div>
      </div>
      <!-- 详情 -->
      <div class="shopDetil">
        <p>商品详情</p>
        <!-- <img src="../assets/images/picDetail_3.jpg" alt="pic" />
        <img src="../assets/images/picDetail_4 .jpg" alt="pic" />
        <img src="../assets/images/picDetail_5.jpg" alt="pic" />
        <img src="../assets/images/picDetail_6.jpg" alt="pic" />
        <img src="../assets/images/picDetail_7.jpg" alt="pic" /> -->
        <div v-html="goodsInfo.description"> </div>
      </div>
      <!-- 评价 -->
      <div class="shopEva">
        <p class="Top">商品评价</p>
        <div class="Con">
          <p>1235668ffg</p>
          <p>效果很好下次再来</p>
          <div class="Conimg">
            <img src="../assets/images/picDetail_8.jpg" alt="pic" />
            <img src="../assets/images/picDetail_9.jpg" alt="pic" />
            <img src="../assets/images/picDetail_10.jpg" alt="pic" />
          </div>
          <p>2020-01-13</p>
        </div>
        <div class="Btm">
          <p>共<span>1000+</span>条评论</p>
          <a href="#">查看更多<em class="right"></em></a>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div class="FBtm">
      <div class="car" @click="$router.push('/cart')">
        <img src="../assets/images/iconCart.jpg" alt="pic" />
        <p>购物车</p>
        <em class="red">2</em>
      </div>
      <div>
        <a href="javascript:;" @click="add">加入购物车</a>
        <a href="#">立即购买</a>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { getGoodsInfo,addCart } from "../utils/axios";
export default {
  data() {
    return {
      goodsInfo: [],
      specsattr:[],
      num:1
    };
  },
  components: {},
  methods: {
    // 返回
    goBack() {
      this.$router.back();
    },
    getInfo() {
      getGoodsInfo({ id: this.$route.query.id }).then((res) => {
        // console.log(res);
        this.goodsInfo = res.data.list[0];
        this.specsattr = this.goodsInfo.specsattr.split(',')
        // console.log(this.goodsInfo);
      });
    },
    add(){
      addCart({
        uid:JSON.parse(sessionStorage.getItem('userInfo')).uid,
        goodsid:this.goodsInfo.id,
        num:this.num
      })
      .then(res=>{
        // console.log(res);
        Toast.success(res.data.msg);
      })
    }
  },
  mounted() {
    this.getInfo();
  },
};
</script>

<style scoped>
.headCon {
  padding: 0.4rem 0.35rem 0 0.29rem;
  background: #f26b11;
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
.page {
  background: #f0f0f0;
}
.main {
  margin-bottom: 1.2rem;
}
.main > img {
  width: 100%;
  height: auto;
}
.main .shopDe {
  padding: 0.22rem 0.46rem 0.07rem 0.36rem;
  margin-bottom: 0.17rem;
  background: #fff;
}
.main .shopDe h3 {
  color: #333333;
  font: 0.3rem/0.48rem "微软雅黑";
}
.main .shopDe p {
  color: #e2393c;
  font: 0.3rem/0.79rem Arial;
}
.main .shopDe p span {
  color: #878787;
  font: 0.22rem/0.79rem "微软雅黑";
}
.main .shopAttr {
  height: 3.98rem;
  margin-bottom: 0.21rem;
  padding: 0 0.23rem;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.main .shopAttr > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}
.main .shopAttr .pricePro {
  border-bottom: 1px solid #f1f1f1;
}
.main .shopAttr .pricePro p,
.main .shopAttr .sNumber p,
.main .shopAttr .shopAt p {
  color: #464646;
  font: 0.26rem "微软雅黑";
}
.main .shopAttr .pricePro p em {
  letter-spacing: 0.05rem;
  padding: 0.07rem 0.1rem;
  border: 1px solid #b2281b;
  border-radius: 0.05rem;
  display: inline-block;
  color: #b2281b;
  font: 0.2rem "微软雅黑";
}
.main .shopAttr .pricePro p span {
  font: 0.24rem "微软雅黑";
}
.main .shopAttr .pricePro i,
.main .shopAttr .shopAt i {
  display: block;
  width: 0.35rem;
  height: 0.21rem;
  background: url(../assets/images/arrow.jpg) no-repeat center;
  background-size: 0.35rem 0.21rem;
}
.main .shopAttr .sNumber {
  border-bottom: 1px solid #f1f1f1;
}
.main .shopAttr .sNumber .num {
  border: 1px solid #464646;
  border-radius: 0.05rem;
}
.main .shopAttr .sNumber .low,
.main .shopAttr .sNumber .add {
  /* content: "-"; */
  display: inline-block;
  width: 0.62rem;
  height: 0.57rem;
  line-height: 0.57rem;
  text-align: center;
}
.main .shopAttr .sNumber .num::after {
  /* content: "+"; */
}
.main .shopAttr .sNumber .num input {
  width: 0.79rem;
  height: 0.57rem;
  text-align: center;
  border-left: 1px solid #464646;
  border-right: 1px solid #464646;
  color: #464646;
}
.main .shopAttr .shopSel span {
  color: #cacaca;
  font: 0.24rem "微软雅黑";
}
.main .shopAttr .shopSel > div {
  padding-left: 0.7rem;
  flex: 1;
  display: flex;
  justify-content: flex-start;
}
.main .shopAttr .shopSel > div a:nth-child(1),
.main .shopAttr .shopSel > div a:nth-child(2) {
  width: 1.5rem;
  height: 0.59rem;
  border-radius: 0.04rem;
  text-align: center;
  background: #e43a3d;
  color: #fff;
  font: 0.28rem/0.59rem "微软雅黑";
}
.main .shopAttr .shopSel > div a:nth-child(2) {
  background: #e1e1e3;
  margin-left: 0.15rem;
  width: 1.17rem;
}
.main .shopDetil {
  background: #fff;
  margin-bottom: 0.3rem;
}
.main .shopDetil p {
  padding-left: 0.23rem;
  color: #454545;
  font: 0.3rem/1rem "微软雅黑";
}
.main .shopDetil img {
  width: 100%;
  height: auto;
}
.main .shopEva {
  background: #fff;
  height: 5.64rem;
  padding: 0 0.21rem;
  display: flex;
  flex-direction: column;
}
.main .shopEva .Top {
  height: 0.93rem;
  color: #454545;
  font: 0.3rem/0.93rem "微软雅黑";
  border-bottom: 1px solid #eeeeee;
}
.main .shopEva .Con {
  border-bottom: 1px solid #eeeeee;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.main .shopEva .Con p {
  color: #656565;
  font: 0.26rem Arial, "微软雅黑";
}
.main .shopEva .Con .Conimg {
  display: flex;
}
.main .shopEva .Con .Conimg img {
  width: auto;
  height: 1.51rem;
}
.main .shopEva .Con p:nth-last-of-type(1) {
  color: #a1a1a1;
}
.main .shopEva .Btm {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.93rem;
}
.main .shopEva .Btm p {
  color: #999999;
  font: 0.24rem "微软雅黑";
}
.main .shopEva .Btm p span {
  font: 0.26rem Arial;
}
.main .shopEva .Btm a {
  color: #999999;
  font: 0.24rem "微软雅黑";
}
.main .shopEva .Btm a em.right {
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.1rem;
  position: relative;
  width: 0.11rem;
  height: 0.12rem;
}
.main .shopEva .Btm a em.right::before,
.main .shopEva .Btm a em.right::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  line-height: 0;
  font-size: 0;
  border-left: 0.11rem solid #676767;
  border-bottom: 0.06rem solid transparent;
  border-top: 0.06rem solid transparent;
}
.main .shopEva .Btm a em.right::after {
  left: -0.01rem;
  border-left-color: #fff;
}
.FBtm {
  width: 7.5rem;
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -3.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
.FBtm .car {
  margin: 0 auto;
  text-align: center;
  position: relative;
}
.FBtm .car img {
  width: auto;
  height: 0.53rem;
}
.FBtm .car p {
  color: #878787;
  font: 0.18rem/0.42rem "微软雅黑";
}
.FBtm .car em.red {
  position: absolute;
  top: 0;
  right: 0;
  width: 0.24rem;
  height: 0.24rem;
  background: #e43a3d;
  border-radius: 50%;
  color: #fff;
  font: 0.19rem/0.24rem Arial;
}
.FBtm div:nth-child(2) {
  display: flex;
}
.FBtm div:nth-child(2) a {
  width: 2.89rem;
  height: 1.14rem;
  text-align: center;
  color: #fff;
  font: 0.3rem/1.24rem "微软雅黑";
  background: #f26b11;
}
.FBtm div:nth-child(2) a:nth-of-type(2) {
  background: #e43a3d;
}
</style>