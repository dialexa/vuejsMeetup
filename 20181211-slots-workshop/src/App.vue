<template>
  <div id="app">
    <d-header/>
    <h1 class="m-3">Welcome to the workshop!</h1>
  </div>
</template>

<script>
import DHeader from '@/components/common/DHeader.vue';
import { reviews } from '@/data.js';
import { mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    DHeader,
  },
  data() {
    return {
      loading: true,
    }
  },
  methods: {
    ...mapActions([
      'loadData',
    ]),
  },
  created() {
    this.loadData().then(() => {
      this.loading = false;
    });
  }
}
</script>

<style lang="postcss">
@tailwind preflight;
@tailwind components;
@tailwind utilities;

* {
  font-family: 'Noto Sans JP', sans-serif;
}

#app {
  @apply bg-grey-lighter min-h-screen flex flex-col;
}

.main {
  @apply flex flex-col flex-grow justify-center items-center mx-4;
}
</style>
