<template>
  <svg class="icon" :width="sizePx" :height="sizePx" viewBox="0 0 24 24" :fill="color">
    <path :d="path"></path>
  </svg>
</template>

<script>
  import ICONS from '@/icons';

  export default {
    name: 'DIcon',

    props: {
      name: {
        type: String,
        required: true,
        validator: (value) => {
          return Boolean(ICONS[value]);
        }
      },
      color: {
        type: String,
        default: '#000000'
      },
      size: {
        type: Number,
        default: 24
      }
    },

    computed: {
      sizePx() {
        return `${this.size}px`;
      },
      path() {
        return ICONS[this.name];
      }
    }
  }
</script>