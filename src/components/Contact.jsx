import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! Your message has been received.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input required name="name" placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input required type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea required name="message" placeholder="Message" rows="5" className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button className="px-5 py-3 rounded-lg bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/25 hover:bg-blue-400 transition-colors">
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-green-300">{status}</p>}
      </div>
    </section>
  )
}
