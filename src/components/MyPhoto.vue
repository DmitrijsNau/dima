<template>
  <img
    :src="`dima.JPG`"
    class="mt-4 d-flex justify-center primary-border photo"
  />
</template>

<script>
export default {
  name: "MyPhoto",
};
</script>

<style scoped>
.photo {
  max-height: 50vh; /* Limit height to 50% of the viewport height */
  max-width: 25vw; /* Limit width to 25% of the viewport width */
  width: auto; /* Maintain aspect ratio */
  height: auto; /* Maintain aspect ratio */
  object-fit: contain; /* Ensure the image fits within the container */
}
</style>
