import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import styled from '@emotion/styled';

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
	background-color: ${props => props.bgcolor || 'white'};
	color: ${props => props.color || '#696969'};
	border: none;
	${defaultButton}
`;

export const Outlined = styled(ButtonUnstyled)`
	background: none;
	color: ${props => props.color || 'white'};
	border: 1px solid ${props => props.color || 'white'};
	${defaultButton}
`;