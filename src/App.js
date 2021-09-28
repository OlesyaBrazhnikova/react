import React, { useState, useMemo } from 'react';
import UserList from './components/UserList';
import AddNewUser from './components/AddNewUser';
import { userData } from './userData';
import './App.css';
import Header from './components/header/Header';
import AgeSelect from './components/select/AgeSelect';
import UserModal from './components/modal/UserModal';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [users, setUsers] = useState(userData);
	const [filter, setFilter] = useState('');
	const [sort, setSort] = useState('');
	const [isActive, setIsActive] = useState(false);

	const filteredTasks = useMemo(() => {
		return users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));
	  }, [filter, users]);

	const addNewUser = (newUser) => {
		setUsers([...users, newUser]);
	}

	const inputStyles = {
		margin: '20px 0',
	}

	return (
		<div className="App">
			<Header/>
			<input style={inputStyles} value={filter} onChange={(event) => setFilter(event.target.value)} placeholder="Search by name"/>
			<AgeSelect 
				defaultValue="Sorting type"
				options={[
					{value: "1-9", title: 'Sort by increase age'},
					{value: "9-1", title: 'Sort by decrease age'},
				]}
				value={sort}
				onSortChange={setSort}
			/>
			<AddNewUser addNewUser={addNewUser}/>
			<UserList users={filteredTasks} setIsActive={setIsActive}/>
			<UserModal
				visible={isActive}
				setVisible={setIsActive}
			>
				<h1>Hello</h1>
			</UserModal>
		</div>
	);
}

export default App;
