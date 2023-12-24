<template>
  <FadingText></FadingText>
  <ZoomingText></ZoomingText>
</template>

<script>
import FadingText from "./components/FadingText.vue";
import ZoomingText from "./components/ZoomingText.vue";

export default {
  name: "App",
  components: { FadingText, ZoomingText },
};
</script>
