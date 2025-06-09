import type { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { fetchSanity } from '../../lib/sanity'
import Image from 'next/image'

interface TripDetailProps {
  trip: {
    title: string
    overview: unknown
    images: { asset: { url: string } }[]
  }
}

export default function TripDetail({ trip }: TripDetailProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{trip.title}</h1>
      {trip.images?.[0] && (
        <Image src={trip.images[0].asset.url} alt={trip.title} width={800} height={400} />
      )}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: { slug: { current: string } }[] = await fetchSanity(`*[_type == "trip"]{ slug }`)
  return {
    paths: slugs.map(s => ({ params: { slug: s.slug.current } })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<TripDetailProps> = async ({ params }) => {
  const slug = params?.slug as string
  const trip = await fetchSanity(`*[_type == "trip" && slug.current == $slug][0]`, { slug })
  return { props: { trip } }
}
