import { authApi } from 'src/services/auth'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/dist/types'

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

	async function login() {
		await authApi.login({
			username: 'nguyenvancuong1379@gmail.com',
			password: 'cuong12345',
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
