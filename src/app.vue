<script setup lang="ts">

const social = {
  steamUrl: "https://store.steampowered.com/app/2827230/Wild_Assault/",
  discordUrl: "https://discord.gg/WildAssault",
  youtubeUrl: "https://www.youtube.com/@WildAssault",
  twitterUrl: "https://twitter.com/WildAssaultGame",
  bskyUrl: "https://bsky.app/profile/wildassault.com",
  facebookUrl: "https://www.facebook.com/WildAssault"
}

</script>

<template>
  <UContainer class="h-32">
    <AppHeader />

    <br/><br/><br/><br/>

    <div class="text-center">
      <h1 class="text-5xl font-bold text-gray-900 dark:text-white sm:text-7xl">
        Wild Assault FAQ
      </h1>
      <div class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">
        The wild assault frequently asked questions site
      </div>
    </div>

    <br/><br/><br/>
    <FaqDisplay />
  </UContainer>
</template>
