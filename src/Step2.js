import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useData } from "./DataContext";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
// import Checkbox from "@material-ui/core/Checkbox";
import { PrimaryButton } from "./components/PrimaryButton";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { makeStyles } from "@material-ui/core/styles";

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
// import * as yup from "yup";
// import { parsePhoneNumberFromString } from 'libphonenumber-js'


// const schema = yup.object().shape({
//   email: yup
//     .string()
//     .email("Email should have correct format")
//     .required("Email is a required field"),
// });

// const normalizePhoneNumber = (value) => {
//   const phoneNumber = parsePhoneNumberFromString(value)
//   if(!phoneNumber){
//     return value
//   }

//   return (
//     phoneNumber.formatInternational() 
//   );
// };

export const Step2 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      city: data.city,
      street: data.street,
      houseNumber: data.houseNumber,
    },
    mode: "onBlur",
    // resolver: yupResolver(schema),
  });
//   const hasPhone = watch("hasPhone");

  const onSubmit = (data) => {
    history.push("./step3");
    setValues(data);
  };
  const styles = useStyles();

  return (
    <MainContainer>
		<Typography component="h2" variant="h5">
		Step: 2
		</Typography>
		<Form onSubmit={handleSubmit(onSubmit)}>
		<Input
			{...register('city')}
			id="city"
			type="text"
			label="City"
			name="city"
			// error={!!errors.firstName}
			helperText={errors?.city?.message}
		/>
		<Input
			{...register('street')}
			id="street"
			type="text"
			label="Street"
			name="street"
			// error={!!errors.lastName}
			helperText={errors?.street?.message}
		/>
		<Input
			{...register('houseNumber')}
			id="houseNumber"
			type="number"
			label="House Number"
			name="houseNumber"
			//   error={!!errors.email}
			helperText={errors?.houseNumber?.message}
		/>
		<PrimaryButton>Next</PrimaryButton>
		<Link 
			className={styles.root}
			to="/">Previous
		</Link>
      </Form>
    </MainContainer>
  );
};
