import axios from "axios";

const server = axios.create({
	baseURL: 'http://89.108.79.146',
})

export function login(user: { username: string, password: string }): any {
	return server.post('/auth/login', {
		username: user.username,
		password: user.password
	}, { withCredentials: true })
		.then(data => {
			return "good"
		})
		.catch(err => {
			return "bad"
		})
}

export function registerUser(user: { name: string, surname: string, username: string, password: string, school: string, class: string, group: string }): any {
	return server.post('/auth/register', {
		name: user.name,
		surname: user.surname,
		username: user.username,
		password: user.password,
		school: user.school,
		class: user.class,
		group: user.group
	}, { withCredentials: true })
		.then(data => {
			return 'good'
		})
		.catch(err => {
			return 'bad'
		})
}

export function logout(): any {
	server.get('/auth/logout', { withCredentials: true })
}

export function isLoggedUser(setUserData: any): any {
	server.get('/auth/me', { withCredentials: true })
		.then(data => {
			setUserData(data.data)
		})
		.catch(err => {
			setUserData(undefined)
		})
}

export function fetchTestsName(setQuizes: any) {
	server.get('/tests/name', { withCredentials: true })
		.then(data => {
			setQuizes(data.data)
		})
		.catch(err => { })
}

export function fetchTest(id: any, setQuiz: any) {
	return server.get(`/tests/${id}`, { withCredentials: true })
		.then(data => {
			setQuiz(data.data)
		})
		.catch(err => { })
}