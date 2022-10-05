import React, { createContext, useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Loading } from 'baser-ui/components'
import { useRouter } from 'next/router'
import { privateRouters, neuralRouters, publicRouters } from 'src/constants/routers'
import AccessDenied from 'src/components/access-denied'
import Layout from 'src/components/Layout'
import Signin from 'src/pages/auth/signin'
import { getProviders } from 'next-auth/react'

export const RedirectContext = createContext(null)

const RedirectContextProvider = ({ children }: any) => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const [dataProvider, setDataProvider] = useState<any>()
  const router = useRouter()

  const getProviderProps = async () => {
    const providers = await getProviders()
    setDataProvider(providers)
  }

  useEffect(() => {
    getProviderProps()
  }, [])

  if (loading) return <Loading isLoading={loading} />
  if (neuralRouters(router?.pathname) && session?.user?.email) router.replace('/')

  const next = publicRouters(router?.pathname) || (privateRouters(router?.pathname) && session?.user?.email)

  const redirectContextData: any = {}

  if (neuralRouters(router?.pathname) && !session?.user?.email) {
    return <Signin providers={dataProvider} session={session} />
  } else if (next) {
    return <RedirectContext.Provider value={redirectContextData}>{children}</RedirectContext.Provider>
  } else {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    )
  }
}

export default RedirectContextProvider
