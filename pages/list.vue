<template>
  <div>
    <List :data="data" @ItemClick="handleItemClick" />
  </div>
</template>
<script>
const data = [
  {
    title: "Ant Design Title 1"
  },
  {
    title: "Ant Design Title 2"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 4"
  }
];
export default {
  // layout: "basic",
  head() {
    return {
      title: "列表",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ],
      link: []
    };
  },
  data() {
    return {
      data
    };
  },
  methods: {
    handleItemClick(item) {
      console.log(item, "子组件通过事件通知父组件要更新状态");
    }
  }
};
</script>
<style></style>
