import Todo from './Todo';

const TodoList = ({ allTodos }) => {
	return (
		<div className="flex flex-col gap-3 py-4">
			{allTodos.map(todo => (
				<Todo key={todo.id} dataTodo={todo} />
			))}
		</div>
	);
};

export default TodoList;
