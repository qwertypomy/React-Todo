var $ = require('jquery');

module.exports = {
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;
    filteredTodos = filteredTodos.filter((todo) => {
        return (!todo.completed || showCompleted) &&
        (searchText? todo.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1: true);
    });
    filteredTodos.sort((a, b) => a.completed);
    return filteredTodos;
  }
};
