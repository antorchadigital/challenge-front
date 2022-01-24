import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to="/">
			<Typography
				variant="h6"
				noWrap
				component="div"
			>
                ToDo App
			</Typography>
		</Link>
	);
};

export default Logo;