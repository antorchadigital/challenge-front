import { Button, Logo } from '../../components';
import { Wrapper, AccessButtonsWrapper } from './styles';

const Navbar = () => {
	return (
		<Wrapper>
			<Logo />
			<AccessButtonsWrapper>
				<Button variant="outlined" to="/login">Ingresar</Button>
				<Button to="/register">Crear cuenta</Button>
			</AccessButtonsWrapper>
		</Wrapper>
	);
};

export default Navbar;