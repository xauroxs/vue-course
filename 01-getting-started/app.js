const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      age: 21,
      url: "https://google.com",
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    increment() {
      this.age++;
    },
    decrement() {
      this.age--;
    },
  },
}).mount("#app");

setTimeout(() => {
  vm.firstName = "Bob";
}, 2000);
