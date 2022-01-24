import { RegisterForm } from '../../containers';
import { Wrapper } from './styles';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Register = () => {
	const { auth } = useAuth();
	if (auth.valid) {
		return <Navigate to="/dashboard" />;
	}
	return (
		<Wrapper>
			<RegisterForm />
		</Wrapper>
	);
};
export default Register;