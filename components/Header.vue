<template>
  <header class="w-full h-24 md:h-20 px-16 pt-8 fixed transition-colors" :class="[bg_bool === true ? 'bg-appear' : 'bg-disappear']">
    <div v-if="mobileSize">
      <Hamburger />
    </div>
    <div v-else><Navigation /></div>
  </header>
</template>

<script>
export default {
  props: {
    bg_bool: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      mobileSize: true,
    };
  },
  mounted() {
    this.calculateWindowWidth();
    window.addEventListener('resize', this.calculateWindowWidth);
  },
  methods: {
    calculateWindowWidth() {
      let windowSize = screen.width || window.innerWidth || document.documentElement.clientWidth || 0;
      windowSize >= 800 ? (this.mobileSize = false) : (this.mobileSize = true);
    },
  },
};
</script>
<style scoped>
.bg-appear {
  animation: change-color-app 0.5s ease 0s forwards;
}
.bg-disappear {
  animation: change-color-dis 0.5s ease 0s forwards;
}
@keyframes change-color-app {
  100% {
    background-color: #222835f6;
  }
}
@keyframes change-color-dis {
  0% {
    background-color: #222835f6;
  }
  100% {
    background-color: #22283500;
  }
}
</style>
