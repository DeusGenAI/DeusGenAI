<template>
  <div class=" h-screen w-full  text-black ">
      <Navbar class=" w-full fixed top-0 left-0"/>
      <RouterView class=" w-full "/>
    <Loading ref="LoadingBox" />
  </div>
</template>

<script setup>
import Loading from '@/components/Common/Loading.vue';
import Navbar from './components/Navbar.vue';
import ThreeBackground from "./components/ThreeBackground.vue";
import {onMounted, ref} from "vue";
import {eventBus} from "@/assets/js/bus.js";
const LoadingBox = ref(null)
onMounted(() => {

  eventBus.on('showLoadingBox', async (msg) => {
    if (LoadingBox.value) {
      LoadingBox.value.show();
    }
  });
  eventBus.on('hideLoadingBox', async (msg) => {
    if (LoadingBox.value) {
      LoadingBox.value.close();
    }
  });
})
</script>

<style>
@import "@/assets/css/common.less";
@import "@/assets/css/tailwind.css";

@keyframes line-background {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}

.animate-line-background {
  animation: line-background 5s linear infinite;
  background-size: 200% 200%;
  background-image: linear-gradient(45deg, #00f, #ff00ff);
}
</style>
