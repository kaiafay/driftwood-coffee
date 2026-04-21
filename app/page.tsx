import Nav from '@/components/nav'
import Hero from '@/components/hero'
import About from '@/components/about'
import Menu from '@/components/menu'
import Visit from '@/components/visit'
import Footer from '@/components/footer'
import ScrollReveal from '@/components/scroll-reveal'

export default function Page() {
  return (
    <main>
      <ScrollReveal />
      <Nav />
      <Hero />
      <About />
      <Menu />
      <Visit />
      <Footer />
    </main>
  )
}
