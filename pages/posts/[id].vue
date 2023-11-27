<template>
  <div>
    <h1>
      {{ news.activeArticle.title }}
    </h1>
    <p class="mb-4">
      {{ news.activeArticle.content }}
    </p>
  </div>
</template>
<script setup>
import { useNewsStore } from '@/state/news';

const route = useRoute();
let post_id = route.params.id;
const news = useNewsStore();
await news.loadActiveArticle(post_id);
useSeoMeta({
  title: news.activeArticle.title,
  description: 'First Nuxt App descr.',
})


</script>