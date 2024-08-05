<template>
  <div id="experience">
    <v-card class="transparent-card mt-16">
      <v-card-title>
        Full Stack Software Developer Intern - Linde plc
      </v-card-title>
      <v-card-subtitle>May 2023 - Present</v-card-subtitle>
      <v-card-text>
        Developed mulitple ETL pipelines for various third-party data sources,
        such as <a href="https://www.lytx.com/" class="link">Lytx</a>,
        <a href="https://www.wheels.com/public/" class="link">Wheels</a>, and
        <a href="https://greenmile.com/" class="link">GreenMile</a>. Continously
        met with stakeholders and team lead to determine methods of
        consolidating data between systems, creating keys for the data to be
        used in future projects. Used this data to develop a new page on the
        team's LinTrack dashboard, which serves to provide accurate reporting on
        all business units and respective KPIs for the United States portion of
        the business.
      </v-card-text>
      <v-card-item class="d-flex justify-center">
        <v-chip-group variant="outlined">
          <v-chip class="transparent-chip">Fast API</v-chip>
          <v-chip class="transparent-chip">Spark</v-chip>
          <v-chip class="transparent-chip">T-SQL</v-chip>
          <v-chip class="transparent-chip">Vue.js</v-chip>
        </v-chip-group>
      </v-card-item>
    </v-card>
    <v-card class="transparent-card mt-4">
      <v-card-title>
        Research Project Team Lead - University at Buffalo
      </v-card-title>
      <v-card-subtitle>September 2022 - May 2023</v-card-subtitle>
      <v-card-text>
        Utilized multiple sensory technologies involving visual cameras,
        pressure sensors and IMU sensors to provide detailed full body motion
        capturing of figure skating performance. Developed the project website
        which allows users to upload videos of figure skating programs which
        were saved on a local server to be used for analysis. Manage
        communication between a team consisting of 8 undergraduate students and
        the professor running the project, as well as delegating tasks to other
        team members.
      </v-card-text>
      <v-card-item class="d-flex justify-center">
        <v-chip-group variant="outlined">
          <v-chip class="transparent-chip">HTML/CSS</v-chip>
          <v-chip class="transparent-chip">PyTorch</v-chip>
          <v-chip class="transparent-chip">Python</v-chip>
        </v-chip-group>
      </v-card-item>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ExperienceSection",
};
</script>

<style scoped>
.transparent-card {
  background-color: transparent;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.transparent-card:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Slightly defined background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Slight shadow */
}
.transparent-chip {
  background-color: rgb(255, 76, 41); /* Slightly transparent background */
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.transparent-chip:hover {
  background-color: rgba(255, 76, 41, 0.7); /* Less transparent on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Slight shadow on hover */
}
</style>
