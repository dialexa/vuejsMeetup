<template>
  <div class="images">
    <img v-for="image in images" :key="image" :src="image" class="app-image">
  </div>
</template>

<script>
export default {
  name: 'DImages',
  data() {
    return {
      images: [
        '/logo.png',
        '/food.jpg',
        '/table.jpg',
      ],
    };
  }
}
</script>

<style lang="postcss">
  .images {
    @apply flex flex-wrap justify-center py-5;
  }

  .app-image {
    transition: transform .2s, box-shadow .2s;
    max-width: 200px;
    max-height: 200px;
    height: auto;
    width: auto;
    margin: .25em;
    @apply bg-white rounded shadow app-image;
  }
  .app-image:hover {
    transform: scale(1.1);
    @apply shadow-lg;
  }
</style>
