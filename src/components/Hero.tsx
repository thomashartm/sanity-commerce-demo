import Image from 'next/image'

export interface HeroProps {
  mediaSrc: string
  type?: 'image' | 'video'
  title: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
}

export default function Hero({ mediaSrc, type = 'image', title, subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <section className="text-center py-16 bg-gray-100">
      {type === 'image' ? (
        <Image src={mediaSrc} alt={title} width={1200} height={500} className="w-full h-auto" />
      ) : (
        <video src={mediaSrc} className="w-full" autoPlay muted loop />
      )}
      <h1 className="text-3xl font-bold mt-4">{title}</h1>
      {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
      {ctaText && ctaLink && (
        <a href={ctaLink} className="inline-block mt-4 px-4 py-2 bg-black text-white">
          {ctaText}
        </a>
      )}
    </section>
  )
}
