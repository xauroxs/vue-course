<template>
  <button type="button" @click="flag = !flag">Toggle animation</button>
  <Transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <h2 v-if="flag">Hello there</h2>
  </Transition>
</template>

<script>
export default {
  name: "FadingAndZoomingText",
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter was called.", el);
    },
    enter(el, done) {
      console.log("enter was called.", el);
      done();
    },
    afterEnter(el) {
      console.log("afterEnter was called.", el);
    },
    beforeLeave(el) {
      console.log("beforeLeave was called.", el);
    },
    leave(el, done) {
      console.log("leave was called.", el);
      done();
    },
    afterLeave(el) {
      console.log("afterLeave was called.", el);
    },
  },
};
</script>

<style></style>
