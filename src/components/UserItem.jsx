import React from 'react';

function UserItem({ user: {name,age,gender,balance,picture}, setIsActive}) {
	
	return (
		<div className="userItem" onClick={() => setIsActive(true)}>
			<span><img src={picture} alt={name}/></span>
			<span>{name}</span>
			<span>{age}</span>
			<span>{gender}</span>
			<span>{balance}</span>
		</div>
	);
}

export default UserItem;