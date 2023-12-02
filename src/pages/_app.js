import DarkModeToggle from '@/components/Button/DarkModeToggle'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <DarkModeToggle />
      <Component {...pageProps} />
    </>
    
  )
}
