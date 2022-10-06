import { useAuth } from 'src/hooks'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export interface AuthProps {
	children: any
}

export function Auth({ children }: AuthProps) {
	const router = useRouter()
	const { profile, firstLoading } = useAuth()

	useEffect(() => {
		if (!firstLoading && !profile?.success) router.push('/login')
	}, [router, profile, firstLoading])
	if (!profile?.success) return <p>Loading...</p>

	return <div>{children}</div>
}
