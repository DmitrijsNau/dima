<template>
  <div>
    <h1>Dima Naudzuns</h1>
    <v-divider class="border-opacity-100" />
    <br />
    <h4>
      Hi! I am a Computer Science student with a focused interest on software
      engineering and data science. Feel free to check out my
      <a
        :href="`/dima/dmitri_naudzuns_resume.pdf`"
        download
        class="font-weight-medium text-decoration-underline"
        >resume</a
      >
      or some of my stuff. Or you can reach me elsewhere using the links below.
    </h4>
  </div>
</template>

<script>
export default {
  name: "IntroCol",
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "Projects",
          disabled: false,
          href: "/projects",
        },
        {
          text: "Contact",
          disabled: false,
          href: "/contact",
        },
      ],
    };
  },
};
</script>
