import TripGrid, { TripItem } from '../../components/TripGrid'
import { fetchSanity } from '../../lib/sanity'

export default async function Trips() {
  const trips = await fetchSanity<TripItem[]>(
    `*[_type == "trip"]{_id, title, 'slug': slug.current, duration, price, 'image': images[0].asset->url}`
  )
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Trips</h1>
      <TripGrid trips={trips} />
    </div>
  )
}
