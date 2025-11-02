import { ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react'

const points = [
  {
    icon: ShieldCheck,
    title: 'Trusted & Insured',
    desc: 'Background-checked pros with full liability insurance for your peace of mind.',
  },
  {
    icon: CheckCircle2,
    title: 'Satisfaction Guaranteed',
    desc: 'If you’re not thrilled, we’ll make it right. No questions asked.',
  },
  {
    icon: Sparkles,
    title: 'Consistently Sparkling',
    desc: 'Standardized checklists and quality audits ensure top-tier results every time.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-sky-600">
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(1200px_600px_at_70%_-20%,white,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose GleamPro</h2>
            <p className="mt-4 text-emerald-50/90">We combine professional-grade expertise with a thoughtful, eco-conscious approach—so your space feels as good as it looks.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {points.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl bg-white/10 p-5 shadow-sm ring-1 ring-white/20 backdrop-blur">
                  <Icon className="h-7 w-7 text-white" />
                  <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-emerald-50/90">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur lg:max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=1400&auto=format&fit=crop"
                alt="Shiny, freshly cleaned kitchen"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
