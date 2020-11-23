<template>
  <div>
    <router-view></router-view>
    <v-Nav></v-Nav>
  </div>
</template>

<script>
import vNav from "../common/nav";

export default {
  components: {
    vNav,

  },
};
</script>
<style scoped>

</style>