<template>
  <div class="container">
    <div class="logo">
      <Logo />
      <p>nuxt 服务端渲染</p>
    </div>
    <p><nuxt-link to="/list">列表</nuxt-link></p>
    <a-divider />
    <p><nuxt-link to="/comment/list">约定式路由</nuxt-link></p>
    <a-divider />
    <p><nuxt-link to="/comment/1">动态路由(一级动态)</nuxt-link></p>
    <p>
      <nuxt-link to="/detail/detail--html-1">动态路由(多级动态)</nuxt-link>
    </p>
    <a-divider />
    <p><nuxt-link to="/layout/basic">布局-basic</nuxt-link></p>
    <p><nuxt-link to="/layout/fixedsider">布局-fixedsider</nuxt-link></p>
    <p><nuxt-link to="/layout/leftsider">布局-leftsider</nuxt-link></p>
    <p><nuxt-link to="/layout/rightsider">布局-rightsider</nuxt-link></p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "首页"
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  beforeUpdate() {},
  beforeDestroy() {},
  async asyncData({ params, $axios, error }) {

  }
};
</script>

<style>
.logo {
  margin-bottom: 50px;
}
.logo p {
  font-size: 18px;
  margin-top: 10px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  padding-top: 100px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* text-align: center; */
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
