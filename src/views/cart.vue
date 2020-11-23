<template>
  <div>
    <header class="headCon">
      <a href="javascript:;" @click="goBack"></a>
      <h1>购物车</h1>
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <div class="main" id="app">
      <form action="#">
        <ul class="Carlist">
          <li
            :class="[index == active ? 'active' : '']"
            v-for="(item, index) in shopCarList"
            :key="index"
            @click.stop="activeClick(index)"
          >
            <div class="items">
              <div class="shop">
                <input
                  type="checkbox"
                  name="shops"
                  id="shops"
                  v-model="item.check"
                  @click.stop=""
                />
                <img :src="item.img?$imgUrl+item.img:''" alt="shop" />
                <div class="pri">
                  <h5>{{ item.goodsname }}</h5>
                  <p>
                    规格：<!-- <span>{{ item.spe }}</span> -->
                  </p>
                  <p>&yen;{{ item.price }}</p>
                </div>
              </div>
              <div class="num">
                <div>
                  <div class="low" @click.stop="low(index)">-</div>
                  <input type="text" :value="item.num" />
                  <div class="add" @click.stop="add(index)">+</div>
                </div>
              </div>
            </div>
            <a href="#" @click="del(index)">删除</a>
          </li>
          <li class="kong" v-show="shopCarList.length == 0">
            <div class="item">购物车已清空</div>
          </li>
        </ul>
        <div class="carBtm">
          <label>
            <input
              type="checkbox"
              name="quan"
              id="quan"
              v-model="allcheck"
              @change="allclick"
            />
            <span>全选</span>
          </label>
          <div class="Rt">
            <div class="total">
              <p>
                总计：<span>{{ allPrice }}</span>
              </p>
              <p>不含运费，已优惠&yen;0.00</p>
            </div>
            <input type="button" :value="'立即结算' + '(' + allnum + ')'" />
          </div>
        </div>
      </form>
    </div>
    <!-- <v-nav></v-nav> -->
  </div>
</template>

<script>
// import vNav from "../../common/nav";
import { getCartList,deleteCart,addCart } from "../utils/axios";
export default {
  data() {
    return {
      shopCarList: [
        // {
        //   img: require("../assets/images/shop_4.jpg"),
        //   name: "欧莱雅面霜",
        //   price: "123.00",
        //   spe: "50g",
        //   num: 1,
        //   check: true,
        // },
        // {
        //   img: require("../assets/images/shop_4.jpg"),
        //   name: "欧莱雅面霜",
        //   price: "123.00",
        //   spe: "50g",
        //   num: 1,
        //   check: true,
        // },
        // {
        //   img: require("../assets/images/shop_4.jpg"),
        //   name: "欧莱雅面霜",
        //   price: "123.00",
        //   spe: "50g",
        //   num: 1,
        //   check: true,
        // },
        // {
        //   img: require("../assets/images/shop_4.jpg"),
        //   name: "欧莱雅面霜",
        //   price: "123.00",
        //   spe: "50g",
        //   num: 1,
        //   check: true,
        // },
      ],
      // allPrice: 9999,
      // allnum: 9999
      active: -1,
      allcheck: true,
    };
  },
  computed: {
    // 总价
    allPrice() {
      let all = 0;
      this.shopCarList.map((item) => {
        if (item.check) {
          all += item.num * item.price;
        }
      });
      return all;
    },
    // 总数
    allnum() {
      let all = 0;
      this.shopCarList.map((item) => {
        if (item.check) {
          all += item.num;
        }
      });
      return all;
    },
  },
  watch: {
    // 单选全部全选变
    shopCarList: {
      deep: true,
      handler() {
        this.allcheck = this.shopCarList.every((item) => item.check);
      },
    },
  },
  methods: {
    // 获取列表
    getList() {
      getCartList({
        uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
      }).then((res) => {
        // console.log(res);
        this.shopCarList = res.data.list
        this.shopCarList.map(item=>{
          item.check = true
        })
      });
    },
    // 返回
    goBack() {
      this.$router.back();
    },
    // 加
    add(index) {
      this.shopCarList[index].num++;
      // 先删再加
      this.delDB(index)
      this.addDB(index)
    },
    // 减
    low(index) {
      if (this.shopCarList[index].num <= 1) {
        if (confirm("是否删除")) {
          // this.shopCarList.splice(index, 1);
          this,del(index)
        }
        return;
      }
      this.shopCarList[index].num--;
      // 先删再加
      this.delDB(index)
      this.addDB(index)
    },
    // 删除
    del(index) {
      this.delDB(index)
      this.shopCarList.splice(index, 1);
    },
    // 显示删除
    activeClick(index) {
      if (this.active == index) {
        this.active = -1;
      } else {
        this.active = index;
      }
    },
    // 全选
    allclick() {
      this.shopCarList.map((item) => (item.check = this.allcheck));
    },
    // 删除后台数据
    delDB(index){
      // 删除购物车物品
      deleteCart({id:this.shopCarList[index].id})
      .then(res=>{
        console.log(res.data.list);
      })
    },
    // 添加后台数据
    addDB(index){
      // 商品添加
      addCart({
        uid:JSON.parse(sessionStorage.getItem('userInfo')).uid,
        goodsid:this.shopCarList[index].goodsid,
        num:this.shopCarList[index].num
      })
    }
  },
  components: {
    // vNav,
  },
  mounted() {
    this.getList();
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
  width: 100%;
  overflow: hidden;
}
.main .Carlist li {
  transition: all 1s;
  width: 113.2%;
  height: 1.72rem;
  margin-top: 0.3rem;
  box-shadow: 0 0 0.05rem 0.05rem #f7f7f7;
  display: flex;
}
.main .Carlist li .items {
  width: 7.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
}
.main .Carlist li .items > div {
  flex: 1;
}
.main .Carlist li .items .shop {
  padding-left: 0.22rem;
  width: 4.85rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main .Carlist li .items .shop input {
  width: 0.34rem;
  height: 0.34rem;
  border-radius: 50%;
}
.main .Carlist li .items .shop img {
  width: 1.02rem;
  height: auto;
}
.main .Carlist li .items .shop .pri h5 {
  color: #333333;
  font: 0.26rem/0.68rem "微软雅黑";
}
.main .Carlist li .items .shop .pri p:nth-of-type(1) {
  color: #676767;
  font: 0.23rem/0.39rem "微软雅黑";
}
.main .Carlist li .items .shop .pri p:nth-of-type(1) span {
  font: 0.24rem/0.39rem Arial;
}
.main .Carlist li .items .shop .pri p:nth-of-type(2) {
  color: #e43a3a;
  font: 0.32rem/0.6rem Arial;
}
.main .Carlist li .items .num {
  padding: 0 0 0.25rem 0;
}
.main .Carlist li .items .num > div {
  margin-left: 1rem;
  width: 2.1rem;
  display: flex;
  justify-content: center;
  border: 1px solid #454545;
  border-radius: 0.05rem;
}
.main .Carlist li .items .num > div input {
  width: 0.79rem;
  height: 0.57rem;
  text-align: center;
  border-left: 1px solid #454545;
  border-right: 1px solid #454545;
}
.main .Carlist li .items .num > div .low,
.main .Carlist li .items .num > div .add {
  width: 0.67rem;
  height: 0.57rem;
  line-height: 0.57rem;
  text-align: center;
}
.main .Carlist li a {
  width: 0.98rem;
  height: 100%;
  text-align: center;
  background: #e43a3d;
  color: #fff;
  font: 0.24rem/1.72rem "微软雅黑";
}
.main .Carlist li.active {
  transform: translateX(-0.98rem);
}
.main .Carlist li:nth-last-child(2) {
  margin-bottom: 2.34rem;
}
.main .Carlist li.kong {
  width: 100%;
  box-shadow: none;
  transition: none;
  display: block;
}
.main .Carlist li.kong div {
  text-align: center;
  font: 0.5rem/1.72rem "微软雅黑";
}
.carBtm {
  width: 7.5rem;
  height: 1.15rem;
  padding-left: 0.25rem;
  background: #fff;
  border-top: 1px solid #e5e5e5;
  box-sizing: border-box;
  position: fixed;
  bottom: 1.2rem;
  left: 50%;
  margin-left: -3.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.carBtm label {
  width: 1rem;
  display: flex;
  justify-content: space-between;
}
.carBtm label span {
  color: #666666;
  font: 0.24rem/0.34rem "微软雅黑";
}
.carBtm label input {
  width: 0.34rem;
  height: 0.34rem;
}
.carBtm .Rt {
  width: 5.3rem;
  display: flex;
  justify-content: flex-end;
}
.carBtm .Rt .total {
  height: 1.14rem;
  align-items: flex-end;
  display: flex;
  margin-right: 0.4rem;
  flex-direction: column;
  justify-content: space-around;
}
.carBtm .Rt .total p:nth-child(1) {
  color: #333333;
  font: 0.3rem "微软雅黑";
}
.carBtm .Rt .total p:nth-child(1) span {
  color: #e43a3d;
}
.carBtm .Rt .total p:nth-child(2) {
  color: #a3a3a3;
  font: 0.2rem "微软雅黑";
}
.carBtm .Rt input {
  width: 2.47rem;
  height: 1.14rem;
  background: #f26b11;
  text-align: center;
  color: #fff;
  font: 0.3rem "微软雅黑";
}
</style>