export const palette = {
	white: '#FFFFFF',
	black: '#000000'
};

const colors = {
	button: {
		contained: {
			color: '#696969',
			bgColor: palette.white
		},
		outlined: {
			color: palette.white,
			borderColor: palette.white
		}
	},
	home: {
		button: {
			color: palette.white,
			bgColor: '#1976d2'
		}
	},
	form: {
		inputWrapper: {
			color: '#9D9D9D'
		},
		errorMessage: {
			color: '#A90000',
			bgColor: '#FCA9A9'
		},
		button: {
			color: palette.white,
			bgColor: '#1976d2'
		}
	}
};

export default colors;