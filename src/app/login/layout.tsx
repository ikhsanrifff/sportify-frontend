import React from 'react'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html>
        <body className={inter.className}>
          <Header />
          {children}
          </body>
      </html>
    )
  }