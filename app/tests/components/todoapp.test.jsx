var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});
	it('should add todo to the todos state onHandleAddTodo', () => {
		var todoText = 'Walk dog';
		var todoapp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoapp.setState({todos: []});
		todoapp.handleAddTodo(todoText);

		expect(todoapp.state.todos[0].text).toBe(todoText);
	});
	it('should toggle completed value when handleToggle called', () => {
		var todoData = {
			text: 'test',
			id: 11,
			completed: false
		};
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoData]});
		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(true);
	})
});
