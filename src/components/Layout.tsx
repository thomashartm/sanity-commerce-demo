import { ReactNode } from 'react'
import Navbar, { NavbarLink } from './Navbar'
import Footer, { FooterColumn } from './Footer'

export interface LayoutProps {
  children: ReactNode
  navLinks: NavbarLink[]
  footer: FooterColumn[]
}

export default function Layout({ children, navLinks, footer }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar links={navLinks} />
      <main className="flex-1 container mx-auto p-4">{children}</main>
      <Footer columns={footer} />
    </div>
  )
}
