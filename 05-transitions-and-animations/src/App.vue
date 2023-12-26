<template>
  <FadingText></FadingText>
  <ZoomingText></ZoomingText>
  <FadingAndZoomingText></FadingAndZoomingText>
  <List></List>
</template>

<script>
import FadingText from "./components/FadingText.vue";
import ZoomingText from "./components/ZoomingText.vue";
import FadingAndZoomingText from "./components/FadingAndZoomingText.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: { FadingText, ZoomingText, FadingAndZoomingText, List },
};
</script>
