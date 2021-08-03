<template>
  <div class="w-4/5 h-screen">
    <h2>{{ profiles.Profile[0].name }}</h2>
    <p>{{ profiles.Profile[0].career }}</p>
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
