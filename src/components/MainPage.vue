<template>
  <v-container fluid class="main-container">
    <v-row no-gutters>
      <v-col cols="5" class="left-col mr-4">
        <div class="mt-6 ml-6">
          <IntroCol />
          <div class="d-flex justify-center mt-4">
            <MyPhoto />
          </div>
        </div>
        <div class="d-flex justify-center mb-8">
          <v-btn
            v-for="icon in icons"
            :key="icon.title"
            :icon="icon.icon"
            class="mx-4"
            variant="text"
            :href="icon.href"
          ></v-btn>
        </div>
      </v-col>
      <v-col cols="6" class="right-col">
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <MyProjects />
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
export default {
  components: {
    IntroCol,
    MyPhoto,
    MyProjects,
  },
  data: () => ({
    publicPath: import.meta.env.BASE_URL,
    icons: [
      {
        title: "Email",
        icon: "mdi-email",
        href: "mailto: dmitrijs@buffalo.edu",
      },
      {
        title: "LinkedIn",
        icon: "mdi-linkedin",
        href: "https://www.linkedin.com/in/dima-naudzuns-499b96210/",
      },
      {
        title: "GitHub",
        icon: "mdi-github",
        href: "https://github.com/DmitrijsNau",
      },
    ],
  }),
};
</script>

<style scoped>
.main-container {
  height: 100vh;
  display: flex;
}

.left-col {
  position: fixed;
  height: 100vh;
  overflow: hidden;
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
</style>
