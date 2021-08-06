<template>
  <div id="works" class="w-full h-screen py-8 bg-white">
    <h2 class="text-center text-horizon text-4xl font-semibold text-black py-16">Works</h2>
    <div class="w-4/6 h-4/5 grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-8 auto-rows-auto mx-auto justify-items-center">
      <section v-for="language in languages" :key="language.id">
        <Card />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      languages: [
        { id: 1, name: 'Ruby' },
        { id: 2, name: 'Java' },
        { id: 3, name: 'PHP' },
        { id: 4, name: 'Javascript' },
        { id: 5, name: 'HTML' },
        { id: 6, name: 'HTML' },
      ],
    };
  },
};
</script>
<style scoped>
.bg-w {
  background-color: #4f5b5c;
}
.text-horizon {
  letter-spacing: 0.55em;
}
</style>
