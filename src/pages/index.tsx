import type { GetStaticProps } from 'next'
import Hero from '../components/Hero'
import { fetchSanity } from '../lib/sanity'

interface HomeProps {
  heroTitle: string
}

export default function Home({ heroTitle }: HomeProps) {
  return (
    <div>
      <Hero mediaSrc="/hero.jpg" title={heroTitle} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const data = await fetchSanity(`*[_type == "companyProfile"][0]{heroHeadline}`)
  return { props: { heroTitle: data?.heroHeadline || 'Welcome' } }
}
