import { authApi } from 'src/services/auth'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/dist/types'

export interface LoginDataType {
	username: string
	password: string
}
// Auth --> Protected Pages
// <Auth>{children}</Auth>
export function useAuth(options?: Partial<PublicConfiguration>) {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR('/auth/profile', {
		dedupingInterval: 60 * 60 * 1000, // 1hr
		revalidateOnFocus: false,
		...options,
	})

	const firstLoading = profile === undefined && error === undefined

	async function login(data: LoginDataType) {
		await authApi.login({
			username: data?.username,
			password: data?.password,
		})

		await mutate()
	}

	async function logout() {
		await authApi.logout()
		mutate(null, false)
	}

	return {
		profile,
		error,
		login,
		logout,
		firstLoading,
	}
}
