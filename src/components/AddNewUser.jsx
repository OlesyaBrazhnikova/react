import React, { useState } from "react";

function AddNewUser({addNewUser}) {
	const [newUser, setNewUser] = useState({
		name: '',
		age: '',
		gender: '',
		balance: '',
	})

	const createNewUser = (event) => {
		event.preventDefault();
		addNewUser({
			...newUser,
			id: 2,
		})
	}
	return (
		<div>
			<form action="">
				<input value={newUser.name} 
						onChange={(event)=> setNewUser({...newUser, name: event.target.value})} 
						placeholder="Enter name"/>
				<input value={newUser.age} 
						onChange={(event)=> setNewUser({...newUser, age: event.target.value})} 
						placeholder="Enter age"/>
				<input value={newUser.gender} 
						onChange={(event)=> setNewUser({...newUser, gender: event.target.value})}
						placeholder="male or female"/>
				<input value={newUser.balance} 
						onChange={(event)=> setNewUser({...newUser, balance: event.target.value})}
						placeholder="Enter amout of money"/>
				<button type="submit" onClick={createNewUser}>Add user</button>
			</form>
		</div>
	)
}

export default AddNewUser;