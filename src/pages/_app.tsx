import type { AppProps } from 'next/app'
import '../app/globals.css'
import Layout from '../components/Layout'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Trips', href: '/trips' },
  { label: 'Contact', href: '/contact' }
]

const footer = [
  { heading: 'Links', links: [
    { label: 'Home', href: '/' },
    { label: 'Trips', href: '/trips' },
    { label: 'Contact', href: '/contact' }
  ] }
]

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout navLinks={navLinks} footer={footer}>
      <Component {...pageProps} />
    </Layout>
  )
}
