import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-24 text-gray-300">
      <div className="container mx-auto px-4 max-w-6xl">


        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-white">DigiTools</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>

          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-xs">Products</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-violet-400 transition-colors">AI Writer</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Design Kit</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Stock Assets</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Workflows</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-violet-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Press</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-violet-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Contact</a></li>
            </ul>
          </div>

            <div className="flex gap-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-widest text-xs">Social Links</h3>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </a>
            </div>
        </div>

        <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-gray-500 uppercase tracking-widest">
          <p>© 2026 DigiTools Inc. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
