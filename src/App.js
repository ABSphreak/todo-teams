import { useState, useRef, useEffect } from 'react';
import './App.css';
import Team from './components/Team';
import TodoList from './components/TodoList';
import { teams as dataTeams, todos as dataTodos } from './data/mock';

function App() {
	const [todos, setTodos] = useState([...dataTodos]);
	const [teams] = useState([...dataTeams]);
	const [lastAssignedTo, setLastAssignedTo] = useState(dataTodos.at(dataTodos.length - 1)?.assignedTo[0]);
	const inputRef = useRef(null);

	const newTodoHandler = e => {
		e.preventDefault();
		let assignedId = 0;
		const lastAssignedMemberIndex = teams[0].members.findIndex(member => member.id === lastAssignedTo);
		console.log(lastAssignedMemberIndex);
		if (lastAssignedMemberIndex > -1 && teams[0].members.length >= lastAssignedMemberIndex) {
			if (teams[0]?.members?.[lastAssignedMemberIndex + 1]) {
				assignedId = teams[0].members[lastAssignedMemberIndex + 1].id;
			} else {
				assignedId = teams[0].members[0].id;
			}
		} else {
			console.log('jrieogjreo');
			assignedId = teams[0].members[0].id;
		}

		const newTodo = {
			id: todos.length + 1,
			text: e.target?.[0]?.value,
			assignedTo: [assignedId],
			completed: false,
		};

		inputRef.current.value = '';

		setTodos([...todos, newTodo]);
		setLastAssignedTo(assignedId);
	};

	// Todo: Working on binding a todo to a team member
	useEffect(() => {}, [todos]);

	return (
		<main className="App">
			<div className="container max-w-2xl">
				<section className="p-10">
					<h2 className="text-2xl font-bold text-center">All Todos</h2>
					<form onSubmit={newTodoHandler} className="pt-4">
						<input ref={inputRef} type="text" className="w-full p-3 border border-teal-500 rounded-lg" placeholder="Add a new todo" />
						<button type="submit" name="todoText" className="px-3 py-2 mt-2 text-white uppercase bg-teal-500 rounded-lg">
							Add
						</button>
					</form>
					<div>
						<TodoList allTodos={todos} />
					</div>
				</section>
				<section className="p-10">
					<h2 className="text-2xl font-bold text-center">All Teams</h2>
					<div>
						<Team teamData={teams} />
					</div>
				</section>
			</div>
		</main>
	);
}

export default App;

// Add a todo with text and assign it to a member of a team
