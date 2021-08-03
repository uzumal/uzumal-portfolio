<template>
  <div>
    <Header />
    <div class="bg-white w-full h-screen">
      <Title class="mx-auto" />
    </div>
    <Works class="mx-auto mb-8" />
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
      console.log(scroll);
      const header = document.querySelector('header');
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
    },
  },
};
</script>
