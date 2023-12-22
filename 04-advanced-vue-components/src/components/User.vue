<template>
  <p>You are {{ age }} years old!</p>
  <button @click="increaseAge">Become older</button>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
  emits: ["increase-age"],
  methods: {
    increaseAge() {
      this.$emit("increase-age");
    },
  },
};
</script>
