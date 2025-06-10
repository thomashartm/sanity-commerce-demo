import Hero from '../components/Hero'
import { fetchSanity } from '../lib/sanity'

export default async function Home() {
  const data = await fetchSanity<{ heroHeadline?: string }>(
    `*[_type == "companyProfile"][0]{heroHeadline}`
  )
  const heroTitle = data?.heroHeadline || 'Welcome'
  return (
    <div>
      <Hero mediaSrc="/hero.jpg" title={heroTitle} />
    </div>
  )
}
