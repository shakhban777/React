const getResource = async (url) => {
	const res = await fetch(url);
	const body = await res.json();
	return body;
};

getResource('https://swapi.dev/api/people/1/')
	.then((res) => console.log(res));