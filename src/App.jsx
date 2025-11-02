import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-emerald-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-emerald-600" />
            <span className="font-semibold">GleamPro</span>
          </div>
          <nav className="hidden gap-8 text-sm text-gray-600 sm:flex">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#why" className="hover:text-gray-900">Why us</a>
            <a href="#testimonials" className="hover:text-gray-900">Reviews</a>
          </nav>
          <a href="#services" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700">Book now</a>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="why">
          <WhyChooseUs />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-500 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} GleamPro Cleaning. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
