<template>
  <div>
    <Header />
    <div class="bg-white w-full h-screen">
      <Title class="mx-auto" />
    </div>
    <div>
      <Works class="mx-auto mb-8" />
    </div>
    <Profile class="mx-auto" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAppear: false,
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
      const header = document.querySelector('header');
      if (scroll >= 300) {
        if (this.isAppear === false) header.classList.toggle('bg-disappear');
        header.classList.toggle('bg-appear', scroll >= 300);
        this.isAppear = true;
      } else {
        if (this.isAppear) {
          header.classList.toggle('bg-disappear');
          this.isAppear = false;
        }
      }
    },
  },
};
</script>
