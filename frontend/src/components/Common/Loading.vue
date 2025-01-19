<template>
  <el-dialog
    v-model="boxVisible"
    class="LoadingBox"
    :modal="boxVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :align-center="true"
    :show-close="false"
  >
    <div class="message-body">
      <div class="progress"></div>
      <p class="title_loading">loading</p>
    </div>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";

const boxVisible = ref(false);

const show = () => {
  boxVisible.value = false;
};
const close = () => {
  boxVisible.value = false;
};

defineExpose({
  show,
  close,
});
</script>

<style lang="less">
.progress {
  width: 80px;
  height: 10px;
  border-radius: 20px;
  color: #00FF9D;
  border: 2px solid;
  position: relative;
}
.progress::before {
  content: "";
  position: absolute;
  margin: 2px;
  inset: 0 100% 0 0;
  border-radius: inherit;
  background: linear-gradient(45deg, #0ff, #f0f);
  animation: p5 2s infinite;
}
@keyframes p5 {
  100% {
    inset: 0;
  }
}

.title_loading {
  color: #00FF9D;
  margin-top: 20px;
  font-size: 18px;
}

.LoadingBox {
  display: flex;
  width: fit-content !important;
  background-color: transparent !important;
  box-shadow: none!important;
  .el-dialog {
    margin-left: 10px !important;
    margin-right: 10px !important;
    margin-top: auto;
    margin-bottom: auto;
    background: transparent;
    width: 100%;
  }
  .el-dialog__header {
    display: none;
  }
  .el-dialog__body {
    padding: 0px;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    div.testbg {
      display: none !important;
    }
  }
  .message-body {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: auto;
    text-align: center;
    position: relative;
    overflow: auto;
  }
}
</style>
