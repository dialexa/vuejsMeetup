const TodoVue = new Vue({
  el: '#vue-todos',

  data: {
    text: '',
    todos: todoService.getTodos(),
  },

  watch: {
    todos() {
      todoService.saveTodos(this.todos);
    },
  },

  methods: {
    submit() {
      if (!this.text.trim()) return;

      const todo = createTodo(this.text.trim());
      this.todos.push(todo);
      this.text = '';
      snackbar.add('Successfully Added Todo');
    },

    remove(todoToRemove) {
      this.todos = this.todos.filter(todo => todo.id !== todoToRemove.id);
    },

    complete(todoToChangeCompletedStatus) {
      this.todos = this.todos.map(
        todo =>
          todo.id === todoToChangeCompletedStatus.id
            ? { ...todo, completed: !todo.completed }
            : todo,
      );
    },
  },
});

const createTodo = (text, completed = false) => ({
  text,
  completed,
  id: guid(),
});

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
