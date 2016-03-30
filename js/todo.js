function getTodos() {
	var data = JSON.parse(localStorage.getItem('data'));
	
	if(data) { return data; }
	
	return [
		{
			text: 'Done Todo',
			done: true
		},
		{
			text: 'Todo',
			done: false
		}
	];
}

function saveTodos(todos) {
	localStorage.setItem('data', JSON.stringify(todos));
}

var todo = new Vue({
	el: '#main',
	data: {
		new: '',
		todos: getTodos()
	},
	methods: {
		addTodo: function() {
			var text = this.new.trim();
			if(text) {
				this.todos.push({
					text: text,
					done: false
				});
				
				this.new = '';
				
				saveTodos(this.todos);
			}
		},
		removeTodo: function(index) {
			this.todos.splice(index, 1);
			saveTodos(this.todos);
		},
		toggel: function(index) {
			this.todos[index].done = !this.todos[index].done;
		}
	}
});