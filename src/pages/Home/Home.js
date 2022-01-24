import { Box, Typography } from '@mui/material';
import { Button } from '../../components';
import { Wrapper, Presentation } from './styles';
import tasks from '../../assets/images/tasks.svg';
import colors from '../../helpers/colors';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const homeColors = colors.home;

const Home = () => {
	const { auth } = useAuth();
	if (auth.valid) {
		return <Navigate to="/dashboard" />;
	}
	return (
		<Wrapper maxWidth="md">
			<Presentation>
				<Typography variant="h4" component="h1">
					¿Qué vas a hacer hoy?
				</Typography>
				<Typography >
					Organizá tus tareas pendientes, fácil y rápido
				</Typography>
				<Box>
					<Button color={homeColors.button.color} bgcolor={homeColors.button.bgColor} to="/login">
						Empezá ahora
					</Button>
				</Box>
			</Presentation>
			<Box component="img" src={tasks} width="50%" />
		</Wrapper>
	);
};

export default Home;