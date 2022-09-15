module.exports = {
	important: false,
	prefix: '',
	content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'mine-shaft': {
					DEFAULT: '#2A2A2A',
					50: '#9D9D9D',
					100: '#909090',
					200: '#767676',
					300: '#5D5D5D',
					400: '#444444',
					500: '#2A2A2A',
					600: '#101010',
					700: '#000000',
					800: '#000000',
					900: '#000000',
				},
			},
			height: {
				'px-50': '50px',
				104: '26rem',
			},
			minHeight: {
				10: '2.5rem',
				16: '4rem',
				80: '20rem',
			},
			maxHeight: {
				10: '2.5rem',
				16: '4rem',
				80: '20rem',
			},
			screens: {
				'2xl': '1440px',
				FHD: '1920px',
				QHD: '2560px',
				'4k': '3840px',
			},
			animation: {
				popup: 'popup 0.2s ease-out',
				wiggle: 'wiggle 800ms ease-in-out infinite',
			},
			keyframes: {
				popup: {
					'0%': {
						opacity: '0.8',
						transform: 'scale(0.8)',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-1deg)' },
					'50%': { transform: 'rotate(1deg)' },
				},
			},
			padding: {
				px: '1px',
			},
			typography: {
				DEFAULT: {
					css: {
						h1: {
							color: 'var(--tui-text-01)',
						},
						h2: {
							color: 'var(--tui-text-01)',
						},
						strong: 'inherit',
						code: 'inherit',
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
