import React from 'react';
import {Button, Typography} from '@mui/material';
import styled from '@emotion/styled';
import {useDispatch, useSelector} from 'react-redux';
import { getWinner } from '../redux/reducers/user/actions';


const WinnerWrapper = styled.div`
	padding: 20px;
	background: papayawhip;
	border-radius: 4px;
`;

const WinnerTitle = styled.div`
	padding: 20px 0;
	font-size: 20px;
`;

const WinnerWrap = styled.span`
	font-size: 15px;
	font-weight: 800;
`;

const UsersValue = styled.span`
	font-size: 20px;
	font-weight: 800;
`;

const WinnerInfo = () => {
    const {filteredUsers, isWinner, winner} = useSelector(state => state.users)
    const dispatch = useDispatch()

    return (
        <WinnerWrapper>
            { isWinner ?
						<>
							<Typography fontWeight='800' align='center'>The Winner</Typography>
							<Typography><WinnerWrap>ID:</WinnerWrap> {winner.id}</Typography>
							<Typography><WinnerWrap>Name:</WinnerWrap> {winner.name}</Typography>
							<Typography><WinnerWrap>Time:</WinnerWrap> {winner.time}</Typography>
                    	</>
                    	:
						<Typography component={'span'} align='center'>
							<WinnerTitle>Total Participants: <UsersValue>{filteredUsers.length}</UsersValue></WinnerTitle>
						</Typography>
            }
			
            <Button
                onClick={() => dispatch(getWinner())}
				variant='outlined'
                fullWidth
                sx={{marginTop: '20px'}}
            >Show Winner</Button>
        </WinnerWrapper>
    )
}

export default WinnerInfo;