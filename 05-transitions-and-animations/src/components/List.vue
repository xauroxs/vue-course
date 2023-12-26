<template>
  <button type="button" @click="addNumber">Add number</button>

  <ul>
    <TransitionGroup name="fade">
      <li
        v-for="(number, index) in numbers"
        @click="deleteNumber(index)"
        :key="number"
      >
        {{ index }}: {{ number }}
      </li>
    </TransitionGroup>
  </ul>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      flag: false,
      numbers: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    addNumber() {
      let num;

      do {
        num = Math.floor(Math.random() * 100 + 1);
      } while (this.numbers.includes(num));

      const index = Math.floor(Math.random() * this.numbers.length);

      this.numbers.splice(index, 0, num);
    },
    deleteNumber(index) {
      this.numbers.splice(index, 1);
    },
  },
};
</script>

<style>
li {
  font-size: 22px;
  cursor: pointer;
}

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
