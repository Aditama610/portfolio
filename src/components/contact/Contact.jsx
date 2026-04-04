import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

function Contact() {

  // 🔥 fungsi salam otomatis
  const getGreeting = () => {
    const hour = new Date().getHours()

    if (hour >= 4 && hour < 11) return "Selamat pagi"
    if (hour >= 11 && hour < 15) return "Selamat siang"
    if (hour >= 15 && hour < 18) return "Selamat sore"
    return "Selamat malam"
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const email = e.target.email.value
    const message = e.target.message.value

    const phoneNumber = "6283838377315"

    const text = encodeURIComponent(
`${getGreeting()}, saya ${name}.
Saya menghubungi Anda melalui website portfolio.

Email: ${email}
Pesan: ${message}

Terima kasih`
    )

    const url = `https://wa.me/${phoneNumber}?text=${text}`

    window.open(url, "_blank")

    e.target.reset()
  }

  return (
    <section id="contact">
      <h3>Get In Touch</h3>
      <h1>Contact Me</h1>

      <div className="container contact__container">

        {/* OPTIONS */}
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>aditamamuhammad8@gmail.com</h5>
            <a href="mailto:aditamamuhammad8@gmail.com">
              Send Email
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+62 838-3837-7315</h5>
            <a
              href="https://wa.me/6283838377315"
              target="_blank"
              rel="noreferrer"
            >
              Chat Now
            </a>
          </article>

        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="contact__form">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message here..."
            required
          />

          <button type="submit" className="btn btn-primary">
            Send via WhatsApp
          </button>

        </form>

      </div>
    </section>
  )
}

export default Contact