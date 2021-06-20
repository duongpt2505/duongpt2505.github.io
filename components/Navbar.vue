<template>
  <div>
    <div class="flex flex-row items-center justify-between lg:justify-start text-gray-800 mx-4 md:mx-8 lg:mx-24 xl:mx-32 font-semi-bold uppercase text-xl md:text-2xl lg:text-3xl">
      <img class="h-16 pt-2 lg:h-24" src="../static/hamyen.svg" alt="Logo">
      <div class="hidden lg:flex flex-row hover:cursor-pointer items-center justify-between text-lg mx-10">
        <div class="flex flex-row items-center">
          <img class="w-10 h-10" src="../static/phone.svg" alt="Phone">
          <div class="text-sm text-gray-600">
            0905 242 747
          </div>
        </div>
        <div class="ml-2 flex flex-row items-center">
          <img class="w-10 h-10" src="../static/phone.svg" alt="Phone">
          <div class="text-sm text-gray-600">
            0353 665 850
          </div>
        </div>
      </div>
    </div>
    <nav class="h-12 w-full shadow-sm flex flex-row items-center justify-center lg:justify-center">
      <div class="hidden lg:flex flex-row justify-between text-lg lg:mx-5 xl:mx-10">
        <NuxtLink
          to="/"
          class="lg:px-5 xl:px-10 text-sm text-gray-500 font-bold py-1 border rounded-lg border-transparent hover:text-red-500"
          >Sản phẩm</NuxtLink
        >
        <NuxtLink
          to="/"
          class="lg:px-5 xl:px-10 text-sm text-gray-500 font-bold py-1 border rounded-lg border-transparent hover:text-red-500"
          >Đặt hàng</NuxtLink
        >
        <NuxtLink
          to="/"
          class="lg:px-5 xl:px-10 text-sm text-gray-500 font-bold py-1 border rounded-lg border-transparent hover:text-red-500"
          >Giới thiệu</NuxtLink
        >
        <NuxtLink
          to="/"
          class="lg:px-5 xl:px-10 text-sm text-gray-500 font-bold py-1 border rounded-lg border-transparent hover:text-red-500"
          >Khuyến mãi</NuxtLink
        >
      </div>

      <!-- Mobile starts here -->
      <div class="lg:hidden justify-end mx-6">
        <button @click="openMobileMenu = !openMobileMenu">...</button>
      </div>
      <div
        class="absolute top-12 lg:hidden shadow-md w-full bg-red-50"
        v-if="openMobileMenu"
      >
        <div class="px-4 py-1 hover:bg-red-200">
          <NuxtLink
            to="/"
            class="lg:px-5 xl:px-10 text-sm text-gray-400 font-bold py-1 border rounded-lg border-transparent hover:text-red-500"
            >Sản phẩm</NuxtLink
          >
        </div>
        <div class="px-4 py-1">
          <NuxtLink
            to="/"
            class="lg:px-5 xl:px-10 text-sm text-gray-400 font-bold py-1 border rounded-lg border-transparent hover:text-red-500"
            >Đặt hàng</NuxtLink
          >
        </div>
        <div class="px-4 py-1">
          <NuxtLink
            to="/"
            class="lg:px-5 xl:px-10 text-sm text-gray-400 font-bold py-1 border rounded-lg border-transparent hover:text-red-500"
            >Giới thiệu</NuxtLink
          >
        </div>
        <div class="px-4 py-1">
          <NuxtLink
            to="/"
            class="lg:px-5 xl:px-10 text-sm text-gray-400 font-bold py-1 border rounded-lg border-transparent hover:text-red-500"
            >Khuyến mãi</NuxtLink
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      openMobileMenu: false
    };
  }
};
</script>
