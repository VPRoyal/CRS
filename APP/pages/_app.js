import '../styles/main.css'
import Header from '../components/Header/header'
import TopLayout from '../Layouts/TopLayout'
export default function MyApp({ Component, pageProps, router }) {
  if(router.pathname.startsWith('/account'))
    return <Component {...pageProps} />
  return (<TopLayout><Component {...pageProps} ></Component></TopLayout>)
}
