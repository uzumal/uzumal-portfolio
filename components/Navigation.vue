<template>
  <section class="h-full">
    <div class="flex justify-between items-center text-sm">
      <a href="#" class="text-primary hover:text-accent transition-late">home</a>
      <ul class="flex">
        <li class="mr-6">
          <a href="#title" class="text-primary hover:text-accent transition-late">dashboard</a>
        </li>
        <li class="mr-6">
          <a href="#works" class="text-primary hover:text-accent transition-late">notifications</a>
        </li>
        <li class="mr-6">
          <a href="#profile" class="text-primary hover:text-accent transition-late">system administration</a>
        </li>
        <li class="mr-6">
          <a href="#" class="text-primary hover:text-accent transition-late">support</a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
.transition-late {
  transition: all 0.5s ease-out;
}
</style>
