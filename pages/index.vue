<template>
  <div class="w-full">
    <Header />
    <Title />
    <Works />
    <Profile />
    <ReturnTopButton :button-active="buttonActive" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAppear: false,
      buttonActive: false,
    };
  },
  link: [
    {
      rel: 'stylesheet',
      href: '~/assets/css/hamburger.css',
    },
  ],
  mounted() {
    this.scrollWindow();
    window.addEventListener('scroll', this.scrollWindow);
  },
  methods: {
    scrollWindow() {
      const scroll = window.scrollY;
      const top = 100;
      const header = document.querySelector('header');
      // header処理
      if (scroll >= 300) {
        header.classList.remove('bg-disappear');
        header.classList.add('bg-appear');
        this.isAppear = true;
      } else {
        if (this.isAppear) {
          header.classList.add('bg-disappear');
        }
        header.classList.remove('bg-appear');
        this.isAppear = false;
      }
      // topへ戻る処理
      if (top <= scroll) {
        this.buttonActive = true;
      } else {
        this.buttonActive = false;
      }
    },
  },
};
</script>
<style scoped>
.h-title {
  height: 40vh;
}
</style>
