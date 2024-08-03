<script setup>
import MainPage from "./components/MainPage.vue";
import { ref, onMounted } from "vue";

defineOptions({
  name: "MainLayout",
});

// JavaScript to track cursor position
const cursorGlow = ref(null);

onMounted(() => {
  document.addEventListener("mousemove", (e) => {
    if (cursorGlow.value) {
      cursorGlow.value.style.left = `${e.pageX}px`;
      cursorGlow.value.style.top = `${e.pageY}px`;
    }
  });
});
</script>

<template>
  <v-app class="pa-0">
    <v-layout>
      <div class="bg-color">
        <div ref="cursorGlow" class="cursor-glow"></div>
        <MainPage />
      </div>
    </v-layout>
  </v-app>
</template>

<style>
.bg-color {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #082032; /* Replace with your desired color */
  z-index: -1;
  overflow: scroll;
}

.cursor-glow {
  position: absolute;
  width: 1000px;
  height: 1000px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 0;
}
</style>
