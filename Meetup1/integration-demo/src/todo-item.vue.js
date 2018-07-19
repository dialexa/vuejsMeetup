Vue.component('v-todo-item', {
  template: `
    <div class="todo-item"">
      <input type="checkbox" :checked="todo.completed" class="todo-item__checkbox" @change="complete"/>
      <div class="todo-item__text">{{todo.text}}</div>
      <div class="todo-item__actions">
        <!--<button class="btn-transparent" @click="edit">Edit</button>-->
        <button class="btn-transparent" @click="remove">Remove</button>
      </div>
    </div>
  `,

  props: {
    todo: Object,
  },

  methods: {
    remove() {
      this.$emit('remove', this.todo);
    },
    complete(e) {
      this.$emit('complete', this.todo);
    },
  },
});
