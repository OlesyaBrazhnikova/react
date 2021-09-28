import React from 'react';
import UserItem from './UserItem';
import { v4 as uuidv4 } from 'uuid';

function UserList({users, setIsActive}) {
	
	return (
		<div className="userList">
			{
				users.map((user) => <UserItem user={user} key={uuidv4()} setIsActive={setIsActive} />)
			}
		</div>
	);
}

export default UserList;