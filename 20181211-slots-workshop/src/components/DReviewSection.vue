<template>
  <div class="pb-4">
    Reviews
  </div>
</template>

<script>
  export default {
    name: 'DReviewSection',
  }
</script>

<style lang="postcss">
.review-card {
  @apply p-4 mb-4 bg-white rounded shadow border;
  transition: box-shadow .2s ease-out;
}

.review-card:hover {
  @apply shadow-md;
}

.review-card__avatar {
  @apply block h-16 w-16 rounded-full mb-4 mr-4;
}

.review-card__header {
  @apply flex pb-2 items-center flex-wrap;
}

.review-card__body {
  @apply leading-normal;
}
</style>
