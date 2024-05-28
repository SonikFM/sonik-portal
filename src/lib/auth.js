
export const fakeAuthProvider = {
	isAuthenticated: true,
	username: null,
	async signin(username) {
		await new Promise((r) => setTimeout(r, 500)); // fake delay
		fakeAuthProvider.isAuthenticated = true;
		fakeAuthProvider.username = username;
	},
	async signout() {
		await new Promise((r) => setTimeout(r, 500)); // fake delay
		fakeAuthProvider.isAuthenticated = false;
		fakeAuthProvider.username = "";
	},
};
