import { Form, Input, ValidationErrorMessage, Button, ErrorMessageComponent } from '../../components';
import { AccountBox, Lock } from '@mui/icons-material';
import { Wrapper, Title } from './styles';
import register from './handleRegisterForm';
import { useState } from 'react';
import colors from '../../helpers/colors';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/actions/auth';
import { handleUserRegistration } from '../../helpers/auth';

const registerColors = colors.form;

const RegisterForm = () => {
	const dispatch = useDispatch();
	const [userExistsError, setUserExistsError] = useState(false);

	const handleSubmit = async data => {
		try {
			const userData = await handleUserRegistration(data);
			dispatch(registerUser(userData));
		} catch {
			setUserExistsError(true);
		}
	};

	return (
		<Wrapper>
			<Title>¡Creá tu cuenta!</Title>
			<Form
				initialValues={register.initialValues}
				validationSchema={register.validationSchema}
				onSubmit={values => handleSubmit(values)}
			>
				{
					userExistsError &&
                    <ErrorMessageComponent>
                        El nombre de usuario ya está registrado
                    </ErrorMessageComponent>
				}
				<ValidationErrorMessage name="username" />
				<Input
					type="text"
					name="username"
					placeholder="Usuario"
					icon={<AccountBox color="inherit" fontSize="inherit" />}
				/>
				<ValidationErrorMessage name="password" />
				<Input
					type="password"
					name="password"
					placeholder="Contraseña"
					icon={<Lock color="inherit" fontSize="inherit" />}
				/>
				<ValidationErrorMessage name="passwordConfirmation" />
				<Input
					type="password"
					name="passwordConfirmation"
					placeholder="Confirmar contraseña"
					icon={<Lock color="inherit" fontSize="inherit" />}
				/>
				<Button
					color={registerColors.button.color}
					bgcolor={registerColors.button.bgColor}
					type="submit"
				>
                    Crear cuenta
				</Button>
			</Form>
		</Wrapper>
	);
};

export default RegisterForm;