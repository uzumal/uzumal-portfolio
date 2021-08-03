<template>
  <div class="w-4/5 h-screen py-8">
    <h2 class="text-accent">Works</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-y-2 md:gap-y-4 justify-items-center">
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
        { id: 7, name: 'HTML' },
        { id: 8, name: 'HTML' },
        { id: 9, name: 'HTML' },
      ],
    };
  },
};
</script>
