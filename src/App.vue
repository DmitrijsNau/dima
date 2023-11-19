<script>
export default {
  data: () => (
    { 
      publicPath: import.meta.env.BASE_URL,
      items: [
        {
          title: 'Email',
          disabled: false,
          href: 'mailto: dmitrijs@buffalo.edu',
        },
        {
          title: 'LinkedIn',
          disabled: false,
          href: 'https://www.linkedin.com/in/dima-naudzuns-499b96210/',
        },
        {
          title: 'GitHub',
          disabled: false,
          href: 'https://github.com/DmitrijsNau',
        },
      ],
    }
  )
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col 
      xs="6"
      sm="6"
      md="6"
      lg="6">
        <div>
          <h1>
            Dima Naudzuns
          </h1>
          <v-divider class="border-opacity-100" />
          <br>
          <h4>
            Hi! I am a Computer Science student with a focused interest on software engineering and data science. I am currently working on my BS at the University of Buffalo, as well as interning at Linde plc as a Full Stack Software Engineer.
          </h4>
          <br>
          <h4>
            Feel free to check out my <a :href= "`/dima/dmitrijs_resume.pdf`" download class="font-weight-medium text-decoration-underline">resume</a> or some of my stuff below.
            Or you can reach me elsewhere using the links below.
          </h4>
        </div>
      </v-col>
      <v-col
      xs="12" 
      sm="6"
      md="6"
      lg="6"
      >
        <v-img
        :width="300"
        aspect-ratio="2/3"
        :src="`dima.JPG`"
        class="mt-4 d-flex justify-center"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-carousel 
        show-arrows="hover"
        hide-delimiter-background
        delimiter-icon="mdi-square"
        >
        <v-carousel-item>
            <h2>
              LG&E Distribution Dashboard
            </h2>
            <h4>
              Developed a web app which provides KPIs for the Linde distribution proccess for 350 US locations across 500k routes for 2M customer locations.
            </h4>
            <v-img :src="`dashboard.jpg`" class="mt-1" />
          </v-carousel-item> 
          <v-carousel-item>
            <h2>
                Skating Environment Reinforcement Learning
            </h2>
            <h4>
              Implemented a SARSA, Q-Learning, and Double Q-Learning Agent to solve a 4x4 grid world environment to achieve maximum points.
              </h4>
            <v-img :src="`skating.jpg`" class="mt-1"/>
          </v-carousel-item>
          <v-carousel-item>
            <h2>
                8-Puzzle Problem
            </h2>
            <h4>
              Solved the 8-Puzzle Problem with BFS, DFS, Greedy Search, and A* Search to compare runtimes and solutions between Algorithms. 
              </h4>
            <v-img :src="`sliding.jpg`" class="mt-1"/>
          </v-carousel-item>
          <v-carousel-item>
            <h2>
                Multi-Pool Allocator
            </h2>
            <h4>
              Implemented a multi-pool allocator to allocatem memory from the OS capable of running Vim!
              </h4>
            <v-img :src="`malloc.jpg`" class="mt-1"/>
          </v-carousel-item>
          <v-carousel-item>
            <h2>
                Instant Messenger
            </h2>
            <h4>
              Created packet encoding and decoding for a basic instant messaging protocol.
            </h4>
            <v-img :src="`messenger.jpg`" class="mt-1"/>
          </v-carousel-item>
          <v-carousel-item>
            <h2>
              <a href="https://devpost.com/software/quantify-6lxpzo" class="text-decoration-underline">
                UB Hacking Fall 2022 - Quantify
              </a>
            </h2>
            <h4>
              Created a weight-tracking web app that logs user's weights and provides a weighted average and trend chart for more acurate progress tracking.
            </h4>
            <v-img :src="`quantify.jpg`" class="mt-1"/>
          </v-carousel-item>
          <v-carousel-item>
            <h2>
              Conways Game of Life
            </h2>
            <h4>
              Implemented <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" class="text-decoration-underline">Conway's Game of Life</a> to display n generations given a starting state.
            </h4>
            <v-img src="https://i.stack.imgur.com/8U2hN.gif" class="mt-1" />
          </v-carousel-item>
          <v-carousel-item>
            <h2>
              <a href="https://project-part-1--lots0fbees.repl.co/" class="text-decoration-underline">
                Buffalo Police Incidents Data Visualization
              </a>
            </h2>
            <h4>
              CSE115 final project which visualizes the data uploaded by the city of Buffalo.
            </h4>
            <v-img :src="`cse115.jpg`" class="mt-1" />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="d-flex justify-center">
          <v-breadcrumbs :items="items" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
a {
  color: rgb(50, 49, 122);
}
</style>
