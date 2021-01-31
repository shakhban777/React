export const inc = () => ({type: 'INC'});

export const dec = () => ({type: 'DEC'});

export const rnd = (payload) => {
	return {
		type: 'RND',
		payload: Math.floor(Math.random() * 10)
	}
}
