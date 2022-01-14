import MembersList from './MembersList';

const Team = ({ teamData }) => {
	return (
		<div className="p-4 py-4 rounded-lg shadow-md">
			{teamData.map(team => (
				<MembersList key={team.id} team={team} membersList={team.members} />
			))}
		</div>
	);
};

export default Team;
