import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { useData } from "./DataContext";
import Typography from "@material-ui/core/Typography";
import { PrimaryButton } from "./components/PrimaryButton";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';


const validationSchema = yup.object().shape({
	password: yup
		.string()
		.required("Password is a required")
		.min(6, 'Password must be at least 6 chatacters'),
	confirmPassword: yup
		.string()
		.required("Confirm Password is a required")
		.oneOf([yup.ref('password'), null], 'Passwords must match')
});

// const normalizePhoneNumber = (value) => {
//   const phoneNumber = parsePhoneNumberFromString(value)
//   if(!phoneNumber){
//     return value
//   }

//   return (
//     phoneNumber.formatInternational() 
//   );
// };
const useStyles = makeStyles((theme) => ({
	root: {
	  margin: theme.spacing(0, 0, 2),
	  display: "block",
	  backgroundColor: "lightseagreen",
	  color: "white",
	  textTransform: "uppercase",
	  textDecoration: "none",
	  textAlign: "center",
	  padding: "7px 10px",
	  borderRadius: "5px"
	},
  }));

export const Step4 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      password: data.password,
      confirmPassword: data.confirmPassword,
    },
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    history.push("./Result");
    setValues(data);
  };

  const styles = useStyles();

  return (
    <MainContainer>
		<Typography component="h2" variant="h5">
			Step: 4
		</Typography>
		<Form onSubmit={handleSubmit(onSubmit)}>
		<Input
			{...register('password')}
			id="password"
			type="password"
			label="Password"
			name="password"
			// error={!!errors.password}
			helperText={errors.password?.message}
		/>
		<Input
			{...register('confirmPassword')}
			id="confirmPassword"
			type="password"
			label="Confirm Password"
			name="confirmPassword"
			// error={!!errors.lastName}
			helperText={errors.confirmPassword?.message}
		/>
		<PrimaryButton>Submit</PrimaryButton>
		<Link 
			className={styles.root}
			to="/Step3">Previous</Link>
      </Form>
    </MainContainer>
  );
};
