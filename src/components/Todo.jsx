const Todo = ({ dataTodo }) => {
	return (
		<div className="p-4 border border-gray-100 rounded-md shadow-md">
			<p>{dataTodo.text}</p>
			<p>
				Assigned to:{' '}
				{dataTodo.assignedTo.map(member => {
					return member;
				})}
			</p>
			<div></div>
		</div>
	);
};

export default Todo;

// Todos can be assigned to multiple members.
// Todos can be deleted and created
// Todos can be completed and uncompleted

// Memebers can be created or deleted
// Members can be assigned to multiple todos
// Members are a part of team

// Teams can be created or deleted
// Teams can have multiple members
