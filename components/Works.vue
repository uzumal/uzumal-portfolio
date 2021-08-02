<template>
  <div class="grid grid-cols-3">
    <section v-for="language in languages" :key="language.id">
      <Card />
    </section>
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
      ],
    };
  },
};
</script>
