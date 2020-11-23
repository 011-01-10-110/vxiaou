<template>
  <div>
    <div class="tabBar">
      <router-link tag="a" activeClass="active" to="/home">
        <img :src="require('../assets/images/iconIndex.jpg')" alt="icon" />
        <p>首页</p>
      </router-link>
      <router-link tag="a" activeClass="active" to="/cart">
        <img :src="require('../assets/images/iconCart.jpg')" alt="icon" />
        <p>购物车</p>
      </router-link>
      <router-link tag="a" activeClass="active" to="/mine">
        <img :src="require('../assets/images/iconMine.jpg')" alt="icon" />
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          
      }
  },
};
</script>

<style scoped>

</style>