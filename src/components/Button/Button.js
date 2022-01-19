import { Outlined, Contained } from './styles';

const Button = ({ variant, children, ...props }) => {
	switch (variant) {
		case 'outlined':
			return <Outlined {...props}>{children}</Outlined>;
		default:
			return <Contained {...props}>{children}</Contained>;
	}
};

export default Button;