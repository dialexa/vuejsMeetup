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

const todoModule = (function($, snackbar, todoService) {
  const $todoRoot = $('.js-todos');
  const $todoContent = $todoRoot.find('.js-todos-content');
  const $todoForm = $todoRoot.find('#add-todo');
  const $todoInput = $todoRoot.find('[name="add-todo-text"]');
  const todos = todoService.getTodos();

  function createTodo(value) {
    return {
      text: value,
      complete: false,
      id: guid(),
    };
  }

  function appendTodo(todo) {
    const { text, complete, id } = todo;

    const $newTodo = $(`
      <div class="todo-item" data-id="${id}">
        <input type="checkbox" ${
          complete ? 'checked' : ''
        } class="js-todo-mark-complete todo-item__checkbox"/>
        <div class="todo-item__text">${text}</div>
        <div class="todo-item__actions">
          <button class="js-todo-item-edit btn-transparent">Edit</button>
          <button class="js-todo-item-remove btn-transparent">Remove</button>
        </div>
      </div>
    `);

    const $removeButton = $newTodo.find('.js-todo-item-remove');
    const $markCompleteButton = $newTodo.find('.js-todo-mark-complete');
    $markCompleteButton.on('change', updateTodoStatus);
    $removeButton.on('click', removeTodo);
    $todoContent.append($newTodo);
  }

  function updateTodoStatus(e) {
    const $todo = $(this).closest('.todo-item');
    const todoId = $todo.data('id');
    const todoToUpdate = todos.find(todo => todo.id === todoId);
    todoToUpdate.complete = e.target.checked;

    todoService.update(todoToUpdate);
  }

  function removeTodo(e) {
    const $todo = $(this).closest('.todo-item');
    const todoId = $todo.data('id');
    const todoToRemove = todos.find(todo => todo.id === todoId);
    $todo.on('animationend', () => $todo.remove());
    $todo.addClass('todo-item--removing');
    todoService.deleteTodo(todoToRemove);
  }

  function addTodo(e) {
    e.preventDefault();
    const value = $todoInput.val().trim();

    if (value) {
      const todo = createTodo(value);
      appendTodo(todo);
      $todoInput.val('');
      todoService.saveTodo(todo);
      snackbar.add('Successfully Added Todo');
    }
  }

  function addEvents(todoRoot) {
    $todoForm.on('submit', addTodo);
  }

  function initTodos() {
    todos.forEach(appendTodo);
    addEvents($todoRoot);
  }

  initTodos();
})(jQuery, snackbar, todoService);
