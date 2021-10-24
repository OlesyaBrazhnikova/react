import { v4 as uuidv4 } from 'uuid';
import { ADD_USER, CREATE_NEW_USER, DELETE_USER, GET_LIST_OF_USERS, GET_WINNER, SEARCH_USERS } from './actions';
import {calculateWinner, convertString} from '../../../utils';

const initialState = {
    users: [],
    filteredUsers: [],
    searchValue: '',

    registerInputValues: {
        firstName: '',
        lastName: ''
    },

    newUser: {
        id: '',
        name: '',
    },
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_OF_USERS:
            return {
                ...state,
                users: action.payload.users,
                filteredUsers: action.payload.users
            }
        case SEARCH_USERS:
            const value = action.payload.newValue
            if (value) {
                return {
                    ...state,
                    searchValue: value,
                    filteredUsers: state.users.filter(
                        elem => convertString(elem.name).includes(convertString(value)) ||
                            convertString(elem.id).includes(convertString(value))
                    )
                }
            } else {
                return {
                    ...state,
                    searchValue: action.payload.newValue,
                    filteredUsers: state.users
                }
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, {...state.newUser}],
                filteredUsers: [...state.users, {...state.newUser}],
            }
        case DELETE_USER:
            return {
                ...state,
                filteredUsers: state.filteredUsers.filter(elem => elem.id !== action.payload.id),
                users: state.users.filter(elem => elem.id !== action.payload.id),
            }
    
        case CREATE_NEW_USER:
            return {
                ...state,
                newUser: {
                    ...state.newUser,
                    id: uuidv4(),
                    name: `${state.registerInputValues.firstName} ${state.registerInputValues.lastName}`,
                }
            }
    
        case GET_WINNER:
            if(state.users.length) {
                return {
                    ...state,
                    isWinner: true,
                    winner: calculateWinner(state.users)
                }
            }
            return state
        default:
            return state
    }
}

export default usersReducer;
