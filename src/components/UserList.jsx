import React from 'react';
import UserItem from './UserItem';

function UserList({users}) {
	
	return (
		<div className="userList">
			{
				users.map((user)=> <UserItem user={user} />)
			}
		</div>
	);
}

export default UserList;