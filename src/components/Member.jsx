const Member = ({ memberData }) => {
	return (
		<div className="flex items-center gap-3">
			<h3>{memberData.name}</h3>
			{memberData.todosAssigned.length > 0 && (
				<div>
					Assigned to:{' '}
					{memberData.todosAssigned.map(ids => {
						return ids;
					})}
				</div>
			)}
		</div>
	);
};

export default Member;
