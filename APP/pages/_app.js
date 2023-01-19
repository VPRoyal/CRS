import '../styles/main.css'
import { useEffect,useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
export default function MyApp({ Component, pageProps }) {
  const [window,setWindow]=useState(false);
  useEffect(() => setWindow(true), [])
  return(
    <div suppressHydrationWarning>
   {window?<Router><Component {...pageProps} /></Router>:null}
   </div>
  )
}
