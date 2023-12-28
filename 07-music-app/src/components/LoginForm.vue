<template>
  <!-- Login Form -->
  <div
    class="text-white text-center font-bold p-4 rounded mb-4"
    :class="loginAlertVariant"
    v-if="loginShowAlert"
  >
    {{ loginAlertMessage }}
  </div>
  <VeeForm :validation-schema="schema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <VeeField
        type="email"
        name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <VeeField
        type="password"
        name="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >
      Submit
    </button>
  </VeeForm>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      schema: {
        email: 'required|min:3|max:100|email',
        password: 'required|min:8|max:32|excluded:password'
      },
      loginInSubmission: false,
      loginShowAlert: false,
      loginAlertVariant: 'bg-blue-500',
      loginAlertMessage: 'Please wait. You are being logged in.'
    }
  },
  methods: {
    login() {
      this.loginShowAlert = true
      this.loginInSubmission = true
      this.loginAlertVariant = 'bg-blue-500'
      this.loginAlertMessage = 'Please wait. You are being logged in.'

      this.loginAlertVariant = 'bg-green-500'
      this.loginAlertMessage = 'Success! You are now logged in.'
    }
  }
}
</script>
