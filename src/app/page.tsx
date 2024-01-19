import Header from '@/Components/Header'
import Conteudos from '@/Components/Sections/Conteudos'
import Intro from '@/Components/Sections/Intro'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Conteudos />
      </main>
    </>
  )
}
