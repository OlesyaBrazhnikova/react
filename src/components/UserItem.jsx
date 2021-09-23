import React from 'react';

function UserItem({user: {name,age,gender,balance}}) {
	return (
		<div className="userItem">
			<span>{name}</span>
			<span>{age}</span>
			<span>{gender}</span>
			<span>{balance}</span>
		</div>
	)
}

export default UserItem;