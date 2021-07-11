import Link from "next/link";
import { useState } from "react";


const Users = () => {
	const [users, setUsers] = useState([
		{ id: 1, name: 'Tony' },
		{ id: 2, name: 'Bob' },
	])
	return (
		<div>
			<h1>List of users</h1>
			<ul>
				{users.map(user =>
					<li key={user.id} >
						<Link href={`/users/${user.id}`}>
							<a>{user.name}</a>
						</Link>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Users;