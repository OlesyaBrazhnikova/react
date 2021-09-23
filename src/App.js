import React, { useState } from 'react';
import UserList from './components/UserList';
import AddNewUser from './components/AddNewUser';
import { userData } from './userData';
import './App.css';

function App() {
	const [users, setUsers] = useState(userData);

	const addNewUser = (newUser) => {
		setUsers([...users, newUser]);
	}

	return (
		<div className="App">
			<AddNewUser addNewUser={addNewUser}/>
			<UserList users={users}/>
		</div>
	);
}

export default App;
