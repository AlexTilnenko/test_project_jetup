import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { FormControl, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { setToken } from "../redux/actions/login";

interface ILoginData {
	email: string;
	password: string;
}

const useStyles = makeStyles({
	form: {
		maxWidth: "300px",
		margin: "50px auto"
	},
	input: {
		margin: "5px 0"
	}
});

const Login: React.FC = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const { control, handleSubmit, errors: fieldsErrors, reset } = useForm<ILoginData>();

	useEffect(() => {
		const token = !!localStorage.getItem("jwt-token");
		if (token) {
			dispatch(setToken(token));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onSubmitLogin = (data: ILoginData) => {
		dispatch(setToken(true));
		localStorage.setItem("jwt-token", JSON.stringify(true));
		console.log(data);
		reset({
			email: "",
			password: ""
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmitLogin)} className={classes.form}>
			<FormControl variant='outlined' className={classes.input} fullWidth>
				<Controller
					name='email'
					as={
						<TextField
							id='email'
							helperText={fieldsErrors.email ? fieldsErrors.email.message : null}
							variant='outlined'
							label='Email'
						/>
					}
					control={control}
					defaultValue=''
					rules={{
						required: "Required",
						pattern: {
							value: /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: "invalid email address"
						}
					}}
				/>
			</FormControl>
			<FormControl variant='outlined' className={classes.input} fullWidth>
				<Controller
					name='password'
					as={
						<TextField
							id='password'
							type='password'
							helperText={fieldsErrors.password ? fieldsErrors.password.message : null}
							variant='outlined'
							label='Password'
						/>
					}
					control={control}
					defaultValue=''
					rules={{
						required: "Required",
						pattern: {
							value: /^[0-9]{5,10}$/g,
							message: "password must include at least 5 numbers"
						}
					}}
				/>
			</FormControl>
			<Button variant='contained' color='primary' type='submit'>
				Login
			</Button>
		</form>
	);
};

export default Login;
