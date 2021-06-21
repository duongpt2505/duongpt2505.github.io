<template>
  <div>
    <div class="w-5/12 mx-auto my-12" v-if="error.statusCode === 404">
        <img src="../static/404.svg" alt="Page not found">
    </div>
    <h1 v-else>An error occurred</h1>
    <div class="mx-auto">
        <NuxtLink to="/">
            <button class="my-24 bg-red-500 rounded-lg w-36 h-8 text-sm text-red-100">
                Quay về trang chính
            </button>
        </NuxtLink>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>