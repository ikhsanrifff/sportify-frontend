import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Home from './home/page'
import { Header,Footer } from '../components'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neuron Sportify',
  description: 'providing the best sports field rental places by PT.Neuronworks Indonesia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
