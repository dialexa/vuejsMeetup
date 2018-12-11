<template>
  <div class="flex items-center font-bold text-grey-darkest">
    <div class="bg-red-lighter p-2 mr-2 rounded" :style="style">
      {{starCount}} Stars
    </div>
    {{reviewCount}}
  </div>
</template>

<script>
  export default {
    name: 'DReviewCount',
    props: {
      starCount: {
        type: Number,
        required: true,
      },
      reviewCount: {
        type: Number,
        required: true,
      },
      totalReviews: {
        type: Number,
        required: true,
      }
    },
    computed: {
      style() {
        return {
          width: `${this.reviewCount/this.totalReviews * 70 + 20}%`
        };
      }
    }
  }
</script>