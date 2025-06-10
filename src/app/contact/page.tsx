import ContactFormClient from '../../components/ContactFormClient'
import OfficeList, { OfficeLocation } from '../../components/OfficeList'
import { fetchSanity } from '../../lib/sanity'

export default async function ContactPage() {
  const data = await fetchSanity<{
    title: string
    contactText: unknown
    officeLocations: { name: string; address: string; mapEmbedUrl: string }[]
  }>(`*[_type == "contactPage"][0]{title,contactText,officeLocations}`)

  const offices: OfficeLocation[] = data.officeLocations?.map((loc) => ({
    name: loc.name,
    address: loc.address,
    mapUrl: loc.mapEmbedUrl,
  })) || []

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <OfficeList locations={offices} />
      <ContactFormClient />
    </div>
  )
}
