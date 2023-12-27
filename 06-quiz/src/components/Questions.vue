<template>
  <div class="questions-ctr">
    <div class="progress">
      <div class="bar"></div>
      <div class="status">1 out of 3 questions answered</div>
    </div>
    <div
      class="single-question"
      v-for="{ question, answers } in questions"
      :key="question"
    >
      <div class="question">{{ question }}</div>
      <div class="answers" v-for="{ text } in answers" :key="text">
        <div class="answer">{{ text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Questions",
  props: ["questions"],
};
</script>
