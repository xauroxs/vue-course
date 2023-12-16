Vue.createApp({
  data() {
    return {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      perspective: 500,
    };
  },
  methods: {
    reset() {
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
      this.perspective = 500;
    },
    async copy() {
      const data = `transform: ${this.boxTransforms.transform}`;

      await navigator.clipboard.writeText(data);

      alert("CSS copied to the clipboard!");
    },
  },
  computed: {
    boxTransforms() {
      return {
        transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
      };
    },
  },
}).mount("#app");
