<template>
  <div class="main">
    <h1>Welcome to the homepage</h1>
    <AppAlert>
      Alert Component part
    </AppAlert>
    <div>
      <div class="row">
        <div class="col-12">
          <ul class="list-group list-group-horizontal">
            <template v-for="item in news.allCategories" :key="item.id">
              <li class="list-group-item"><button @click="news.loadArticles(item.slug)">{{ item.title }}</button></li>
            </template>
          </ul>
        </div>
        <div class="col">
          <ul class="list-group">
            <template v-for="item in news.allArticles" :key="item.id">
              <li class="list-group-item">
                <NuxtLink :to="{ path: '/posts/' + item.id}">
                  {{ item.title }}
                </NuxtLink>
              </li>
            </template>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
  import { useNewsStore } from '@/state/news'
  useSeoMeta({
    title: 'First Nuxt App',
    description: 'First Nuxt App descr.',
  })

  const news = useNewsStore();
  await news.loadCategories();
  await news.loadArticles('');
  //const categories = news.allCategories;
</script>
