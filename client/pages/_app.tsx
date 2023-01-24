import MainLayout from "../layouts/MainLayout"
import {FC} from "react"
import {AppProps} from "next/app"
import '../styles/Global.css'
import Router from "next/router"
import NProgress from "nprogress"
import "../styles/libraries/_nprogress.css"

NProgress.configure({showSpinner: false})
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp: FC<AppProps> = ({Component, pageProps}) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
export default MyApp
