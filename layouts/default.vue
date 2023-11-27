<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NuxtLink class="nav-link" active-class="active" to="/">Home</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/about">About</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <slot />
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p class="col-md-4 mb-0 text-muted">© 2021 Company Factor, Inc</p>
      <p>Your ip: {{ news.current_ip }}</p>
    </footer>
  </div>
</template>
<script setup>
  import { useNewsStore } from '@/state/news'
  const news = useNewsStore();
  await news.getCurrentIp();
</script>