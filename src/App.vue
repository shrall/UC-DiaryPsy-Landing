<template>
  <router-view></router-view>
</template>

<script>
export default {
  setup() {},
  watch: {
    $route(to) {
      document.title = `${to.meta.title}`;
    },
  },
  methods: {},
  created() {},
};
</script>
