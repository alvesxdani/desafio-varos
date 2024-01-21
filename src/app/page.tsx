import Header from '@/Components/Header'
import Newsletter from '@/Components/Newsletter'
import Conteudos from '@/Components/Sections/Conteudos'
import Intro from '@/Components/Sections/Intro'
import Marketing from '@/Components/Sections/Marketing'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Conteudos />
        <Marketing />
        <Newsletter />
      </main>
    </>
  )
}
