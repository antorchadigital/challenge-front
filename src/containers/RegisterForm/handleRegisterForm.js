import * as Yup from 'yup';

const register = {
	initialValues: {
		username: '',
		password: '',
		passwordConfirmation: ''
	},
	validationSchema: Yup.object({
		username: Yup.string()
			.required('Ingresá un nombre de usuario')
			.min(8, 'El nombre de usuario debe contener al menos 8 caracteres')
			.max(16, 'El nombre de usuario no puede contener más de 16 caracteres'),
		password: Yup.string()
			.required('Ingresá una contraseña')
			.min(8, 'La contraseña debe contener al menos 8 caracteres')
			.max(16, 'La contraseña no puede contener más de 16 caracteres')
			.matches(
				/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{0,}$/,
				'La contraseña debe contener 1 mayúscula, 1 minúscula y 1 número'
			),
		passwordConfirmation: Yup.string()
			.required('Volvé a ingresar la contraseña')
			.oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
	})
};

export default register;