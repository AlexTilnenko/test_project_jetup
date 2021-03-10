import React from "react";

import {
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle
} from "@material-ui/core";

interface IAddCityFormProps {
	title: string;
	label: string;
	buttonText: string;
	valueHandler: (text: string) => void;
}

const AddCityForm: React.FC<IAddCityFormProps> = React.memo(
	({ title, label, buttonText, valueHandler }) => {
		const [open, setOpen] = React.useState<boolean>(false);
		const [value, setValue] = React.useState<string>("");

		const handleClickOpen = (): void => {
			setOpen(true);
		};

		const handleClose = (): void => {
			setOpen(false);
		};

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
			const value = e.target.value.replace(/\d/g, "");
			setValue(value);
		};

		const handleSubmit = (): void => {
			valueHandler(value);
			handleClose();
			setValue("");
		};

		return (
			<div className='mt-1'>
				<Button variant='outlined' color='primary' onClick={handleClickOpen}>
					{buttonText}
				</Button>
				<Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
					<DialogTitle id='form-dialog-title'>{title}</DialogTitle>
					<DialogContent>
						<TextField
							margin='dense'
							id='name'
							label={label}
							type='text'
							value={value}
							onChange={handleChange}
							autoFocus
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleSubmit} color='primary'>
							Add
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
);

export default AddCityForm;
