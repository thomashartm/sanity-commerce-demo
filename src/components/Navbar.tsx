import Link from 'next/link'
import Image from 'next/image'

export interface NavbarLink {
  label: string
  href: string
  requiresAuth?: boolean
}

export interface NavbarProps {
  logoUrl?: string
  links: NavbarLink[]
}

export default function Navbar({ logoUrl, links }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div>
        {logoUrl && (
          <Image src={logoUrl} alt="logo" width={32} height={32} className="h-8 w-8" />
        )}
      </div>
      <ul className="flex gap-4">
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
