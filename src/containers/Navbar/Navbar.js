import { Button, Logo } from '../../components';
import { Wrapper, AccessButtonsWrapper } from './styles';
import useAuth from '../../hooks/useAuth';
import { logout } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';

const Navbar = () => {
	const dispatch = useDispatch();
	const { auth } = useAuth();
	return (
		<Wrapper>
			<Logo />
			<AccessButtonsWrapper>
				{
					auth.valid ?
						<Button onClick={() => dispatch(logout())}>Cerrar sesión</Button> :
						<>
							<Button variant="outlined" to="/login">Ingresar</Button>
							<Button to="/register">Crear cuenta</Button>
						</>
				}
			</AccessButtonsWrapper>
		</Wrapper>
	);
};

export default Navbar;