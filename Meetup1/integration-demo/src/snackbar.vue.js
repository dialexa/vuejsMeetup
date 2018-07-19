new Vue({
  el: '#vue-snackbar',

  data: {
    queue: [],
    id: 0,
  },

  mounted() {
    $bus.$on('snackbar:add', this.add);
  },

  methods: {
    add(text, ms = 4000) {
      const snackbarItem = { text, id: this.id++, ms };
      this.queue.push(snackbarItem);
    },

    remove(itemToRemove) {
      this.queue = this.queue.filter(item => item.id !== itemToRemove.id);
    },
  },
});
