const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      middleName: "",
      lastName: "Doe",
      age: 21,
      url: "https://google.com",
      isPurple: false,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    decrement() {
      this.age--;
    },
    updateLastName(msg, event) {
      console.log(msg);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
    circleClasses() {
      return { purple: this.isPurple };
    },
  },
  watch: {
    age(newValue, oldValue) {
      console.log(
        `You were ${oldValue} years old, and now you are ${newValue} years old!`
      );
    },
  },
}).mount("#app");

setTimeout(() => {
  vm.firstName = "Bob";
}, 2000);
