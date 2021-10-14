// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

// const scheme = yup.object({
// 	firstName: yup.string().required(),
// 	lastName: yup.string().required(),
// }).required();

// const validation = {
// 	firstName: {
// 		required: true,
// 		pattern: /^[A-Za-z]+$/i,
// 	}
// };

// function NewForm() {
// 	const { register, handleSubmit, watch, formState: { errors } } = useForm({
// 		resolver: yupResolver(scheme)
// 	});

// 	console.log(watch('firstName'));

// 	const onSubmit = (data) => {
// 		console.log(data);
// 	};

// 	return( 
// 		<form onSubmit={handleSubmit(onSubmit)}>
// 		{/* <Headers /> */}
// 			<input 
// 				{...register("firstName", validation.firstName)}
// 				placeholder="First name"
// 			/>
// 			<input {...register("lastName")} placeholder="Last name" />

// 			{errors.firstName?.type === 'required' && "First name is required"}

// 			<select {...register("category")}>
// 			<option value="">Select...</option>
// 			<option value="A">Category A</option>
// 			<option value="B">Category B</option>
// 			</select>
// 			<input type="submit" />
// 	  	</form>
// 	 );
// }
// export default NewForm;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));

export const Form = ({children, ...props}) => {
  const styles = useStyles();

  return (
    <form {...props} className={styles.root} noValidate>
      {children}
    </form>
  );
};
