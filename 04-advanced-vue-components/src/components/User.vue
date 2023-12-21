<template>
  <p>You are {{ age }} years old!</p>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
};
</script>
