<template>
  <div class="w-4/5 h-screen py-8">
    <h2 class="text-center text-4xl text-accent py-16">Profile</h2>
    <section class="w-2/5 mx-auto">
      <h3 class="font-extrabold">Background</h3>
      <p>{{ profiles.Profile[0].career1 }}</p>
      <br />
      <p>{{ profiles.Profile[0].career2 }}</p>
    </section>
    <ul>
      <li v-for="user in profiles.Educations" :key="user.id">{{ user.school }} - {{ user.details }}</li>
    </ul>
  </div>
</template>

<script>
import profiles from '~/assets/data.json';
export default {
  data() {
    return {
      profiles,
    };
  },
};
</script>
