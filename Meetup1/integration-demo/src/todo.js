(function($) {
  const $todoRoot = $('.js-todos');
  const $todoContent = $todoRoot.find('.js-todos-content');
  const $todoForm = $todoRoot.find('#add-todo');
  const $todoInput = $todoRoot.find('[name="add-todo-text"]');
  const todos = localStorage.getItem('todos');

  function addTodo(e) {
    e.preventDefault();
    const value = $todoInput.val().trim();

    if (value) {
      const newTodo = `<div class="todo-item">${value}</div>`;
      $todoContent.append(newTodo);
      $todoInput.val('');
    }
  }

  function removeTodo() {}

  function addEvents(todoRoot) {
    $todoForm.on('submit', addTodo);
  }

  function initTodos() {
    addEvents($todoRoot);
  }

  initTodos();
})(jQuery);
