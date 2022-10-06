import 'src/styles/index.scss'
import 'baser-ui/styles/index.scss'
import axiosClient from 'src/services/auth/axios-client'
import NProgress from 'nprogress'
import { EmptyLayout } from 'src/components/empty'
import { AppPropsWithLayout } from 'src/models'
import Router from 'next/router'
import App from 'next/app'
import { SWRConfig } from 'swr'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <SWRConfig value={{ fetcher: (url: any) => axiosClient.get(url), shouldRetryOnError: false }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = App.getInitialProps && (await App.getInitialProps(ctx))

  return appProps
}

export default MyApp
