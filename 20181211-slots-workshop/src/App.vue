<template>
  <div id="app">
    <d-header/>
    <main class="app-content">
      <h1 >Welcome to the workshop!</h1>
    </main>
  </div>
</template>

<script>
import DHeader from '@/components/common/DHeader.vue';
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

.app-content {
  @apply flex flex-col flex-grow justify-center items-center mx-4;
}
</style>
