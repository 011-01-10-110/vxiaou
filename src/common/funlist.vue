<template>
    <div>
            <!-- funList -->
            <div class="funList">
                <div class="items">
                    <div class="itemName">
                        <img src="../assets/images/iconMine_4.jpg" alt="pic">
                        <p>地址管理</p>
                    </div>
                    <div class="right"><em></em></div>
                </div>
                <div class="items">
                    <div class="itemName">
                        <img src="../assets/images/iconMine_5.jpg" alt="pic">
                        <p>我的钱包</p>
                    </div>
                    <div class="right">
                        <p>200余额</p>
                        <em></em>
                    </div>
                    
                </div>
                <div class="items">
                    <div class="itemName">
                        <img src="../assets/images/iconMine_6.jpg" alt="pic">
                        <p>我的优惠券</p>
                    </div>
                    <div class="right"><em></em></div>
                </div>
                <div class="items">
                    <div class="itemName">
                        <img src="../assets/images/iconMine_7.jpg" alt="pic">
                        <p>我的二维码</p>
                    </div>
                    <div class="right"><em></em></div>
                </div>
                <div class="items">
                    <div class="itemName">
                        <img src="../assets/images/iconMine_8.jpg" alt="pic">
                        <p>我的小伙伴</p>
                    </div>
                    <div class="right"><em></em></div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.funList {
  margin-bottom: 1.2rem;
  background: #fff;
}
.funList > div {
  height: 1.11rem;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.funList .items {
  padding: 0 .28rem;
}
.funList .items .itemName {
  display: flex;
  align-items: center;
}
.funList .items .itemName img {
  width: .32rem;
  height: auto;
}
.funList .items .itemName p {
  margin-left: .25rem;
  color: #686868;
  font: 0.26rem "微软雅黑";
}
.funList .items .right {
  display: flex;
  align-items: center;
}
.funList .items .right p {
  margin-right: .2rem;
  color: #ff6916;
  font: 0.24rem "微软雅黑";
}
.funList .items .right em {
  display: block;
  width: .14rem;
  height: .24rem;
  background: url(../assets/images/arrowRight.jpg) no-repeat center;
  background-size: .14rem .24rem;
}

</style>