import { Home, Building2, Leaf, Clock } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Home Cleaning',
    desc: 'Thorough room-by-room cleaning with attention to detail for kitchens, bathrooms, and living spaces.',
  },
  {
    icon: Building2,
    title: 'Office Cleaning',
    desc: 'Reliable after-hours or daytime service to keep your workplace spotless and productive.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    desc: 'Non-toxic, plant-based products that are safe for families, pets, and the planet.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    desc: 'One-time deep cleans or recurring weekly/bi-weekly plans tailored to your routine.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-3 text-lg text-gray-600">Choose the plan that fits your space. Every option includes top-quality supplies and a friendly team.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/40 p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-emerald-100/60 blur-2xl transition group-hover:bg-emerald-200/70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
