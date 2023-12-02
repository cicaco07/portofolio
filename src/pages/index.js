import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import Homepage from '@/components/Homepage/Homepage'
import Navbar from '@/components/Navbar/Navbar'
import Projects from '@/components/Projects/Projects'
import Skills from '@/components/Skills/Skills'
import Space from '@/components/Space'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <Navbar/>
      <Homepage/>
      <Space/>
      <About/>
      <Space/>
      <Projects/>
      <Space/>
      <Skills/>
      <Space/>
      <Contact/>
    </main>
    
  )
}
