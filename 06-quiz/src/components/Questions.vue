<template>
  <div class="questions-ctr">
    <div class="progress">
      <div
        class="bar"
        :style="{ width: `${(questionsAnswered / questions.length) * 100}%` }"
      ></div>
      <div class="status">
        {{ questionsAnswered }} out of {{ questions.length }} questions answered
      </div>
    </div>
    <div
      class="single-question"
      v-for="({ question, answers }, index) in questions"
      v-show="index === questionsAnswered"
      :key="question"
    >
      <div class="question">{{ question }}</div>
      <div class="answers">
        <div
          class="answer"
          v-for="{ text, isCorrect } in answers"
          :key="text"
          @click.prevent="selectAnswer(isCorrect)"
        >
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Questions",
  emits: ["question-answered"],
  props: ["questions", "questionsAnswered"],
  methods: {
    selectAnswer(isCorrect) {
      this.$emit("question-answered", isCorrect);
    },
  },
};
</script>
