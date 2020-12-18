<template>
  <div>
    <p>comment: {{ id }}</p>
  </div>
</template>
<script>
export default {
  // 中间件
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
  async asyncData({ params }) {
    console.log("params", params);
  }
};
</script>
