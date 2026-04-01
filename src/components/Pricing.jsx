import { CheckCircle2 } from 'lucide-react'

const Pricing = () => {
  const plans = [
    { name: 'Starter', price: '0', description: 'Perfect for exploring our platform and features.', features: ['3 basic tools', 'Community support', 'Basic assets'], button: 'Get Started Free', popular: false },
    { name: 'Pro', price: '29', description: 'Best for professionals and growing creators.', features: ['Unlimited tools', 'Priority support', 'Premium assets', 'AI features'], button: 'Start Pro Trial', popular: true },
    { name: 'Enterprise', price: '99', description: 'Custom solutions for teams and large projects.', features: ['Dedicated support', 'Custom templates', 'Team license', 'API access'], button: 'Contact Sales', popular: false },
  ]

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto px-4">
            Choose the plan that's right for your business. No hidden fees or long-term contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center lg:px-4">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`p-10 rounded-[40px] border transition-all duration-500 relative flex flex-col h-full ${
                plan.popular 
                  ? 'bg-violet-600 text-white border-violet-600 shadow-2xl shadow-violet-200 scale-105 z-10' 
                  : 'bg-white text-gray-900 border-gray-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-400 text-gray-900 px-6 py-1.5 rounded-full text-sm font-black uppercase tracking-widest shadow-lg shadow-amber-200">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10 space-y-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className={`text-sm leading-relaxed ${plan.popular ? 'text-violet-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-5xl font-black">${plan.price}</span>
                <span className={`text-sm font-medium ${plan.popular ? 'text-violet-100' : 'text-gray-400'}`}>/month</span>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className={`w-5 h-5 ${plan.popular ? 'text-amber-400' : 'text-violet-500'}`} />
                    <span className={plan.popular ? 'text-violet-50' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg ${
                plan.popular 
                  ? 'bg-white text-violet-600 hover:bg-amber-400 hover:text-gray-900 shadow-violet-800' 
                  : 'bg-violet-600 text-white hover:bg-white hover:text-violet-600 shadow-gray-200'
              }`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
