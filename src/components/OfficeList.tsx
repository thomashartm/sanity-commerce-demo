export interface OfficeLocation {
  name: string
  address: string
  mapUrl: string
}

export interface OfficeListProps {
  locations: OfficeLocation[]
}

export default function OfficeList({ locations }: OfficeListProps) {
  return (
    <div className="space-y-4">
      {locations.map(loc => (
        <div key={loc.name} className="border p-4 rounded">
          <h4 className="font-semibold">{loc.name}</h4>
          <p>{loc.address}</p>
          <a href={loc.mapUrl} target="_blank" rel="noreferrer" className="text-blue-600 underline">
            Map
          </a>
        </div>
      ))}
    </div>
  )
}
