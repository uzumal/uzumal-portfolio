<template>
  <div>
    <Header :bg_bool="bg_bool" />
    <div class="bg-white w-full h-screen">
      <Title class="mx-auto" />
    </div>
    <div>
      <Works class="mx-auto" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bg_bool: true,
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
      // const scroll = window.scrollY;
      // scroll >= 300 ? (this.bg_bool = true) : (this.bg_bool = false);
      // console.log(this.bg_bool);
      const header = document.querySelector('header');
      header.classList.toggle('scroll-nav', window.scrollY > 0);
    },
  },
};
</script>
