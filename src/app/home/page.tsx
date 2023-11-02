import Hero from '@/components/Hero'
import Search from '@/components/Search'
import Cta from '@/components/Cta'
import Cts from '@/components/Cts'
import Rec from '@/components/Rec'

export default function Home() {
  return (
    <div className=' max-w-screen-2xl mx-auto'>
      <Hero />
      <Search />
      <Cta />
      <Cts />
      <Rec />
    </div>
  )
}
