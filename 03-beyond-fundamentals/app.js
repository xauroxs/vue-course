const vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },
  beforeCreate() {
    console.log("beforeCreate() function was called!", this.message);
  },
  created() {
    console.log("created() function was called!", this.message);
  },
  beforeMount() {
    console.log("beforeMount() function was called!", this.$el);
  },
  mounted() {
    console.log("mounted() function was called!", this.$el);
  },
  beforeUpdate() {
    console.log("beforeUpdate() function was called!");
  },
  updated() {
    console.log("updated() function was called!");
  },
  beforeUnmount() {
    console.log("beforeUnmount() function was called!");
  },
  unmounted() {
    console.log("unmounted() function was called!");
  },
});

vm.component("hello", {
  template: `<h1>{{ message }}</h1>`,
  data() {
    return {
      message: "Hello world!",
    };
  },
});

vm.mount("#app");
