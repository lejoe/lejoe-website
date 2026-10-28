<template>
  <nav class="flex items-center justify-center py-24">
    <NuxtLink
      v-if="$route.path !== '/'"
      to="/"
      class="mx-4"
      aria-label="Back to home"
      >Me</NuxtLink
    >
    <a
      href="https://mastodon.social/@lejoe"
      class="mx-4"
      aria-label="Mastodon profile"
      >Mastodon</a
    >
    <a
      href="https://linkedin.com/in/joelbez/"
      class="mx-4"
      aria-label="LinkedIn profile"
      >LinkedIn</a
    >
    <a href="https://github.com/lejoe" class="mx-4" aria-label="Github profile"
      >Github</a
    >
    <a href="https://read.cv/lejoe" class="mx-4" aria-label="CV">CV</a>
  </nav>
</template>
