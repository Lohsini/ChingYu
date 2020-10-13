<template>
  <div class="about">
    <h1>This is an about page</h1>
    <navbar />
    <footer />
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
import footer from '@/components/footer.vue';

export default {
  component: {
    navbar,
    footer,
  },
};
</script>
