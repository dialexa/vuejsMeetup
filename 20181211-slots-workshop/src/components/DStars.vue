<template>
  <div class="stars">
    <d-icon
      name="star"
      :class="{'highlight': highlight}"
      v-for="n in 5"
      :color="n <= value ? highlight ? 'red' : 'black' : 'grey'"
      :key="n"
      @click.native="$emit('input', n)"/>
  </div>
</template>

<script>
  import DIcon from '@/components/common/DIcon.vue';

  export default {
    name: 'DStars',
    props: {
      value: Number,
      highlight: Boolean,
    },
    components: {
      DIcon,
    },
    methods: {

    }
  }
</script>


<style lang="postcss" scoped>
  .stars {
    @apply flex;
  }

  /* prev siblings should be red */
  .stars:hover .highlight {
    @apply cursor-pointer fill-red;
  }
  /* .stars .highlight:hover, */
  .stars .highlight:hover ~ .highlight {
    fill: grey;
  }
</style>
