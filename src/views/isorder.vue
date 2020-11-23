<template>
  <div>
    <!-- header -->
    <header class="headCon">
      <a href="javascript:;" @click="goBack"></a>
      <h1>确认订单</h1>
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <!-- mian -->
    <form action="#" class="main">
      <!-- address -->
      <div class="address">
        <div class="addfl">
          <p class="name">收货人:YouSu<span>10000000000</span></p>
          <div>
            <p>收货地址：</p>
            <p>北京市海淀区隐泉路清林苑6号楼中公教育优就业总部3层</p>
          </div>
        </div>
        <em></em>
      </div>
      <!-- shop -->
      <div class="shop">
        <div class="shopTop">
          <div class="shopname">
            <div class="Nfl">
              <img src="../assets/images/shop_4.jpg" alt="pic" />
              <div class="Ncon">
                <p>雅诗兰黛护肤霜</p>
                <p>规格：50g</p>
              </div>
            </div>
            <p class="pri">&yen;123.00</p>
          </div>
          <div class="num">
            <p>购买数量：</p>
            <div class="Numbtn">
              <span>-</span>
              <input type="text" value="1" name="num" />
              <span>+</span>
            </div>
          </div>
        </div>
        <div class="shopBtm">
          <p>配送方式</p>
          <p>XX快递</p>
        </div>
      </div>
      <!-- disCou -->
      <div class="disCon">
        <div class="disTi">
          <p>优惠券</p>
          <p>无可用</p>
        </div>
        <div class="disNum">
          <p>使用积分</p>
          <div class="disNumRt">
            <div class="jifen">
              <input type="text" name="num" placeholder="请输入积分" />
              <input type="submit" value="使用" />
            </div>
            <p>可用<span>50</span>积分</p>
          </div>
        </div>
      </div>
      <!-- syn -->
      <div class="syn">
        <div class="pri">
          <div>
            <p>商品金额</p>
            <p>&yen;123.00</p>
          </div>
          <div>
            <p>运费</p>
            <p>+&yen;0.00</p>
          </div>
          <div>
            <p>优惠券</p>
            <p>-&yen;0.00</p>
          </div>
          <div>
            <p>会员优惠</p>
            <p>-&yen;0.00</p>
          </div>
          <div>
            <p>积分折扣</p>
            <p>-&yen;0.00</p>
          </div>
        </div>
        <div class="total">
          <p>实付金额：<span>&yen;123.00</span></p>
          <input type="submit" value="提交订单" />
        </div>
      </div>
    </form>
    <!-- <v-nav></v-nav> -->
  </div>
</template>

<script>
// import vNav from "../../common/nav";
export default {
  components: {
    // vNav,
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
.address {
  height: 1.5rem;
  margin-bottom: 0.12rem;
  padding: 0 0.23rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.address .addfl {
  height: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.address .addfl .name {
  width: 6.45rem;
  font: 0.24rem "微软雅黑";
}
.address .addfl .name span {
  float: right;
  margin-right: 0.72rem;
}
.address .addfl > div {
  display: flex;
  width: 6.45rem;
}
.address .addfl > div p {
  font: 0.24rem "微软雅黑";
}
.address .addfl > div p:nth-of-type(2) {
  flex: 1;
}
.address em {
  display: block;
  width: 0.14rem;
  height: 0.24rem;
  background: url(../assets/images/arrowRight.jpg) no-repeat center;
  background-size: 0.14rem 0.24rem;
}
.shop {
  height: 3.61rem;
  padding: 0 0.23rem;
  margin-bottom: 0.11rem;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.shop .shopTop {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #f0f0f0;
}
.shop .shopTop > div {
  flex: 1;
}
.shop .shopTop .shopname {
  display: flex;
  align-items: center;
}
.shop .shopTop .shopname .Nfl {
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
}
.shop .shopTop .shopname .Nfl img {
  width: 1rem;
  height: auto;
}
.shop .shopTop .shopname .Nfl .Ncon {
  height: 80%;
  margin-left: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.shop .shopTop .shopname .Nfl .Ncon p {
  color: #616161;
  font: 0.24rem "微软雅黑";
}
.shop .shopTop .shopname .Nfl .Ncon p:nth-child(2) {
  color: #b2b2b2;
}
.shop .shopTop .shopname .pri {
  color: #e73f3c;
  font: 0.36rem "微软雅黑";
}
.shop .shopTop .num {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shop .shopTop .num p {
  color: #5d5d5d;
  font: 0.24rem "微软雅黑";
}
.shop .shopTop .num .Numbtn {
  width: 2.9rem;
  display: flex;
  justify-content: space-between;
  font: 0.3rem Arial;
}
.shop .shopTop .num .Numbtn input {
  width: 1.17rem;
  height: 0.64rem;
  border: 1px solid #535353;
  border-radius: 0.05rem;
  text-align: center;
  color: #535353;
  font: 0.3rem Arial;
}
.shop .shopTop .num .Numbtn span {
  width: 0.73rem;
  height: 0.64rem;
  border: 1px solid #535353;
  border-radius: 0.05rem;
  color: #535353;
  text-align: center;
  line-height: 0.64rem;
}
.shop .shopBtm {
  height: 0.96rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.shop .shopBtm p {
  color: #616161;
  font: 0.24rem "微软雅黑";
}
.disCon {
  height: 2.04rem;
  margin-bottom: 0.1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  color: #6b6b6b;
  font: 0.24rem "微软雅黑";
}
.disCon > div {
  flex: 1;
}
.disCon .disTi {
  padding: 0 0.23rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
}
.disCon .disNum {
  padding: 0 0.23rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.disCon .disNum .disNumRt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 3.8rem;
}
.disCon .disNum .disNumRt .jifen {
  width: 2.38rem;
  display: flex;
  justify-content: space-between;
}
.disCon .disNum .disNumRt .jifen input {
  font: 0.24rem "微软雅黑";
}
.disCon .disNum .disNumRt .jifen input[type="text"] {
  width: 1.49rem;
  height: 0.7rem;
  text-align: center;
  border: 0.02rem solid #d8d8d8;
  border-radius: 0.05rem;
}
.disCon .disNum .disNumRt .jifen input[type="text"]::placeholder {
  color: #e8e8e8;
}
.disCon .disNum .disNumRt .jifen input[type="submit"] {
  width: 0.7rem;
  height: 0.7rem;
  border: 0.02rem solid #faa42d;
  border-radius: 0.05rem;
  background: #f26b11;
  color: #fff;
}
.disCon .disNum .disNumRt p {
  color: #939393;
}
.disCon .disNum .disNumRt p span {
  color: #dc393e;
}
.syn {
  padding: 0 0.23rem;
  background: #fff;
  margin-bottom: 1.2rem;
}
.syn .pri {
  padding: 0.2rem 0;
  height: 2.2rem;
  border-bottom: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.syn .pri > div {
  display: flex;
  justify-content: space-between;
}
.syn .pri > div p:nth-child(1) {
  color: #666666;
  font: 0.24rem "微软雅黑";
}
.syn .pri > div p:nth-child(2) {
  color: #ec4154;
  font: 0.24rem "微软雅黑";
}
.syn .total {
  height: 2.59rem;
  display: flex;
  flex-direction: column;
}
.syn .total > div {
  flex: 1;
}
.syn .total p {
  text-align: right;
  color: #676767;
  font: 0.36rem/1.29rem "微软雅黑";
}
.syn .total p span {
  color: #e83d45;
}
.syn .total input[type="submit"] {
  width: 3.55rem;
  height: 1.12rem;
  margin: 0 auto;
  background: #f26b11;
  color: #fff;
  font: 0.3rem "微软雅黑";
}
</style>