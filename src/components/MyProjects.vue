<template>
  <v-card>
    <v-carousel
      show-arrows="hover"
      hide-delimiter-background
      delimiter-icon="mdi-square"
    >
      <v-carousel-item>
        <h2>LG&E Distribution Dashboard</h2>
        <h4>
          Developed a web app which provides KPIs for the Linde distribution
          proccess for 350 US locations across 500k routes for 2M customer
          locations.
        </h4>
        <v-img :src="`dashboard.jpg`" class="mt-1" />
      </v-carousel-item>
      <v-carousel-item>
        <h2>Skating Environment Reinforcement Learning</h2>
        <h4>
          Implemented a SARSA, Q-Learning, and Double Q-Learning Agent to solve
          a 4x4 grid world environment to achieve maximum points.
        </h4>
        <v-img :src="`skating.jpg`" class="mt-1" />
      </v-carousel-item>
      <v-carousel-item>
        <h2>8-Puzzle Problem</h2>
        <h4>
          Solved the 8-Puzzle Problem with BFS, DFS, Greedy Search, and A*
          Search to compare runtimes and solutions between Algorithms.
        </h4>
        <v-img :src="`sliding.jpg`" class="mt-1" />
      </v-carousel-item>
      <v-carousel-item>
        <h2>Multi-Pool Allocator</h2>
        <h4>
          Implemented a multi-pool allocator to allocatem memory from the OS
          capable of running Vim!
        </h4>
        <v-img :src="`malloc.jpg`" class="mt-1" />
      </v-carousel-item>
      <v-carousel-item>
        <h2>Instant Messenger</h2>
        <h4>
          Created packet encoding and decoding for a basic instant messaging
          protocol.
        </h4>
        <v-img :src="`messenger.jpg`" class="mt-1" />
      </v-carousel-item>
      <v-carousel-item>
        <h2>
          <a
            href="https://devpost.com/software/quantify-6lxpzo"
            class="text-decoration-underline"
          >
            UB Hacking Fall 2022 - Quantify
          </a>
        </h2>
        <h4>
          Created a weight-tracking web app that logs user's weights and
          provides a weighted average and trend chart for more acurate progress
          tracking.
        </h4>
        <v-img :src="`quantify.jpg`" class="mt-1" />
      </v-carousel-item>
      <v-carousel-item>
        <h2>Conways Game of Life</h2>
        <h4>
          Implemented
          <a
            href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
            class="text-decoration-underline"
            >Conway's Game of Life</a
          >
          to display n generations given a starting state.
        </h4>
        <v-img src="https://i.stack.imgur.com/8U2hN.gif" class="mt-1" />
      </v-carousel-item>
      <v-carousel-item>
        <h2>
          <a
            href="https://project-part-1--lots0fbees.repl.co/"
            class="text-decoration-underline"
          >
            Buffalo Police Incidents Data Visualization
          </a>
        </h2>
        <h4>
          CSE115 final project which visualizes the data uploaded by the city of
          Buffalo.
        </h4>
        <v-img :src="`cse115.jpg`" class="mt-1" />
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>
