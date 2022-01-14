import Member from './Member';

const MembersList = ({ membersList, team }) => {
	return (
		<div>
			<div className="my-2 font-bold">{team.name}</div>
			{membersList?.map(member => (
				<Member key={member.id} memberData={member} />
			))}
		</div>
	);
};

export default MembersList;
