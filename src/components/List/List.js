import { ListComponent, ListItemTextComponent, ListItemButtonComponent } from './styles';
import ListItemMaterial from '@mui/material/ListItem';

const List = ({ children, ...props }) => {
	return (
		<ListComponent {...props}>{children}</ListComponent>
	);
};

export const ListItem = ({ children, button, selected, ...props }) => {
	if (button) {
		return (
			<ListItemButtonComponent {...props} selected={selected}>
				{children}
			</ListItemButtonComponent>
		);
	}
	return (
		<ListItemMaterial {...props}>
			{children}
		</ListItemMaterial>
	);
};

export const ListItemText = ({ children, ...props }) => {
	return (
		<ListItemTextComponent {...props}>
			{children}
		</ListItemTextComponent>
	);
};

export default List;