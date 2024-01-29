
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeModeProvider } from '../context/ThemeModeContext'
import Header from '@/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Website',
  description: 'UI/UX Design, Frontend Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body suppressHydrationWarning className={`${inter.className} bg-white dark:bg-rh-dark  text-rh-dark dark:text-white 	`}>
      <ThemeModeProvider>
        <Header/>
        {children}
        </ThemeModeProvider>
      </body>
    </html>
  )
}
