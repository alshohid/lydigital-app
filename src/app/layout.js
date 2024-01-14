import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/themContext/ThemeProvider'
import NavBar from '@/components/nav/navaBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'lyDigital',
  description: 'Developed by Shohidullah Al Shohid',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <NavBar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
