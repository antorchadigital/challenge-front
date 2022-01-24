import { LoginForm } from '../../containers';
import { Wrapper } from './styles';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Login = () => {
	const { auth } = useAuth();
	if (auth.valid) {
		return <Navigate to="/dashboard" />;
	}
	return (
		<Wrapper>
			<LoginForm />
		</Wrapper>
	);
};
export default Login;