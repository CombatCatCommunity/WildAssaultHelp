<script setup lang="ts">

const tempFaq = [{
  label: 'Some question?',
  icon: 'i-heroicons-eye-dropper',
  content: 'Some answer'
},{
  label: 'Some other question?',
  icon: 'i-heroicons-eye-dropper',
  content: 'Some answer'
},{
  label: 'Yet another question?',
  icon: 'i-heroicons-eye-dropper',
  content: 'Some answer'
},{
  label: 'Please stop asking question?',
  icon: 'i-heroicons-eye-dropper',
  content: 'Some answer'
},]

</script>

<template>
    <UInput 
      :trailing="false"
      icon="i-heroicons-magnifying-glass-20-solid"
      color="primary" 
      size="xl"
      variant="none" 
      placeholder="Search Frequently Asked Questions..."
      class="border-b border-gray-200 dark:border-gray-700"/>

    <br/>

    <UAccordion :items="tempFaq" :ui="{ wrapper: 'flex flex-col w-full' }">
    <template #default="{ item, index, open }">
      <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-700" :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
        <template #leading>
          <div class="w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1">
            <UIcon :name="item.icon" class="w-4 h-4 text-white dark:text-gray-900" />
          </div>
        </template>

        <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

        <template #trailing>
          <UIcon
            name="i-heroicons-chevron-right-20-solid"
            class="w-5 h-5 ms-auto transform transition-transform duration-200"
            :class="[open && 'rotate-90']"/>
        </template>
      </UButton>
    </template>
  </UAccordion>
</template>