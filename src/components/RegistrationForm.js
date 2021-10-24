import React from 'react';
import {Button, TextField , Typography} from '@mui/material';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {createNewUser} from '../redux/reducers/user/actions';

const RegistrationForm = () => {
    const dispatch = useDispatch()

	const schema = yup.object().shape({
		firstName: yup
			.string()
			.matches(/^([^0-9]*)$/, "First name should not contain numbers")
			.required("First name is a required field"),
		lastName: yup
			.string()
			.matches(/^([^0-9]*)$/, "Last name should not contain numbers")
			.required("Last name is a required field"),
	});

    const {handleSubmit, register, formState: {errors, isValid}, getValues} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    const onSubmit = () => {
        dispatch(createNewUser())
    }

	const formStyle = {
		padding: '20px',
		background: 'lightyellow',
		margin: '0 0 20px',
		borderRadius: '4px',
	};

    return (
        <form style={formStyle} noValidate onSubmit={handleSubmit(onSubmit)} className="RegistrationForm">
			<Typography component={'span'}>Registration User</Typography>
			<TextField
				{...register('firstName')}
				id='firstName'
				type='text'
				label='First Name'
				name='firstName'
				fullWidth
				margin='normal'
				error={!!errors.firstName}
				helperText={errors?.firstName?.message}
			/>
			<TextField
				{...register('lastName')}
				id='lastName'
				type='text'
				label='Last Name'
				name='lastName'
				fullWidth
				margin='normal'
				error={!!errors.lastName}
				helperText={errors?.lastName?.message}
			/>
			<Button
				type='submit'
				disabled={!isValid}
				fullWidth
				variant='contained'
				color='primary'
				sx={{marginTop: '20px'}}
			>Register Participant</Button>
        </form>
    )
}

export default RegistrationForm;