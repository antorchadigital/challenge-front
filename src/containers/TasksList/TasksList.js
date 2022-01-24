import { List, ListItem, ListItemText } from '../../components';
import { Wrapper } from './styles';
import { Checkbox } from '@mui/material';

const TasksListMenu = () => {
	let data = [
		{ completed: false, name: 'Ir al banco' },
		{ completed: false, name: 'Hacer la tarea' },
		{ completed: false, name: 'Ordenar la casa' }
	];

	const handleCompletedTask = task => {
		const index = data.findIndex(item => item.name === task);
		data[index] = { ...data[index], completed: !data[index].completed };
	};

	return (
		<Wrapper>
			<List>
				{data && data.map(task => (
					<ListItem
						key={task.name}
					>
						<Checkbox onClick={() => handleCompletedTask(task.name)} />
						<ListItemText>{task.name}</ListItemText>
					</ListItem>
				))}
			</List>
		</Wrapper>
	);
};

export default TasksListMenu;