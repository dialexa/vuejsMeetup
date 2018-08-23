const todoService = (function() {
  function getTodos() {
    let todos;
    try {
      todos = JSON.parse(localStorage.getItem('todos')) || [];
    } catch (err) {
      todos = [];
    }

    return todos;
  }

  function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function saveTodo(todo) {
    const oldTodos = getTodos();
    const updatedTodos = [...oldTodos, todo];

    saveTodos(updatedTodos);
  }

  function deleteTodo(todo) {
    const oldTodos = getTodos();
    const updatedTodos = oldTodos.filter(oldTodo => oldTodo.id !== todo.id);

    saveTodos(updatedTodos);
  }

  /**
   * Update a todo item by id
   * @param {number} id
   * @param {Object} updates
   */
  function update(updatedTodo) {
    const oldTodos = getTodos();
    const updatedTodos = oldTodos.map(
      todo => (todo.id === updatedTodo.id ? updatedTodo : todo),
    );

    saveTodos(updatedTodos);
  }

  return { getTodos, saveTodos, saveTodo, deleteTodo, update };
})();
