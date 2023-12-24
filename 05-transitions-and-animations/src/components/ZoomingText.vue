<template>
  <button type="button" @click="flag = !flag">Toggle animation</button>
  <Transition name="zoom" mode="out-in">
    <h2 v-if="flag" key="main">Hello there</h2>
    <h2 v-else key="secondary">General Kenobi</h2>
  </Transition>
</template>

<script>
export default {
  name: "ZoomingText",
  data() {
    return {
      flag: false,
    };
  },
};
</script>

<style>
h2 {
  width: 400px;
  margin: 20px;
  padding: 20px;
}

.zoom-enter-active {
  animation: zoom-in 0.5s linear forwards;
}

.zoom-leave-active {
  animation: zoom-out 0.5s linear forwards;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>
