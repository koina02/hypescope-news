import Image from "next/image";
import { Geist, Geist_Mono, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${inter.variable} ${geistMono.variable} min-h-screen bg-white text-gray-900`}>
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image 
              src="/logo.svg" 
              alt="Hypescope News" 
              width={40} 
              height={40}
              className="h-10 w-10"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="font-medium hover:text-orange-600 transition">Features</a>
            <a href="#articles" className="font-medium hover:text-orange-600 transition">Articles</a>
            <a href="#newsletter" className="font-medium hover:text-orange-600 transition">Newsletter</a>
            <a href="#about" className="font-medium hover:text-orange-600 transition">About</a>
          </nav>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-white/80 z-10"></div>
          <Image
            src="/tech-hero.jpg"
            alt="Tech background"
            width={1920}
            height={1080}
            className="w-full h-[600px] object-cover"
            priority
          />
          <div className="container mx-auto px-4 relative z-20 -mt-96">
            <div className="max-w-2xl bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-4xl font-bold mb-4">Cutting-edge tech insights delivered daily</h2>
              <p className="text-lg text-gray-600 mb-6">
                Stay ahead with our in-depth coverage of AI, cybersecurity, and emerging technologies shaping our future.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#articles"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition"
                >
                  Read Latest Articles
                </a>
                <a
                  href="#newsletter"
                  className="border border-gray-300 hover:border-orange-600 text-gray-700 font-medium py-3 px-6 rounded-lg transition"
                >
                  Join Newsletter
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Hypescope</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Analysis",
                  desc: "Our team of industry veterans breaks down complex topics into actionable insights.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  image: "data:image/jpeg;base64,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"
                },
                {
                  title: "Timely Updates",
                  desc: "Get breaking news and daily updates from the frontlines of technology.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  image: "data:image/png;base64,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"
                },
                {
                  title: "Community Focused",
                  desc: "Join discussions with fellow tech enthusiasts and industry professionals.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  image: "data:image/png;base64,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"
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                  <div className="h-48 relative">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section id="articles" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Latest Articles</h2>
              <a href="#" className="text-orange-600 font-medium hover:underline">View All</a>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "The Future of Quantum Computing in Cybersecurity",
                  excerpt: "Exploring how quantum-resistant algorithms are being developed to protect our digital future.",
                  category: "Cybersecurity",
                  date: "May 15, 2023",
                  image: "/article-1.jpg"
                },
                {
                  title: "Generative AI: Beyond the Hype",
                  excerpt: "Practical applications of generative AI that are transforming industries today.",
                  category: "Artificial Intelligence",
                  date: "May 12, 2023",
                  image: "/article-2.jpg"
                },
                {
                  title: "The Rise of Edge Computing in IoT",
                  excerpt: "How processing data at the edge is solving latency and bandwidth challenges.",
                  category: "Emerging Tech",
                  date: "May 10, 2023",
                  image: "/article-3.jpg"
                },
              ].map((article, index) => (
                <article key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                  <div className="h-48 relative">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full mb-3">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{article.date}</span>
                      <a href="#" className="text-orange-600 hover:underline">Read More</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletter" className="py-20 bg-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-8">
                Get the latest tech news and insights delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-orange-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm mt-4 text-orange-100">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/team.jpg"
                    alt="Hypescope team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">About Hypescope News</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Founded in 2020, Hypescope News has grown from a small tech blog to a trusted source for technology news and analysis.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our team of journalists, engineers, and industry experts work together to bring you accurate, insightful, and actionable tech coverage.
                </p>
                <a
                  href="#"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition"
                >
                  Meet Our Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image 
                  src="/logo-white.svg" 
                  alt="Hypescope News" 
                  width={32} 
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <p className="text-gray-400">
                Bringing you the latest in technology news and analysis.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Sections</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">AI</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Cybersecurity</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Emerging Tech</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Opinion</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.058 1.023-.057 1.351-.057 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748 1.15.343.353.882.3 1.857.344 1.023.048 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.058-1.023.057-1.351.057-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2023 Hypescope News. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}