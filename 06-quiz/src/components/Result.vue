<template>
  <div class="result">
    <div class="title">{{ results[resultIndex].title }}</div>
    <div class="desc">{{ results[resultIndex].description }}</div>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: ["results", "correctAnswered"],
  computed: {
    resultIndex() {
      let index = 0;

      this.results.forEach((e, i) => {
        if (e.min <= this.correctAnswered && e.max >= this.correctAnswered) {
          index = i;
        }
      });

      return index;
    },
  },
};
</script>
