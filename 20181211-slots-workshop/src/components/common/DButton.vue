<template>
  <div>Button</div>
</template>

<script>
  const styles = ['primary', 'link'];

  export default {
    name: 'DButton',
  }
</script>

<style lang="postcss">
.primary {
  @apply bg-red-dark text-white rounded p-2;
}

.link {
  @apply text-grey-dark ml-3 cursor-pointer;
}

.link:hover {
  @apply underline;
}
</style>
