<template>
  <v-item-group
    v-model="selectedItem"
    class="full-container ml-4"
    selected-class="selected-line"
    mandatory
  >
    <v-row>
      <v-col class="selection">
        <v-item v-slot="{ isSelected, selectedClass, toggle }">
          <div
            :class="['line-container', selectedClass, { selected: isSelected }]"
            @click="handleClick('about', toggle)"
          >
            <div class="line"></div>
            <div class="text">
              {{ "About" }}
            </div>
          </div>
        </v-item>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="selection">
        <v-item v-slot="{ isSelected, selectedClass, toggle }">
          <div
            :class="['line-container', selectedClass, { selected: isSelected }]"
            @click="handleClick('experience', toggle)"
          >
            <div class="line"></div>
            <div class="text">
              {{ "Experience" }}
            </div>
          </div>
        </v-item>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="selection">
        <v-item v-slot="{ isSelected, selectedClass, toggle }">
          <div
            :class="['line-container', selectedClass, { selected: isSelected }]"
            @click="handleClick('projects', toggle)"
          >
            <div class="line"></div>
            <div class="text">
              {{ "Projects" }}
            </div>
          </div>
        </v-item>
      </v-col>
    </v-row>
  </v-item-group>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: 0,
    };
  },
  methods: {
    handleClick(sectionId, toggle) {
      this.scrollToSection(sectionId);
      toggle();
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "experience") {
            this.selectedItem = 0;
          } else if (entry.target.id === "projects") {
            this.selectedItem = 1;
          }
        }
      });
    },
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);

    const sections = document.querySelectorAll(".scroll-section");
    sections.forEach((section) => {
      observer.observe(section);
    });
  },
};
</script>

<style scoped>
.full-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.selection {
  flex: 1;
}

.line-container {
  display: flex;
  align-items: center;
  transition: width 0.3s ease;
  width: 100%; /* Fill the parent container */
}

.line-container.selected,
.line-container:hover {
  width: 100%; /* Ensure selected and hovered items also fill the parent container */
}

.line {
  width: 1.4rem; /* Fixed width for the line */
  height: 2px;
  background-color: #ff4c29;
  transition: flex-grow 0.3s ease; /* Add transition for flex-grow */
}

.line-container.selected .line,
.line-container:hover .line {
  flex-grow: 1; /* Grow the line when selected or hovered */
}

.text {
  flex-grow: 1; /* Allow text to take up remaining space */
  margin-left: 10px;
  font-size: 1.2rem; /* Increase the font size */
}

.line-container:not(.selected) .text {
  color: #5a7991; /* Color for non-selected text */
}

.line-container:hover .text {
  color: #ffff; /* Color for hovered text */
}
</style>
