import { Wrapper } from './styles';
import { TasksList } from '../../containers';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
	const { auth } = useAuth();
	if (!auth.valid) {
		return <Navigate to="/login" />;
	}
	return (
		<Wrapper>
			<TasksList />
		</Wrapper>
	);
};

export default Dashboard;