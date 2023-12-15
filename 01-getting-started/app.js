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
    updateLastName(msg, event) {
      event.preventDefault();
      console.log(msg);
      this.lastName = event.target.value;
    },
  },
}).mount("#app");

setTimeout(() => {
  vm.firstName = "Bob";
}, 2000);
