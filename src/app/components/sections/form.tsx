"use client"
import { FormEvent, useState } from "react"
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline"

const inputClass =
  "w-full bg-transparent border-b-2 border-green-800 focus:border-amber-400 outline-none py-2 text-green-950 placeholder-green-900/40 transition-colors duration-200"

const labelClass = "block text-xs font-semibold tracking-widest text-green-800 uppercase mb-1"

export const ContactForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName]   = useState('')
    const [email, setEmail]         = useState('')
    const [message, setMessage]     = useState('')
    const [loading, setLoading]     = useState(false)
    const [feedback, setFeedback]   = useState<{ ok: boolean; text: string } | null>(null)

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setFeedback(null)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: `${firstName} ${lastName}`,
                    email,
                    message,
                }),
            })
            const result = await res.json()
            if (result.ok) {
                setFeedback({ ok: true, text: 'Mesajınız başarıyla gönderildi!' })
                setFirstName(''); setLastName(''); setEmail(''); setMessage('')
            } else {
                setFeedback({ ok: false, text: result.error ?? 'Bir hata oluştu.' })
            }
        } catch {
            setFeedback({ ok: false, text: 'Ağ hatası, lütfen tekrar deneyin.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="min-h-screen bg-amber-50 flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden">

                {/* Left panel */}
                <div className="bg-green-950 text-amber-50 px-10 py-14 flex flex-col justify-between">
                    <div>
                        <p
                            className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-3"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Bize Ulaşın
                        </p>
                        <h2
                            className="text-3xl md:text-4xl font-extrabold leading-tight mb-6"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                            Hayalin için<br />ilk adımı at.
                        </h2>
                        <p
                            className="text-amber-100/80 text-sm leading-relaxed max-w-xs"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Almanya'da eğitim sürecin hakkında aklındaki tüm soruları bize iletebilirsin. En kısa sürede dönüş yapacağız.
                        </p>
                    </div>

                    {/* Contact details */}
                    <ul className="mt-12 space-y-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-center gap-3 text-sm text-amber-100/90">
                            <EnvelopeIcon className="w-5 h-5 text-amber-400 flex-shrink-0" />
                            antonizarifoglu15@gmail.com
                        </li>
                        <li className="flex items-center gap-3 text-sm text-amber-100/90">
                            <PhoneIcon className="w-5 h-5 text-amber-400 flex-shrink-0" />
                            +49 151 10443088
                        </li>
                        <li className="flex items-center gap-3 text-sm text-amber-100/90">
                            <MapPinIcon className="w-5 h-5 text-amber-400 flex-shrink-0" />
                            Darmstadt, Almanya
                        </li>
                    </ul>
                </div>

                {/* Right panel — form */}
                <div className="bg-white px-10 py-14">
                    <h3
                        className="text-2xl font-bold text-green-950 mb-8"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Mesaj Gönder
                    </h3>

                    <form onSubmit={onSubmit} className="flex flex-col gap-8">

                        {/* Name row */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className={labelClass}
                                    style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Ad
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    required
                                    placeholder="Adınız"
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                    className={inputClass}
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className={labelClass}
                                    style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Soyad
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    required
                                    placeholder="Soyadınız"
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                    className={inputClass}
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className={labelClass}
                                style={{ fontFamily: "'Inter', sans-serif" }}>
                                E-posta Adresi
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder="ornek@email.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className={inputClass}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className={labelClass}
                                style={{ fontFamily: "'Inter', sans-serif" }}>
                                Mesajınız
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={5}
                                placeholder="Size nasıl yardımcı olabiliriz?"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                className={`${inputClass} resize-none`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            />
                        </div>

                        {/* Feedback */}
                        {feedback && (
                            <p
                                className={`text-sm font-medium ${feedback.ok ? "text-emerald-600" : "text-red-500"}`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                {feedback.text}
                            </p>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-2 w-full py-3 rounded-xl bg-green-950 text-white font-bold tracking-wide hover:bg-amber-400 hover:text-green-950 transition-colors duration-300 disabled:opacity-60"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                            {loading ? 'Gönderiliyor...' : 'Gönder'}
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}
