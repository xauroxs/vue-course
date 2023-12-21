<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: "Greeting",
  props: ["name"],
  data() {
    return {
      msg: `Hello there, ${this.name}!`,
    };
  },
};
</script>
