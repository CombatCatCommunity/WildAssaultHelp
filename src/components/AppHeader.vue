<script setup lang="ts">

</script>

<template>
    <header class="relative flex w-full items-center justify-between px-4 py-4 dark:bg-dark-950">

        <div class="w-auto flex-1 items-center justify-start lg:flex-none">
            <NuxtImg src="" class="h-auto object-contain object-center" loading="lazy" alt="wild-assault-community-logo"
                :placeholder="[50, 25, 75, 5]" />
        </div>

        <div class="flex flex-1 items-center justify-end gap-4 lg:flex-none">
            <UButton variant="ghost" size="lg" to="#" class="rounded-full">
                <UIcon name="i-material-symbols-light:language" class="w-5 h-5" />
                English
            </UButton>
        </div>
    </header>
</template>