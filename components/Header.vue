<template>
  <div>
    <div v-if="mobileSize">
      <Hamburger />
    </div>
    <div v-else><Navigation /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileSize: true,
    };
  },
  mounted() {
    window.addEventListener('resize', this.calculateWindowWidth);
  },
  methods: {
    calculateWindowWidth() {
      let windowSize = screen.width || window.innerWidth || document.documentElement.clientWidth || 0;
      console.log('hello' + windowSize);
      windowSize >= 800 ? (this.mobileSize = false) : (this.mobileSize = true);
    },
  },
};
</script>
