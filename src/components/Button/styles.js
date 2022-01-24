import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import styled from '@emotion/styled';
import colors from '../../helpers/colors';

const buttonColors = colors.button;

const defaultButton = `
	outline: none;
	padding: 10px 10px;
	cursor: pointer;
	border-radius: 3px;
	&:active {
		transform: scale(0.95);
	}
`;

export const Contained = styled(ButtonUnstyled)`
	background-color: ${props => props.bgcolor || buttonColors.contained.bgColor};
	color: ${props => props.color || buttonColors.contained.color};
	border: none;
	${defaultButton}
`;

export const Outlined = styled(ButtonUnstyled)`
	background: none;
	color: ${props => props.color || buttonColors.outlined.color};
	border: 1px solid ${props => props.color || buttonColors.outlined.borderColor};
	${defaultButton}
`;