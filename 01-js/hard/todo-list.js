/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.list = [];
  }
  add(todo) {
    this.list.push(todo);
  }
  remove(i) {
    if (i >= 0 && i < this.list.length) {
      this.list.splice(i, 1);
    }
  }
  update(i, todo) {
    if (i >= 0 && i < this.list.length) {
      this.list[i] = todo;
    }
  }
  getAll() {
    return this.list;
  }
  get(i) {
    return (i >= 0 && i < this.list.length) ? this.list[i] : null;
  }
  clear() {
    this.list = [];
  }
}

module.exports = Todo;
