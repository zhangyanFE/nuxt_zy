<template>
  <div>
    <p>一级路由: {{ id }}</p>
    <p>{{ JSON.stringify(post) }}</p>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "评论动态数据"
    };
  },
  // 路由参数校验
  // 如果正则返回false则会跳转到错误页面
  validate({ params, query, store }) {
    return /^\d+$/.test(params.id);
  },

  // 匿名中间件
  middleware({ redirect, store }) {
    if (!store.state.user.userInfo) {
      return redirect("/login");
    }
  },
  // 具名中间件
  middleware: ["authenticated", "user-agent"],
  // 计算属性
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  // 已挂在DOM
  mounted() {
    // 初始化数据
    const userInfo = {
      name: "小美",
      age: "20",
      sex: "女",
      id: 5
    };

    // 问题：
    // =====在store里如何调用异步数据？（由于mutation方法中只能执行同步方法，如何在store中获取远程服务器中的数据呢？）======
    // Vuex提供了一个解决方法 action，action是一个类似于mutation的方法，它可以包含任何任意异步操作，不同之处在于action不能直接修改状态只能提交mutation

    // 提交 mutations（同步方法）
    this.$store.commit("user/add", userInfo);

    // 执行异步方法的调用提交mutations（异步方法）
    this.$store.dispatch("user/getData");
  },
  // 服务端请求获取数据
  async asyncData({ params, $axios, error }) {
    const id = params.id;

    try {
      const post = await $axios.$get(`https://api.nuxtjs.dev/posts/${id}`);
      return { post };
    } catch (e) {
      error(e); // Show the nuxt error page with the thrown error
    }
  }
};
</script>
