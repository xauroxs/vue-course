Vue.createApp({
  data() {
    return {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      perspective: 500,
    };
  },
  computed: {
    boxTransforms() {
      return {
        transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
      };
    },
  },
}).mount("#app");
