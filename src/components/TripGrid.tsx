import Link from 'next/link'
import Image from 'next/image'

export interface TripItem {
  _id: string
  title: string
  slug: string
  image?: string
  duration?: number
  price?: number
}

export interface TripGridProps {
  trips: TripItem[]
}

export default function TripGrid({ trips }: TripGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {trips.map(trip => (
        <Link key={trip._id} href={`/trip/${trip.slug}`}
          className="border rounded p-4 flex flex-col items-start">
          {trip.image && (
            <Image src={trip.image} alt={trip.title} width={400} height={250} className="w-full" />
          )}
          <h3 className="text-lg font-semibold mt-2">{trip.title}</h3>
          {trip.duration && <p>{trip.duration} days</p>}
          {trip.price && <p>${trip.price}</p>}
        </Link>
      ))}
    </div>
  )
}
