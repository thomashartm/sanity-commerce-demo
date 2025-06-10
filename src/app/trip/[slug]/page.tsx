import Image from 'next/image'
import { notFound } from 'next/navigation'
import { fetchSanity } from '../../../lib/sanity'

interface Trip {
  title: string
  overview: unknown
  images?: { asset: { url: string } }[]
}

export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await fetchSanity(
    `*[_type == "trip"]{ slug }`
  )
  return slugs.map((s) => ({ slug: s.slug.current }))
}

export default async function TripDetail({ params }: { params: { slug: string } }) {
  const trip = await fetchSanity<Trip | null>(
    `*[_type == "trip" && slug.current == $slug][0]`,
    { slug: params.slug }
  )
  if (!trip) return notFound()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{trip.title}</h1>
      {trip.images?.[0] && (
        <Image src={trip.images[0].asset.url} alt={trip.title} width={800} height={400} />
      )}
    </div>
  )
}
