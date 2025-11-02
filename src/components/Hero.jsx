import { Sparkles, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-emerald-50" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-24 sm:pb-28 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-emerald-700 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Premium home & office cleaning</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Effortless Cleaning, Immaculate Spaces
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-gray-600">
              Book trusted professionals in minutes. Eco-friendly products, flexible scheduling, and a 100% satisfaction guarantee.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#services" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                Book a Cleaning
              </a>
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-800 shadow-sm transition hover:bg-gray-50">
                <Phone className="h-5 w-5 text-emerald-600" />
                <span>Call us: (123) 456-7890</span>
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                Same-day availability
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                Insured & vetted pros
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-2xl shadow-emerald-600/10 lg:max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1400&auto=format&fit=crop"
                alt="Professional cleaner making a home sparkle"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-white/90 p-3 text-center shadow">
                  <p className="text-2xl font-bold text-gray-900">4.9★</p>
                  <p className="text-xs text-gray-500">2k+ reviews</p>
                </div>
                <div className="rounded-xl bg-white/90 p-3 text-center shadow">
                  <p className="text-2xl font-bold text-gray-900">24h</p>
                  <p className="text-xs text-gray-500">Turnaround</p>
                </div>
                <div className="rounded-xl bg-white/90 p-3 text-center shadow">
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-xs text-gray-500">Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-[120%] -translate-x-1/2 bg-[radial-gradient(closest-side,_#34d399_30%,_transparent)] opacity-20" />
    </section>
  )
}
