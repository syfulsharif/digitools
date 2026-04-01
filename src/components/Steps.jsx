import { UserPlus, PackageSearch, Zap } from 'lucide-react'

const Steps = () => {
  const steps = [
    { title: 'Create Account', description: 'Join our community of 50K+ creators and start your journey.', icon: UserPlus },
    { title: 'Choose Products', description: 'Browse and select the tools that fit your needs and workflow.', icon: PackageSearch },
    { title: 'Start Creating', description: 'Instantly download and access your tools to boost productivity.', icon: Zap },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 px-4">
          Get Started In 3 Steps
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector lines (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-violet-100 -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-6 flex flex-col items-center group">
              <div className="relative">
                <div className="w-28 h-28 bg-violet-50 rounded-full flex items-center justify-center border-4 border-white shadow-xl shadow-violet-100 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                  <step.icon className="w-12 h-12 text-violet-600 group-hover:text-white transition-colors" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-violet-600 rounded-full text-white font-black flex items-center justify-center border-4 border-white shadow-lg text-sm">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-gray-900">{step.title}</h4>
                <p className="text-gray-500 max-w-[250px] mx-auto text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps
