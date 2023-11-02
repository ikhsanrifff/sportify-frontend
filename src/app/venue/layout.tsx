import React from 'react'
import { Roboto } from 'next/font/google'
import Header from '@/components/Header'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

export default function VenueLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}