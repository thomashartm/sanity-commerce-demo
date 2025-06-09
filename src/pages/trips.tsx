import type { GetStaticProps } from 'next'
import TripGrid, { TripItem } from '../components/TripGrid'
import { fetchSanity } from '../lib/sanity'
import withAuth from '../components/withAuth'

interface TripsProps {
  trips: TripItem[]
}

function Trips({ trips }: TripsProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Trips</h1>
      <TripGrid trips={trips} />
    </div>
  )
}

export default withAuth(Trips)

export const getStaticProps: GetStaticProps<TripsProps> = async () => {
  const trips = await fetchSanity(`*[_type == "trip"]{_id, title, 'slug': slug.current, duration, price, 'image': images[0].asset->url}`)
  return { props: { trips } }
}
