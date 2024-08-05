<template>
  <v-container fluid class="main-container">
    <v-row no-gutters>
      <v-col cols="12" md="5" class="left-col mr-md-4">
        <div class="mt-6 ml-6">
          <IntroCol />
          <div class="d-flex justify-space-between align-center mt-4">
            <v-row class="mt-4" align="center" justify="space-between">
              <v-col lg="6">
                <MyPhoto />
              </v-col>
              <v-col lg="4">
                <LineNavigation />
              </v-col>
            </v-row>
          </div>
        </div>
        <v-row class="mt-4">
          <v-col cols="12" class="d-flex justify-center">
            <ContactLinks />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" class="right-col mt-12">
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <AboutSection />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <ExperienceSection />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <ProjectSection />
            </v-col>
          </v-row>
          <v-row class="mt-16">
            <v-col cols="12" class="d-flex justify-center">
              Built with Vue<v-icon>mdi-vuejs</v-icon> and Vuetify<v-icon
                >mdi-vuetify</v-icon
              >
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import IntroCol from "./IntroCol.vue";
import MyPhoto from "./MyPhoto.vue";
import MyProjects from "./MyProjects.vue";
import ContactLinks from "./ContactLinks.vue";
import LineNavigation from "./LineNavigation.vue";
import AboutSection from "./AboutSection.vue";
import ExperienceSection from "./ExperienceSection.vue";
import ProjectSection from "./ProjectSection.vue";
export default {
  components: {
    IntroCol,
    MyPhoto,
    MyProjects,
    ContactLinks,
    LineNavigation,
    AboutSection,
    ExperienceSection,
    ProjectSection,
  },
};
</script>

<style>
.main-container {
  height: 100vh;
  display: flex;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

.left-col {
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.right-col {
  margin-left: 50%;
  height: 100vh;
  overflow-y: auto;
}

.primary-border {
  border: 1px solid rgba(51, 71, 86); /* Blue darken-2 color with 50% opacity */
}

.contacts {
  max-width: 300px;
}

.link {
  color: #ff4c29;
}

/* Media query for small screens */
@media (max-width: 900px) {
  .main-container {
    flex-direction: column;
    height: auto;
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }

  .left-col {
    position: static;
    width: 100%;
    height: auto;
    overflow-y: visible;
    margin-bottom: 20px; /* Add some space between the columns */
  }

  .right-col {
    margin-left: 0;
    width: 100%;
    height: auto;
    overflow-y: visible;
    padding-bottom: 20px; /* Add padding to the bottom to prevent content cutoff */
  }
}
</style>
