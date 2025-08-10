import { defineMock } from 'vite-plugin-mock-dev-server';

export default defineMock({
	url: '/api/test',
	body: {
		name: 'Mark',
		age: Math.floor(Math.random() * 6) + 1
	}
});
