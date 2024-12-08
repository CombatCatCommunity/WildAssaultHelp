<script setup lang="ts">
const { locale, locales } = useI18n();
const { setLocale } = useI18n()
const selectedLocale = ref(locale.value)

interface LocaleDocument {
  title: string;
  description: string;
  faq: FaqEntry[];
}
interface FaqEntry {
  id: string;
  label: string;
  content: string;
}

let { data: content } = await useFetch<LocaleDocument>('/locales/' + selectedLocale.value + '.json');

const searchValue = ref('');
function filterResults() {
  if (searchValue === ref('')) 
    return content.value?.faq;
  else
    return content.value?.faq
      .filter((entry: FaqEntry) =>
       entry.label.toLocaleLowerCase().includes(searchValue.value) ||
       entry.content.toLocaleLowerCase().includes(searchValue.value));
}

const socials = [
  {
    "icon": "i-simple-icons-steam",
    "url": "https://store.steampowered.com/app/2827230/Wild_Assault/"
  },{
    "icon": "i-simple-icons-discord",
    "url": "https://discord.gg/WildAssault"
  },{
    "icon": "i-simple-icons-github",
    "url": "https://github.com/CombatCatCommunity/WildAssaultHelp"
  },{
    "icon": "i-simple-icons-twitter",
    "url": "https://twitter.com/WildAssaultGame"
  },{
    "icon": "i-simple-icons-bluesky",
    "url": "https://bsky.app/profile/wildassault.com"
  },{
    "icon": "i-simple-icons-facebook",
    "url": "https://www.facebook.com/WildAssault"
  },{
    "icon": "i-simple-icons-youtube",
    "url": "https://www.youtube.com/@WildAssault"
  },
]
</script>

<template>
  <UContainer class="h-32">
    <header class="relative flex w-full items-center justify-between px-4 py-4 dark:bg-dark-950">

      <div class="w-auto flex-1 items-center justify-start lg:flex-none">
          <NuxtImg src="" class="h-auto object-contain object-center" loading="lazy" alt="wild-assault-community-logo"
              :placeholder="[50, 25, 75, 5]" />
      </div>

    </header>

    <br/><br/><br/><br/>

    <div class="text-center" >
      <template v-if="content">
        <h1 class="text-5xl font-bold text-gray-900 dark:text-white sm:text-7xl">
          {{ content.title }}
        </h1>
        <div class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">
          {{ content.description }}
        </div>
      </template>
      <div class="mt-12 flex w-full flex-wrap items-center justify-center gap-4">
        <template v-for="social in socials">
          <div class="flex size-auto items-center justify-center p-2">
            <NuxtLink :to="social.url">
              <UIcon
                :name="social.icon"
                class="text-dark-500/50 dark:text-dark-50/20 mx-auto size-10"
              />
            </NuxtLink>
          </div>
        </template>
      </div>
    </div>

    <br/><br/><br/>
    
    <p>{{ searchValue }}</p>
    <UInput 
      v-model="searchValue"
      :trailing="false"
      icon="i-heroicons-magnifying-glass-20-solid"
      color="primary" 
      size="xl"
      variant="none" 
      placeholder="Search Frequently Asked Questions..."
      class="border-b border-gray-200 dark:border-gray-700"/>

    <br/>

    <template v-if="content?.faq">
      <UAccordion variant="ghost" size="xl" :items="filterResults()">
        <template #item="{ item }">
          <p class="py-5 px-10 text-gray-900 dark:text-white text-left">
            <MDC :value="item.content" />
          </p>
        </template>
      </UAccordion>
    </template>

  </UContainer>
</template>
