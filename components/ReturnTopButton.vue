<template>
  <div class="absolute bottom-0 right-4">
    <transition name="button">
      <button v-show="buttonActive" @click="returnTop">Topへ戻る</button>
    </transition>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    buttonActive: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>
<style scoped>
.button-enter-active,
.button-leave-active {
  transition: opacity 0.5s;
}
.button-enter,
.button-leave-to {
  opacity: 0;
}
</style>
