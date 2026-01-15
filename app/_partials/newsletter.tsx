"use client"
import { useState } from 'react'

const Newsletter = () => {
    const [showNewsletter, setShowNewsletter] = useState(false)
  
    // useEffect(() => {
    //   const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    //   setCurrentQuote(randomQuote)
    // }, [])
    
    const newsletter = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setShowNewsletter(true)
    }
  return (
 <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden rounded-2xl mt-6 py-6 mx-20 shadow-2xl">
        {/* Background image */}
        <img
          src="/theme/newsletter.png"
          alt="Newsletter Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-snug drop-shadow-lg text-center">
            Subscribe To <br />
            Our <span className="italic font-serif text-yellow-400">Newsletter</span>
          </h2>
          <form
            action="/newsLetter"
            method="post"
            className="flex items-center justify-center mt-8 w-full max-w-xl mx-auto"
          >
            <input
              type="email"
              name="newsletter"
              id="newsletter"
              required
              placeholder="Enter your email"
              className="flex-1 pl-5 py-3 rounded-l-full bg-white/80 text-slate-800 placeholder-slate-400 border-2 border-white focus:border-yellow-400 focus:outline-none shadow transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-r-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-teal-900 font-bold uppercase tracking-wide border-2 border-white border-l-0 shadow hover:from-yellow-500 hover:to-yellow-600 transition-all cursor-pointer"
            >
              Subscribe
            </button>
          </form>

          <button 
            className="mt-8 inline-flex uppercase items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-800 font-semibold px-6 sm:px-10 py-2 sm:py-3 rounded-full transition-all duration-300 shadow-lg"
            onClick={newsletter}>
            LEARN MORE
            <svg className="ml-2 w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        {/* Newsletter Modal */}
        {showNewsletter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
              <button
                className="absolute top-4 right-4 text-slate-400 hover:text-red-500 text-2xl"
                onClick={() => setShowNewsletter(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="text-3xl font-bold text-purple-700 mb-4 text-center">Newsletter Preview</h3>
              <div className="text-slate-700 space-y-4">
                <p>
                  <span className="font-semibold text-purple-600">Welcome to VibeCare&apos;s Emotional Wellness Newsletter!</span>
                </p>
                <p>
                  Each week, you’ll receive:
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li><span className="font-medium text-blue-600">Motivational Quotes</span> to inspire your day</li>
                    <li><span className="font-medium text-green-600">Science-backed tips</span> for emotional health</li>
                    <li><span className="font-medium text-pink-600">Exclusive exercises</span> for mindfulness and self-care</li>
                    <li><span className="font-medium text-yellow-600">Early access</span> to new features and resources</li>
                    <li><span className="font-medium text-indigo-600">Community stories</span> and expert advice</li>
                  </ul>
                </p>
                <p>
                  <span className="font-semibold text-purple-600">What to expect:</span> <br />
                  Our newsletter is designed to help you reconnect with your mind, your feelings, and the people around you. We keep it short, practical, and uplifting—delivered straight to your inbox every week.
                </p>
                <p className="italic text-slate-500">
                  You can unsubscribe at any time. Your privacy is always respected.
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow transition-all"
                  onClick={() => setShowNewsletter(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
  )}

export default Newsletter