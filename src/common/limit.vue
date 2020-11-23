<template>
  <div>
    <!-- limit -->
    <div class="limit">
      <div class="limiTime">
        <h3><em></em>限时秒杀</h3>
        <p>每天零点场 好货秒不停</p>
        <div class="Ttime">
          <div>
            <!-- <em class="Tbox">02</em>: <em class="Tbox">16</em>:
            <em class="Tbox">45</em> -->
            <van-count-down :time="time">
              <template #default="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
          <em class="Tzi">秒杀</em>
        </div>
        <img src="../assets/images/shop_5.jpg" alt="shop" />
        <div class="limiprice">&yen;14.8</div>
      </div>
      <div class="limiRt">
        <div class="limiNew">
          <div class="Newfl">
            <h3>品牌上新 <em>折</em></h3>
            <p>每天九点 抢大牌</p>
            <img src="../assets/images/brand.jpg" alt="pic" />
          </div>
          <div class="pic">
            <img src="../assets/images/shop_1.jpg" alt="pic" />
          </div>
        </div>
        <div class="limiBtm">
          <div class="eveday">
            <h3>每日十件</h3>
            <p>只为你选好货</p>
            <div>
              <img src="../assets/images/shop_2.jpg" alt="pic" />
            </div>
          </div>
          <div class="pin">
            <h3>拼啊</h3>
            <p>超级好价拼团</p>
            <div>
              <img src="../assets/images/shop_3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moduleName from '../utils/axios';
export default {
  data() {
    return {
      time:999999999
    };
  },
};
</script>

<style scoped>
.limit {
  display: flex;
  height: 3.77rem;
  margin-top: 0.3rem;
  background: #fff;
}
.limit > div {
  flex: 1;
}
.limit .limiTime {
  position: relative;
  border-right: 1px solid #f0f0f0;
}
.limit .limiTime h3,
.limit .limiRt .limiNew .Newfl h3,
.limit .limiRt .limiBtm .eveday h3,
.limit .limiRt .limiBtm .pin h3 {
  margin-left: 0.2rem;
  color: #f73975;
  font: 0.3rem/0.36rem "微软雅黑";
}
.limit .limiTime h3 em {
  display: inline-block;
  vertical-align: middle;
  width: 0.33rem;
  height: 0.31rem;
  margin: 0 0.15rem 0.04rem 0;
  background: url(../assets/images/timer.jpg) no-repeat center;
  background-size: 0.33rem 0.31rem;
}
.limit .limiTime p,
.limit .limiRt .limiNew .Newfl p,
.limit .limiRt .limiBtm .eveday p,
.limit .limiRt .limiBtm .pin p {
  margin-left: 0.17rem;
  color: #a9a9a9;
  font: 0.22rem/0.29rem "微软雅黑";
}
.limit .limiTime .Ttime {
  margin: 0.04rem 0 0 0.2rem;
  width: 2.85rem;
  height: 0.43rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font: 0.23rem/0.43rem Arial;
}
.limit .limiTime .Ttime > div {
  width: 1.62rem;
  display: flex;
  justify-content: space-between;
}
.limit .limiTime .Ttime > div .Tbox {
  text-align: center;
  width: 0.43rem;
  height: 0.43rem;
  color: #fff;
  font: 0.23rem/0.43rem Arial;
  border-radius: 0.06rem;
  background: #292a2f;
}
.limit .limiTime .Ttime > div {
  width: auto;
}
.colon {
  /* display: inline-block; */
  /* margin: 0 .04rem; */
  color: #ee0a24;
}
.block {
  display: inline-block;
  text-align: center;
  width: 0.43rem;
  height: 0.43rem;
  color: #fff;
  font: 0.23rem/0.43rem Arial;
  border-radius: 0.06rem;
  background: #292a2f;
}
.limit .limiTime .Ttime .Tzi {
  height: 0.4rem;
  background: #fee300;
  padding: 0 0.1rem 0 0.2rem;
  color: #1d1a13;
  font: 0.28rem/0.4rem "微软雅黑";
  position: relative;
}
.limit .limiTime .Ttime .Tzi::after {
  content: "";
  position: absolute;
  top: 0;
  right: -0.15rem;
  border-left: 0.15rem solid #fee300;
  border-top: 0.2rem solid transparent;
  border-bottom: 0.2rem solid transparent;
}
.limit .limiTime img {
  display: block;
  width: auto;
  height: 2rem;
  margin: 0.33rem auto 0;
}
.limit .limiTime .limiprice {
  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;
  background: #ff3179;
  width: 0.84rem;
  height: 0.84rem;
  border-radius: 50%;
  text-align: center;
  color: #fff;
  font: 0.29rem/0.84rem Arial;
}
.limit .limiRt {
  display: flex;
  flex-direction: column;
}
.limit .limiRt > div {
  flex: 1;
}
.limit .limiRt .limiNew {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;
}
.limit .limiRt .limiNew .Newfl {
  width: 1.86rem;
}
.limit .limiRt .limiNew .Newfl h3 em {
  display: inline-block;
  vertical-align: middle;
  width: 0.33rem;
  height: 0.25rem;
  text-align: center;
  background-image: -webkit-linear-gradient(left, #fd1453, #f33694);
  color: #fff;
  font: 0.18rem/0.25rem "微软雅黑";
}
.limit .limiRt .limiNew .Newfl img {
  margin: 0.22rem 0 0 0.2rem;
  width: 0.93rem;
  height: auto;
}
.limit .limiRt .limiNew .pic {
  flex: 1;
  text-align: center;
}
.limit .limiRt .limiNew .pic img {
  width: 1.28rem;
  height: auto;
}
.limit .limiRt .limiBtm {
  display: flex;
}
.limit .limiRt .limiBtm > div {
  flex: 1;
}
.limit .limiRt .limiBtm .eveday {
  border-right: 1px solid #f0f0f0;
}
.limit .limiRt .limiBtm .eveday > div {
  text-align: center;
}
.limit .limiRt .limiBtm .eveday > div img {
  width: 0.64rem;
  height: auto;
}
.limit .limiRt .limiBtm .pin > div {
  text-align: center;
}
.limit .limiRt .limiBtm .pin > div img {
  width: 1.04rem;
  height: auto;
}
</style>