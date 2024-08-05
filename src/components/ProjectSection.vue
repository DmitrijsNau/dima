<template>
  <div id="projects">
    <a
      href="https://raindle.net/"
      target="_blank"
      style="text-decoration: none"
    >
      <v-card class="transparent-card mt-16">
        <v-row no-gutters>
          <v-col cols="6">
            <v-img
              src="https://i.postimg.cc/W1Sxgq8F/raindle-title.png"
              class="ma-3 primary-border"
            ></v-img>
          </v-col>
          <v-col cols="6">
            <v-row>
              <v-col cols="12">
                <v-card-title class="wrap-text"> Raindle </v-card-title>
              </v-col>
              <v-col cols="12">
                <v-card-text>
                  Built a daily wordle-like game averaging 5,100 daily users.
                  Listened to community feedback, resolved opened GitHub issues
                  to create a game people love!
                </v-card-text>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-card-item class="d-flex justify-center">
          <v-chip-group variant="outlined">
            <v-chip class="transparent-chip">Vue.js</v-chip>
            <v-chip class="transparent-chip">Firebase</v-chip>
            <v-chip class="transparent-chip">Quasar</v-chip>
            <v-chip class="transparent-chip">Python</v-chip>
          </v-chip-group>
        </v-card-item>
      </v-card>
    </a>
    <v-card class="transparent-card mt-4">
      <v-row no-gutters>
        <v-col cols="6">
          <v-img src="dashboard.jpg" class="ma-3 primary-border"></v-img>
        </v-col>
        <v-col cols="6">
          <v-row>
            <v-col cols="12">
              <v-card-title class="wrap-text">
                LG&E Distribution Dashboard
              </v-card-title>
            </v-col>
            <v-col cols="12">
              <v-card-text>
                Developed a web app which provides KPIs for the Linde
                distribution proccess for 350 US locations across 500k routes
                for 2M customer locations.
              </v-card-text>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-card-item class="d-flex justify-center">
        <v-chip-group variant="outlined">
          <v-chip class="transparent-chip">Vue.js</v-chip>
          <v-chip class="transparent-chip">Nuxt</v-chip>
          <v-chip class="transparent-chip">Fast API</v-chip>
          <v-chip class="transparent-chip">Python</v-chip>
        </v-chip-group>
      </v-card-item>
    </v-card>
    <v-card class="transparent-card mt-4">
      <v-row no-gutters>
        <v-col cols="6">
          <v-img src="raft.png" class="ma-3 primary-border"></v-img>
        </v-col>
        <v-col cols="6">
          <v-row>
            <v-col cols="12">
              <v-card-title class="wrap-text">
                Kademlia DHT and Raft Consensus
              </v-card-title>
            </v-col>
            <v-col cols="12">
              <v-card-text>
                Implemented
                <a
                  href="https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf"
                  class="link"
                  >Kademlia</a
                >
                and <a href="https://raft.github.io/" class="link">Raft</a>
                . Utilized CSP-style concurrency and Protocol Buffers over
                TCP/UDP network sockets to implement a robust distributed hash
                table and consensus protocol equivalent to PAXOS.
              </v-card-text>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-card-item class="d-flex justify-center">
        <v-chip-group variant="outlined">
          <v-chip class="transparent-chip">Go</v-chip>
          <v-chip class="transparent-chip">Protobuf</v-chip>
          <v-chip class="transparent-chip">Networking</v-chip>
        </v-chip-group>
      </v-card-item>
    </v-card>
    <v-card class="transparent-card mt-4">
      <v-row no-gutters>
        <v-col cols="6">
          <v-img src="skating.jpg" class="ma-3 primary-border"></v-img>
        </v-col>
        <v-col cols="6">
          <v-row>
            <v-col cols="12">
              <v-card-title class="wrap-text">
                Skating Environment Reinforcement Learning
              </v-card-title>
            </v-col>
            <v-col cols="12">
              <v-card-text>
                Implemented a SARSA, Q-Learning, and Double Q-Learning Agent to
                solve a 4x4 grid world environment to achieve maximum points.
              </v-card-text>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-card-item class="d-flex justify-center">
        <v-chip-group variant="outlined">
          <v-chip class="transparent-chip">scikit-learn</v-chip>
          <v-chip class="transparent-chip">Pandas</v-chip>
          <v-chip class="transparent-chip">Python</v-chip>
        </v-chip-group>
      </v-card-item>
    </v-card>
    <a
      href="https://devpost.com/software/quantify-6lxpzo"
      target="_blank"
      style="text-decoration: none"
    >
      <v-card class="transparent-card">
        <v-row no-gutters>
          <v-col cols="6">
            <v-img src="quantify.jpg" class="ma-3 primary-border"></v-img>
          </v-col>
          <v-col cols="6">
            <v-row>
              <v-col cols="12">
                <v-card-title class="wrap-text">
                  UB Hacking Fall 2022 - Quantify
                </v-card-title>
              </v-col>
              <v-col cols="12">
                <v-card-text>
                  Built a daily wordle-like game averaging 5,100 daily users.
                  Listened to community feedback, resolved opened GitHub issues
                  to create a game people love!
                </v-card-text>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-card-item class="d-flex justify-center">
          <v-chip-group variant="outlined">
            <v-chip class="transparent-chip">Vue.js</v-chip>
            <v-chip class="transparent-chip">Nuxt</v-chip>
            <v-chip class="transparent-chip">FastAPI</v-chip>
            <v-chip class="transparent-chip">Python</v-chip>
          </v-chip-group>
        </v-card-item>
      </v-card>
    </a>
  </div>
</template>

<script>
export default {
  name: "ProjectSection",
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
  background-color: rgba(
    255,
    76,
    41,
    0.8
  ); /* Slightly more defined background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Slight shadow */
}
.wrap-text {
  white-space: normal; /* Allow text to wrap */
  overflow: visible; /* Ensure overflow is visible */
  text-overflow: clip; /* Clip the text instead of adding ellipsis */
}
</style>
