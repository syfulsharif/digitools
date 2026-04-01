const Stats = () => {
  const stats = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Premium Tools', value: '200+' },
    { label: 'Rating', value: '4.9' },
  ]

  return (
    <section className="bg-violet-600 py-12 md:py-16 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-center gap-12 relative z-10">
        {stats.map((stat, index) => (
          <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-t from-white/80 to-white bg-clip-text text-transparent">
              {stat.value}
            </h2>
            <p className="text-violet-100 text-lg font-medium opacity-80 group-hover:opacity-100 transition-opacity">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
