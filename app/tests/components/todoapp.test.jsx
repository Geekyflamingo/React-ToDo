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
});
