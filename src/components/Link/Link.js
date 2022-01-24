import { Link as LinkComponent } from 'react-router-dom';

const Link = ({ children, to, ...props }) => {
	return (
		<LinkComponent to={to} {...props}>
			{children}
		</LinkComponent>
	);
};

export default Link;