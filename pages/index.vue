<template>
  <div class="bg-red-50">
    <!-- Content -->

    <div class="grid grid-cols-7 gap-2 px-10 py-20">
      <div class="flex justify-end col-span-2">
        <img class="w-3/5 h-4/5" src="../static/image-male.svg" />
      </div>
      <div class="flex justify-end col-span-2">
        <img class="w-4/5 h-4/5" src="../static/camera.svg" />
      </div>
      <div class="col-span-3 flex flex-col space-y-6 justify-center pl-24">
        <div class="w-10/12">
          <span class="text-gray-800 font-bold text-4xl"
            >Lưu giữ những khoảnh khắc quý giá của bạn</span
          >
        </div>
        <div>
          <span>Cam kết chất lượng ảnh hàng đầu</span>
        </div>
        <button
          class="my-24 bg-red-500 rounded-md w-28 h-8 text-sm text-red-100"
        >
          Tải file ngay
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
