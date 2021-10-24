import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import styled from '@emotion/styled';
import {useDispatch} from 'react-redux';
import { deleteUser } from '../redux/reducers/user/actions';

const UserWrap = styled.div`
	display: inline-block;
	padding: 1em;
	background-color: white;
	box-shadow: inset 0 0 8px 0 green;
	border-radius: 3px;
	margin: 1px;
`;

const LabelWrap = styled.span`
	font-weight: 900;
	font-size: 15px;
`;

const UserCard = ({user}) => {
	const dispatch = useDispatch()

	return (
		<UserWrap className="User">
            <Typography>
				<LabelWrap>ID:</LabelWrap>
				{user.id}
			</Typography>
            <Typography>
				<LabelWrap>Name:</LabelWrap>
				{user.name}
			</Typography>
            <Typography>
				<LabelWrap>Time:</LabelWrap>
				{user.time}
			</Typography>
            <Box>
				<Button variant="outlined" onClick={() => dispatch(deleteUser(user.id))} fullWidth>Delete</Button>
            </Box>
        </UserWrap>
	)
}

export default UserCard;