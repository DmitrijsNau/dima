<template>
  <div>
    <h1>Dima Naudzuns</h1>
    <v-divider class="border-opacity-100 main-line" />
    <br />
    <h4>
      Hi! I am a Computer Science student with a focused interest on software
      engineering and data science. Feel free to check out my
      <a
        :href="`/dima/dmitri_naudzuns_resume.pdf`"
        download
        class="font-weight-medium text-decoration-underline resume"
        >resume</a
      >
      or some of my stuff. Or you can reach me elsewhere using the links below.
    </h4>
  </div>
</template>

<script>
export default {
  name: "IntroCol",
};
</script>
<style scoped>
.resume {
  color: #ff4c29;
}
.main-line {
  color: #334756;
}
</style>
