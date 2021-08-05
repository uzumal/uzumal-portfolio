<template>
  <section class="w-full h-screen bg-primary">
    <div class="py-8 mx-auto">
      <h2 class="text-center text-4xl text-black py-16">Profile</h2>
      <section class="w-full md:3/4 mx-auto">
        <h3 class="font-extrabold">Background</h3>
        <p>{{ profiles.Profile[0].career1 }}</p>
        <p>{{ profiles.Profile[0].career2 }}</p>
        <p>{{ profiles.Profile[0].career3 }}</p>
        <h3 class="font-extrabold">Educations</h3>
        <ul>
          <li>2014~17: "Fukui Prefectural <a href="https://www.koshi-h.ed.jp/"> Koshi High School</a>", "Infantry course"</li>
          <li>
            2017~21: <a href="https://se.doshisha.ac.jp/">Doshisha University</a>, College of Science and Technology Department of Information Systems
            Design
          </li>
          <li>
            2021~23: <a href="https://se.doshisha.ac.jp/">Doshisha University</a>, Graduate School of Science and Engineering, Department of Computer
            Science and Engineering
          </li>
        </ul>
      </section>
    </div>
  </section>
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
<style scoped>
h3 {
  padding-top: 16px;
}
</style>
