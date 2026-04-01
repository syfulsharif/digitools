import { PlayCircle } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-600 px-4 py-2 rounded-full font-medium border border-violet-100">
            <span className="w-2 h-2 bg-violet-600 rounded-full animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary h-14 px-8 rounded-xl shadow-lg shadow-violet-200">
              Explore Products
            </button>
            <button className="btn bg-white hover:bg-gray-50 text-gray-900 border-gray-200 h-14 px-8 rounded-xl flex items-center gap-2 shadow-sm font-bold border-2">
              <PlayCircle className="w-6 h-6 text-violet-600" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 top-0 bg-violet-600/5 rounded-[40px] rotate-3 -z-10 translate-x-4 translate-y-4"></div>
          <img
            src="/assets/banner.png"
            alt="Digital Workflow AI"
            className="w-full h-auto rounded-[32px] shadow-2xl border-white border-2 hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
