<template>
  <!-- modifiers with override and prevent -->
  <div tabindex="0" class="todos" @keydown.ctrl.s.prevent="save">
    <!-- v-if -->
    <h2 v-if="!todos.length">Hello, what would you like to do today?</h2>
    <!-- v-else-if -->
    <h2 v-else-if="todos.length > 5">Hold up, you look a little packed!</h2>
    <!-- v-else -->
    <h2 v-else>Add another item!</h2>
    <!-- v-model -->
    <input type="text" v-model="newTodo"  @keydown.enter="addTodo"/>
    <!-- v-on -->
    <button @click="addTodo">Add</button>
    <!-- v-show -->
    <div class="missing" :class="{'danger': todos.length > 5}">
      <h2 v-show="!todos.length">
        Add a todo!
      </h2>
      <!-- v-for -->
      <div :class="['todo', {'done': todo.done}]" v-for="todo in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.done">{{todo.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todos: [],
      newTodo: ''
    };
  },
  methods: {
    addTodo () {
      this.todos.push({
        name: this.newTodo,
        done: false,
        id: `todo-${this.todos.length}`
      });
      this.newTodo = '';
    },
    save () {
      alert('We could go save the list here!');
    }
  }
};
</script>

<style scoped>
.todos {
  outline: none;
}

h2 {
  margin-top: 1em;
}

input[type="text"] {
  border: 0;
  border-bottom: 2px solid lightslategray;
  width: 300px;
  outline: none;
  padding: .5em;
}

input:focus {
  padding-bottom: .7em;
  border-color: slateblue;
}

button {
  background: slateblue;
  color: white;
  border-radius: .2em;
  padding: .7em;
  border: 0;
  cursor: pointer;
}

.missing {
  margin: 2em 1em;
  padding: 3em;
  background: whitesmoke;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.missing > h2 {
  color: grey;
}

.danger {
  border: 1px solid orange;
}

.todo {
  width: 400px;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  margin: .5em 0;
}

.done {
  text-decoration: line-through;
}

input[type="checkbox"] {
  margin-right: .5em;
}
</style>
