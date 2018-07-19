const TodoVue = new Vue({
  el: '#vue-todos',

  data: {
    text: '',
    todos: todoService.getTodos(),
  },

  // watch: {
  //   todos() {
  //     // todoService.saveTodos();
  //   },
  // },

  methods: {
    submit() {
      if (!this.text.trim()) return;

      const todo = createTodo(this.text.trim());
      this.todos.push(todo);
    },
  },
});

function createTodo(text, completed = false) {
  return {
    text,
    completed,
    id: guid(),
  };
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
}
