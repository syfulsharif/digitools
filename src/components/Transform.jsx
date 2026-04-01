import React from 'react'

const Transform = () => {
  return (
    <section className="bg-violet-600 py-24 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-6xl text-center space-y-8 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Ready To Transform Your <span className="text-white/80">Workflow?</span>
        </h2>
        <p className="text-lg md:text-xl text-violet-100 max-w-2xl mx-auto font-medium">
          Join 50,000+ creators who are already supercharging their digital projects with our premium tools.
        </p>
        <button className="bg-white text-violet-600 hover:bg-gray-100 px-10 py-5 rounded-3xl font-black text-xl transition-all duration-300 shadow-xl shadow-black/10 active:scale-95">
          Get Started Now
        </button>
      </div>
    </section>
  )
}

export default Transform
