import React from 'react'
import { LoginDataType, useAuth } from 'src/hooks'
import { useRouter } from 'next/router'
import AuthForm from 'src/containers/auth/auth-form'
import { message } from 'antd'

export default function Login() {
  const router = useRouter()
  const { login } = useAuth({
    revalidateOnMount: false
  })

  async function handleLoginClick(data: LoginDataType) {
    try {
      await login(data)
      router.push('/protected')
    } catch (error) {
      console.log('failed to login', error)
      message.error('Login fail')
    }
  }

  return <AuthForm handleLoginClick={handleLoginClick} />
}
