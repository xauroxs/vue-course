<template>
  <Greeting :name="name"></Greeting>
  <User :age="age" @increase-age="increaseAge"></User>
</template>

<script>
import Greeting from "./components/Greeting.vue";
import User from "./components/User.vue";

export default {
  name: "App",
  components: { Greeting, User },
  data() {
    return {
      name: "John",
      age: 21,
    };
  },
  methods: {
    increaseAge() {
      this.age++;
    },
  },
};
</script>
