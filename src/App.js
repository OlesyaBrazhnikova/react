import './App.css';
import { Container, TextField} from '@mui/material';
import UsersList from "./components/ListOfUsers";
import styled from '@emotion/styled';
import RegistrationForm from './components/RegistrationForm';
import WinnerInfo from './components/WinnerInfo';
import {useDispatch, useSelector} from 'react-redux';
import { searchUsers } from './redux/reducers/user/actions';

const Page = styled.div`
	background: lightblue;
	width: auto;
	max-width: 100%;
	display: flex;
	padding: 20px;
`;

const containerLeft = {
	padding: 0,
	width: '60%',
	margin: '20px',
};
const containerRight = {
	padding: 0,
	width: '40%',
	margin: '20px',
};

const App = () => {
	const {searchValue} = useSelector(state => state.users)
	const dispatch = useDispatch()
  return (
	<Page className="Wrapper">
		<Container style={containerLeft}>
			<TextField
				value={searchValue}
				fullWidth
				onChange={(e) => dispatch(searchUsers(e.target.value))}
				placeholder='Enter participant name...'
			/>
			<UsersList/>
		</Container>
		<Container style={containerRight}>
			<RegistrationForm></RegistrationForm>
			<WinnerInfo></WinnerInfo>
		</Container>
	</Page>
  );
}

export default App;
