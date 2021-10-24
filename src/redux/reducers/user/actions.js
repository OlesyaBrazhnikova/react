export const GET_LIST_OF_USERS = '[Users] Get users'
export const SEARCH_USERS = '[Users] Search users'
export const CREATE_NEW_USER = '[] Create new user'
export const ADD_USER = '[] Add user'
export const DELETE_USER = '[Users] Delete users'
export const GET_WINNER = '[] Get winner'

export const getListOfUsers = (users) => ({
	type: GET_LIST_OF_USERS,
	payload: {users}
})

export const searchUsers = (newValue) => ({
	type: SEARCH_USERS,
	payload: {newValue}
})

export const createNewUser = () => ({
	type: CREATE_NEW_USER
})

export const addUser = () => ({
	type: ADD_USER
})

export const deleteUser = (id) => ({
	type: DELETE_USER,
	payload: {id}
})

export const getWinner = () => ({
	type: GET_WINNER
})
