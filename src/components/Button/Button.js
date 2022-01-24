import { Outlined, Contained } from './styles';
import { Link } from '..';

const Button = ({ variant, children, to, ...props }) => {
	switch (variant) {
		case 'outlined':
			if (to) {
				return (
					<Link to={to}>
						<Outlined {...props}>{children}</Outlined>
					</Link>
				);
			}
			return <Outlined {...props}>{children}</Outlined>;
		default:
			if (to) {
				return (
					<Link to={to}>
						<Contained {...props}>{children}</Contained>
					</Link>
				);
			}
			return <Contained {...props}>{children}</Contained>;
	}
};

export default Button;