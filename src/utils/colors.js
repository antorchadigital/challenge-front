export const palette = {
	white: '#FFFFFF',
	black: '#000000'
};

const colors = {
	components: {
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
		form: {
			inputWrapper: {
				color: '#9D9D9D'
			},
			errorMessage: {
				color: '#A90000',
				bgColor: '#FCA9A9'
			}
		},
		list: {
			listItemButtonComponent: {
				color: palette.white,
				bgColor: '#1976D2'
			}
		}
	}
};

export default colors;