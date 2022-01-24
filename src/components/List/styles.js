import { List as ListMaterial, ListItemText as ListItemTextMaterial } from '@mui/material';
import styled from '@emotion/styled';

export const ListComponent = styled(ListMaterial)`
	padding: 0;
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const ListItemTextComponent = styled(ListItemTextMaterial)`
	margin: 0;
`;