<template>
  <div class="w-4/5 h-screen py-8">
    <h2 class="text-center text-4xl text-accent py-16">Works</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-8 auto-rows-auto justify-items-center">
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
