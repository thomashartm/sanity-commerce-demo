import type { GetStaticProps } from 'next'
import { fetchSanity } from '../lib/sanity'
import ContactForm, { ContactFormFields } from '../components/ContactForm'
import OfficeList, { OfficeLocation } from '../components/OfficeList'

interface ContactPageProps {
  title: string
  contactText: unknown
  offices: OfficeLocation[]
}

export default function ContactPage({ title, offices }: ContactPageProps) {
  function handleSubmit(fields: ContactFormFields) {
    console.log('send', fields)
  }
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <OfficeList locations={offices} />
      <ContactForm onSubmit={handleSubmit} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<ContactPageProps> = async () => {
  const data = await fetchSanity<{
    title: string
    contactText: unknown
    officeLocations: { name: string; address: string; mapEmbedUrl: string }[]
  }>(`*[_type == "contactPage"][0]{title,contactText,officeLocations}`)

  const offices: OfficeLocation[] = data.officeLocations?.map(loc => ({
    name: loc.name,
    address: loc.address,
    mapUrl: loc.mapEmbedUrl
  })) || []

  return { props: { title: data.title, contactText: data.contactText, offices } }
}
