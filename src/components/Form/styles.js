import { Form as FormikForm, Field } from 'formik';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import colors from '../../utils/colors';

const formColors = colors.components.form;

export const FormComponent = styled(FormikForm)`
	display: flex;
	flex-direction: column;
    border-radius: 10px;
	width: 100%; 
`;

export const InputWrapper = styled(Box)`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	border-bottom: 1px solid black;
    gap: 5px;
	color: ${props => props.color || formColors.inputWrapper.colors};
	font-size: ${props => props.size ? `${props.size}px` : '25px'};
`;

export const InputComponent = styled(Field)`
	flex: 1;
	outline: none;
	border: none;
	padding: 10px 0;
    font-size: 15px;
`;

export const ErrorMessageComponent = styled.div`
	background-color: ${formColors.errorMessage.bgColor};
	color: ${formColors.errorMessage.color};
	padding: 5px 10px;
	border-radius: 3px;
	margin-bottom: 3px;
`;
