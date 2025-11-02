import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ava M.',
    text: 'Absolutely phenomenal! They transformed my apartment in under 3 hours. Smelled amazing and looked brand new.',
  },
  {
    name: 'Daniel P.',
    text: 'We use them weekly for our office. Professional, punctual, and extremely thorough every time.',
  },
  {
    name: 'Priya S.',
    text: 'Loved the eco-friendly products. My pets had zero issues and the place is spotless!',
  },
]

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What customers say</h2>
          <p className="mt-3 text-lg text-gray-600">Thousands of happy homes and offices—here are a few highlights.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <Stars />
              <p className="mt-3 text-gray-700">“{t.text}”</p>
              <p className="mt-3 text-sm font-semibold text-gray-900">{t.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-center gap-4">
          <a href="#services" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-white shadow-lg transition hover:bg-black/90">Get your custom quote</a>
          <p className="text-sm text-gray-500">No hidden fees. Cancel anytime.</p>
        </div>
      </div>
    </section>
  )
}
