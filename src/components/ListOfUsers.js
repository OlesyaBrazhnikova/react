import React from 'react';
import { users as usersUsers } from '../data/listUsers';
import styled from '@emotion/styled';
import UserCard from './UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getListOfUsers } from '../redux/reducers/user/actions';


const UsersWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding: 2em;
	background: papayawhip;
	margin: 10px 0 0;
	border-radius: 4px;
`;

const UsersList = () => {
	const dispatch = useDispatch()

    const users = useSelector(state => state.users.filteredUsers)

    useEffect(() => {
        dispatch(getListOfUsers(usersUsers))
    }, [dispatch])

	return (
		<UsersWrapper className="ListOfUsers">
			{
				users.map(item => <UserCard key={item.id} user={item}/>)
			}
		</UsersWrapper>
	);
}

export default UsersList;