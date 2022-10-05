import 'src/styles/index.scss'
import 'baser-ui/styles/index.scss'
import type { AppProps } from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'
import { SessionProvider } from 'next-auth/react'
import App from 'next/app'
import RedirectContext from 'src/contexts/RedirectRoute'
import Layout from 'src/components/Layout'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <RedirectContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RedirectContext>
    </SessionProvider>
  )
}

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = App.getInitialProps && (await App.getInitialProps(ctx))

  return appProps
}

export default MyApp
