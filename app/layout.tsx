import './globals.scss'
import Navbar from './components/Navbar/Navbar'
import Footer  from './components/Footer/footer'
import  { Metadata } from 'next'
import { Montserrat} from 'next/font/google'
import  {ThemeProvider}  from './context/themeContext'

const inter = Montserrat({
    subsets: ['latin'],
    weight: ['400','700','800']
  })

export const metadata :Metadata = {
  title: 'Shopo - Home',
  description: 'simple shop gives articles about some products',
}

export default function RootLayout({
  children,
}:{children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider>
      <div className='container'>
      <Navbar />
      {children}
        <Footer />
      </div>
      </ThemeProvider>
      </body>
    </html>
  )
}

