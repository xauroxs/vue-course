<template>
  <FadingText></FadingText>
  <ZoomingText></ZoomingText>
  <FadingAndZoomingText></FadingAndZoomingText>
</template>

<script>
import FadingText from "./components/FadingText.vue";
import ZoomingText from "./components/ZoomingText.vue";
import FadingAndZoomingText from "./components/FadingAndZoomingText.vue";

export default {
  name: "App",
  components: { FadingText, ZoomingText, FadingAndZoomingText },
};
</script>
