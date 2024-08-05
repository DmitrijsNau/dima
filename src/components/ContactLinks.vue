<template>
  <v-btn
    v-for="icon in icons"
    :key="icon.title"
    :icon="icon.icon"
    variant="text"
    :href="icon.href"
  ></v-btn>
</template>
<script>
export default {
  name: "ContactLinks",

  data: () => ({
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
