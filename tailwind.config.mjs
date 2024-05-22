/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'backgroundGray': '#A9A9A9',
        'secondBackgroundGray': '#1A191B',
        'textGray': '#252525',
        'chatboxGradiant': '#BDBDBD',
        'whiteReplace': '#D9D9D9',
        'placeholderColor': '#8D8D8D',
      
      },
      screens: {
				'3xl'  : { 'min':'1792px' },
				'ut3xl': { 'max':'1791px' },
				'2xl'  : { 'min':'1536px' },
				'ut2xl': { 'max':'1535px' },
				'xl'  : { 'min':'1280px' },
				'utxl': { 'max':'1279px' },
				'lg'  : { 'min':'1024px' },
				'utlg': { 'max':'1023px' },
				'md'  : { 'min':'768px'  },
				'utmd': { 'max':'767px'  },
				'sm'  : { 'min':'640px'  },
				'utsm': { 'max':'639px'  },
				'xs'  : { 'min':'480px'  },
				'utxs': { 'max':'479px'  },
			},
	    fontFamily: {
		    custom1: ['montserrat', 'sans-serif'],
	    },
    },
  },
  plugins: [],
};
