Vue.component('v-snackbar-item', {
  template: `<div class="app-snackbar app-snackbar--show">{{item.text}}</div>`,
  props: {
    item: Object,
  },
  mounted() {
    setTimeout(() => this.$emit('remove', this.item), this.item.ms);
  },
});
