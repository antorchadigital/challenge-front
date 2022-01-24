import * as Yup from 'yup';

const login = {
	initialValues: {
		username: '',
		password: ''
	},
	validationSchema: Yup.object({
		username: Yup.string()
			.required('Ingresá tu nombre de usuario'),
		password: Yup.string()
			.required('Ingresá tu contraseña')
	})
};

export default login;