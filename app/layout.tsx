import Script from 'next/script'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import './globals.css'

export const metadata = {
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'Octavia Antonya Cephas Portfolio',
    description: 'As a specialist in investment portfolios, Octavia Antonya Cephas (CRD#6992798) employs consistent and intelligent trading strategies to help build your investments. Learn more about her expertise in trading strategies for building wealth.',
    url: '%PUBLIC_URL%/',
    siteName: 'Octavia Antonya Cephas Portfolio',
    images: [
      {
        url: 'https://bit.ly/3RmMhV8',
        width: 800,
        height: 600,
      },
      {
        url: 'https://bit.ly/3RmMhV8',
        width: 1800,
        height: 1600,
        alt: 'Octavia Antonya Cephas',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  title: 'Octavia Antonya Cephas Portfolio',
  description: 'As a specialist in investment portfolios, Octavia Antonya Cephas (CRD#6992798) employs consistent and intelligent trading strategies to help build your investments. Learn more about her expertise in trading strategies for building wealth.',
  verification: {
    google: 'google',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src="//code.tidio.co/evk8po3aooesrvx8uuzklv4lpyuwcudr.js" async />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
