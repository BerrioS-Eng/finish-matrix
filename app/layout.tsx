import './globals.css'
import { Open_Sans } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: 'Matriz genérica de acabados',
  description: 'Matriz genérica de acabados'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <script src="https://kit.fontawesome.com/33e751bc34.js" crossOrigin="anonymous"></script>
      </head>
      <body className={open_sans.className}>
        <div className='container'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
