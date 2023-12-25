<template>
  <button type="button" @click="flag = !flag">Toggle animation</button>
  <Transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="false"
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

      const animation = el.animate([{ transform: "scale3d(0, 0, 0)" }, {}], {
        duration: 500,
      });

      animation.onfinish = () => {
        done();
      };
    },
    afterEnter(el) {
      console.log("afterEnter was called.", el);
    },
    beforeLeave(el) {
      console.log("beforeLeave was called.", el);
    },
    leave(el, done) {
      console.log("leave was called.", el);

      const animation = el.animate([{}, { transform: "scale3d(0, 0, 0)" }], {
        duration: 500,
      });

      animation.onfinish = () => {
        done();
      };
    },
    afterLeave(el) {
      console.log("afterLeave was called.", el);
    },
  },
};
</script>

<style></style>
