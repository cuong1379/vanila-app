import { LoginPayload, RegisterPayload } from 'src/models'
import axiosClient from './axios-client'

export const authApi = {
	login(payload: LoginPayload) {
		return axiosClient.post('/login', payload)
	},

	logout() {
		return axiosClient.post('/logout')
	},

	getProfile() {
		return axiosClient.get('/auth/profile')
	},
	
	register(payload: RegisterPayload) {
		return axiosClient.post('/register', payload)
	},
}
