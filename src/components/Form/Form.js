import { Formik, ErrorMessage } from 'formik';
import { FormComponent, InputComponent, InputWrapper, ErrorMessageComponent } from './styles';

const Form = ({ children, ...props }) => {
	return (
		<Formik {...props} >
			<FormComponent>{children}</FormComponent>
		</Formik>
	);
};

export const Input = ({ icon, iconColor, iconSize, ...props }) => {
	return (
		<InputWrapper color={iconColor} size={iconSize}>
			{icon}
			<InputComponent {...props} />
		</InputWrapper>

	);
};

export const ValidationErrorMessage = ({ ...props }) => {
	return (
		<ErrorMessage component={ErrorMessageComponent} {...props} />
	);
};

export default Form;