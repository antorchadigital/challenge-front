import { List as ListMaterial, ListItemButton, ListItemText as ListItemTextMaterial } from '@mui/material';
import styled from '@emotion/styled';
import colors from '../../utils/colors';

const listColors = colors.components.list;

export const ListComponent = styled(ListMaterial)`
	padding: 0;
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const ListItemTextComponent = styled(ListItemTextMaterial)`
	margin: 0;
`;

export const ListItemButtonComponent = styled(ListItemButton)`
	border-radius: 5px;
	padding: 5px 20px;
	gap: 10px;
	${props => props.selected && `
		background-color: ${listColors.listItemButtonComponent.bgColor} !important;
		color: ${listColors.listItemButtonComponent.color};
		pointer-events: none;
	`}
`;