<template>
  <div class="py-5">
<!--    <div class="scrolling-container">
      <div class="scrolling-content">
        <div v-for="(item, index) in webList" :key="index" class="scroll-item  !text-[14px] !mb-0 ">
          <span class="!text-green">[{{ showDate(item.createdAt) }}]</span>
          <span class="font-bold">&nbsp;&nbsp;{{ item.data.title }}</span>
        </div>

        <div v-for="(item, index) in webList" :key="'duplicate-' + index" class="scroll-item !text-[14px] !mb-0">
          <span class="!text-green">[{{ showDate(item.createdAt) }}]</span>
          <span class="font-bold">&nbsp;&nbsp;{{ item.data.title }}</span>
        </div>
      </div>
    </div>-->
    <nav class="flex justify-start items-center p-6 pt-0  text-black">

      <div class="flex items-center gap-2" @click="toHome">
        <img src="../assets/image/logo.png" alt="logo" class="w-10 rounded-full">
        <span class="font-bold text-xl">DeusGen AI</span>
      </div>
      <div class="flex items-center space-x-4 ml-20 cursor-pointer" @click="toWorlkList">
        <a class="text-sm text-[#6B6B64] hover:text-black flex gap-2">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Agent Creations Vault</a>
        <a href="#" class="text-sm text-[#6B6B64] hover:text-black flex gap-2">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.29 2.747-1.022 2.747-1.022.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
          </svg>
          Github</a>
        <a href="#" class="text-sm text-[#6B6B64] hover:text-black flex gap-2">
          <img class="h-5" src="../assets/image/pump.png">
          Pump.fun</a>

      </div>
      <button @click="toHome" class="ml-auto  font-bold px-5 py-2 bg-white text-black rounded-lg ">
        Home
      </button>
    </nav>
  </div>
</template>


<script setup>
import router from "@/router/index.js";
import {onMounted, ref} from "vue";
import {api_webList} from "@/api/account.js";
import {showDate} from "../utils/filters.js";

const webList = ref([])

const toWorlkList = () => {
  router.push("/workList")
}
const toHome = () => {
  router.push("/")
}
onMounted(() => {

  api_webList({
    page: 1,
    pageSize: 6
  }).then(res => {

    if (res.success == true) {
      webList.value = res.data.result
      console.log(webList.value)
    }
  })
});
</script>
<style scoped>
.scrolling-container {
  width: 100%;
  overflow: hidden;
  padding: 5px 0;
  position: relative;
  color: #00FF00;
}

.scrolling-content {
  display: flex;
  white-space: nowrap;
  animation: scrollText 55s linear infinite;
}

.scroll-item {
  margin-right: 50px; /* Adjust the spacing between items */
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
}

@keyframes scrollText {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>