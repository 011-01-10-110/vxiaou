<template>
  <div>
    <!-- header -->
    <header class="headCon">
      <a href="javascript:;" @click="goBack"></a>
      <h1>商品分类</h1>
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <!-- main -->
    <div class="main">
      <ul class="mainFl">
        <li :class="index==0?'active':''" ref="tabli" v-for="(item,index) in cateList" :key="item.id" @click="onchange(item.id,index)">
          <a href="#">{{item.catename}}</a>
          </li>
        <!-- <li><a href="#">施华蔻</a></li> -->
        <!-- <li><a href="#">沙宣</a></li>
        <li><a href="#">欧莱雅</a></li>
        <li><a href="#">潘婷</a></li>
        <li><a href="#">资生堂</a></li>
        <li><a href="#">阿道夫</a></li>
        <li><a href="#">卡诗</a></li>
        <li><a href="#">海飞丝</a></li>
        <li><a href="#">资生堂</a></li> -->
      </ul>
      <div class="mainRt">
        <div class="top">
          <!-- <div class="RtHead clearfix">
            <h5>洗发类</h5>
            <a href="#">更多<em class="allRight"></em></a>
          </div> -->
          <ul class="Rtlist">
            <li v-for="item in cateChild" :key="item.id" @click="$router.push('/shoplist?id='+item.id)">
              <img :src="$imgUrl+item.img" alt="pic" />
              <p>{{item.catename}}</p>
            </li>
          </ul>
        </div>
        <!-- <div class="Btm">
          <div class="RtHead clearfix">
            <h5>染发类</h5>
            <a href="#">更多<em class="allRight"></em></a>
          </div>
          <ul class="Rtlist">
            <li>
              <img src="../assets/images/shop_2 (2).jpg" alt="pic" />
              <p>护亮泽洗发水</p>
            </li>
            <li>
              <img src="../assets/images/pic.jpg" alt="pic" />
              <p>护亮泽洗发水</p>
            </li>
            <li>
              <img src="../assets/images/pic.jpg" alt="pic" />
              <p>护亮泽洗发水</p>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
    <!-- <v-nav></v-nav> -->
  </div>
</template>

<script>
import {getCateTree} from '../utils/axios';
// import vNav from "../../common/nav";
export default {
  data() {
    return {
      cateList:[],
      cateChild:[]
    }
  },
  components: {
    // vNav,
  },
  methods: {
    getclass(){
      getCateTree()
      .then(res=>{
        this.cateList = res.data.list
        this.cateChild = this.cateList[0].children
        
      })
    },
    // 返回
    goBack() {
      this.$router.back();
    },
    onchange(id,index){
      this.$refs.tabli.map(item=>{
        item.className = ''
      })
      this.$refs.tabli[index].className = 'active';
      // console.log(id);
      this.cateChild = this.cateList.filter(item=>item.id == id)[0].children
      // console.log(this.cateChild);
      // console.log(index);
    }
  },
  mounted() {
    this.getclass()
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
  display: flex;
  margin-bottom: 1.2rem;
}
.main .mainFl {
  width: 1.63rem;
  height: 10.6rem;
  padding-bottom: 0.885rem;
  border-right: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.main .mainFl li {
  height: 0.52rem;
  text-align: center;
  border-left: 0.08rem solid transparent;
}
.main .mainFl li a {
  color: #666666;
  font: 0.26rem/0.52rem "微软雅黑";
}
.main .mainFl .active {
  border-left-color: #f26b11;
}
.main .mainFl .active a {
  color: #f26b11;
}
.main .mainRt {
  flex: 1;
  padding: 0 0.35rem;
}
.main .mainRt .top .RtHead {
  margin-top: 0.35rem;
}
.main .mainRt .top .RtHead h5,
.main .mainRt .Btm .RtHead h5 {
  float: left;
  color: #464646;
  font: 0.26rem/0.26rem "微软雅黑";
}
.main .mainRt .top .RtHead a,
.main .mainRt .Btm .RtHead a {
  float: right;
  color: #464646;
  font: 0.24rem/0.26rem "微软雅黑";
}
.main .mainRt .top .RtHead a em,
.main .mainRt .Btm .RtHead a em {
  display: inline-block;
  margin-left: 0.06rem;
  position: relative;
  width: 0.11rem;
  height: 0.12rem;
}
.main .mainRt .top .RtHead a em::before,
.main .mainRt .top .RtHead a em::after,
.main .mainRt .Btm .RtHead a em::before,
.main .mainRt .Btm .RtHead a em::after {
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
.main .mainRt .top .RtHead a em::after,
.main .mainRt .Btm .RtHead a em::after {
  left: -0.01rem;
  border-left-color: #fff;
}
.main .mainRt .top .Rtlist,
.main .mainRt .Btm .Rtlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.main .mainRt .top .Rtlist li,
.main .mainRt .Btm .Rtlist li {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2.4rem;
  text-align: center;
}
.main .mainRt .top .Rtlist li img,
.main .mainRt .Btm .Rtlist li img {
  display: block;
  height: 1.6rem;
  width: auto;
}
.main .mainRt .top .Rtlist li p,
.main .mainRt .Btm .Rtlist li p {
  color: #888888;
  font: 0.24rem/0.24rem "微软雅黑";
}
.main .mainRt .Btm {
  margin-top: 1.15rem;
}
</style>