export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  heading: string
  links: FooterLink[]
}

export interface FooterProps {
  columns: FooterColumn[]
}

export default function Footer({ columns }: FooterProps) {
  return (
    <footer className="border-t p-4 mt-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {columns.map(col => (
          <div key={col.heading}>
            <h4 className="font-bold mb-2">{col.heading}</h4>
            <ul className="space-y-1 text-sm">
              {col.links.map(link => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
