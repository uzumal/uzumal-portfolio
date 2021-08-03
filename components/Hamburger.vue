<template>
  <div>
    <content>
      <input id="hamburger" class="hamburger" type="checkbox" />
      <label class="hamburger" for="hamburger">
        <i></i>
        <text>
          <close>close</close>
          <open>menu</open>
        </text>
      </label>
      <section class="drawer-list">
        <ul>
          <li><a href="#">dashboard</a></li>
          <li><a href="#">notifications</a></li>
          <li><a href="#">system administration</a></li>
          <li><a href="#">support</a></li>
        </ul>
      </section>
    </content>
  </div>
</template>

<script>
import '@/assets/css/hamburger.css';
export default {};
</script>
