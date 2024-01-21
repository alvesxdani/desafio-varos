import Header from '@/Components/Header'
import Newsletter from '@/Components/Sections/Newsletter'
import Conteudos from '@/Components/Sections/Conteudos'
import Intro from '@/Components/Sections/Intro'
import Marketing from '@/Components/Sections/Marketing'
import Footer from '@/Components/Footer'

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
      <Footer />
    </>
  )
}
