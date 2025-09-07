import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Portfolio from '@/components/portfolio'
import Services from '@/components/services'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import ScrollProgress from '@/components/scroll-progress'
import PWAInstall from '@/components/pwa-install'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollProgress />
      <PWAInstall />
    </div>
  );
}
