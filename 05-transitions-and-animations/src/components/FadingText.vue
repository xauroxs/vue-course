<template>
  <button type="button" @click="flag = !flag">Toggle animation</button>
  <Transition name="fade">
    <h2 v-if="flag">Hello there</h2>
  </Transition>
</template>

<script>
export default {
  name: "FadingText",
  data() {
    return {
      flag: false,
    };
  },
};
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s linear;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
