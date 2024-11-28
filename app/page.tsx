'use client'


import { useState } from 'react'

export default function Component() {
  const [hasRegistered, setHasRegistered] = useState(false)
  const [email, setEmail] = useState('')

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would connect to a registration system
    setHasRegistered(true)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-[#FFF6E5] text-gray-800 px-4 py-8 md:py-16 font-mono">
      {/* Header */}
      <div className="max-w-2xl mx-auto border-4 border-amber-900 p-8 bg-white/70 backdrop-blur-sm">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-900 font-serif">
          minifest '24
        </h1>
        <div className="text-lg text-amber-800 mb-8 border-b-2 border-amber-200 pb-4">
          December 14, 2024 • Lighthaven, Berkeley
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="bg-amber-50 p-6 border-2 border-amber-200 shadow-[4px_4px_0px_0px_rgba(146,64,14,1)]">
            <h2 className="font-semibold mb-2">What</h2>
            <p>A cozy one-day festival celebrating prediction markets, blogging, economics, and startups</p>
          </div>
          <div className="bg-amber-50 p-6 border-2 border-amber-200 shadow-[4px_4px_0px_0px_rgba(146,64,14,1)]">
            <h2 className="font-semibold mb-2">Who</h2>
            <p>~200 wonderful people from the Manifest community and beyond</p>
          </div>
        </div>

        {/* Main Letter */}
        <div className="prose prose-amber max-w-none mb-12 [&>div]:leading-relaxed">
          <div className="bg-white p-8 border-2 border-amber-200 shadow-[4px_4px_0px_0px_rgba(146,64,14,1)]">
            <p className="text-lg mb-4">Hey!</p>
            
            <p className="mb-4">
              Austin here - thanks for coming to Manifest this year. It's been nearly half a year, 
              and we've been keeping busy, but I still sometimes miss being surrounded with my 
              favorite people in the world, gathered together to indulge in our shared love of 
              prediction markets.
            </p>

            <p className="mb-4">
              We've started thinking about Manifest 2025 (tentatively June 6-8, mark your calendars!); 
              but in the meantime, I was wondering... why should we be limited to gathering once a year? 
              There's no law that says festivals can only occur annually, and I sure would like to see 
              y'all more often than that. Unfortunately, a proper Manifest takes us a ton of time & 
              energy to coordinate: logistics, speakers, sponsors. What would a more minimal festival 
              look like?
            </p>

            <p className="mb-4">
              And so: minifest! We've booked out Lighthaven for a single day, Dec 14. We'll have 
              unconference-style sessions, a smattering of events like charity poker, and ample time 
              to hang out and chat. We're running this on a shoestring budget (expect a homecooked 
              dinner instead of catering) so that everyone can come. It'll be a cozy, lowkey, 
              experimental version of the Manifest you know and love.
            </p>

            <p className="italic">Hope to see you there~<br />- Austin</p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-amber-100 p-8 border-2 border-amber-900 shadow-[8px_8px_0px_0px_rgba(146,64,14,1)]">
          {hasRegistered ? (
            <div className="text-center text-amber-900">
              <h3 className="text-xl font-semibold mb-2">Thanks for registering!</h3>
              <p>We'll be in touch with more details soon.</p>
            </div>
          ) : (
            <form onSubmit={handleRegistration} className="space-y-4">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">
                Register Interest
              </h3>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full p-3 border-2 border-amber-300 bg-white focus:outline-none focus:border-amber-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-800 text-white py-3 px-6 border-2 border-amber-900 shadow-[4px_4px_0px_0px_rgba(146,64,14,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(146,64,14,1)] transition-all"
              >
                Get Notified About Tickets
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-amber-700 text-sm border-t-2 border-amber-200 pt-4">
          <p>A cozy gathering by the Manifest team</p>
        </footer>
      </div>
    </div>
  )
}
