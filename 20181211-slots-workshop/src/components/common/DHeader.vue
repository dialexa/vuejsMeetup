<template>
  <header class="header">
    <div class="header__main">
      <h2 class="flex-1">ReVuer</h2>
      <input type="text" placeholder="Search"
        class="header__main__search"/>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'DHeader',
  }
</script>

<style lang="postcss">
.header {
  @apply flex justify-center bg-red-dark py-2 px-5 text-white shadow;
}

.header__main {
  @apply flex flex-row flex-grow max-w-app items-center;
}

.header__main__search {
  @apply py-2 px-3 w-64 rounded border-grey border;
}
</style>
