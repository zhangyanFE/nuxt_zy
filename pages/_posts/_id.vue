<template>
  <div>
    <p>一级路由：{{ $route.params.posts }}</p>
    <p>二级路由：{{ $route.params.id }}</p>
  </div>
</template>
<script>
export default {
  // 动态路由
  head() {
    return {
      title: "多级动态路由"
    };
  }
};
</script>
