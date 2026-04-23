import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space'
})

export const metadata: Metadata = {
  title: 'SDW | Soluciones Tecnologicas - Sistemas de Informacion a la Medida',
  description: 'SDW es una empresa colombiana especializada en desarrollo de software, aplicaciones web, moviles y soluciones tecnologicas empresariales. Optimizamos la logistica y los procesos empresariales.',
  keywords: 'SDW, soluciones tecnologicas, desarrollo software, aplicaciones web, Colombia, Bogota, sistemas empresariales',
  authors: [{ name: 'SDW Soluciones Tecnologicas' }],
  openGraph: {
    title: 'SDW | Soluciones Tecnologicas',
    description: 'Tecnologia que optimiza la logistica y los procesos empresariales',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
