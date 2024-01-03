import Topbar from "./Topbar"

function Contact() {  
  return (
    <div className="contact">
      <div className="up">
        <div>
          <h2>Contact</h2>
          <p>I would love to hear about your project and how I could help. Please fill in the form, and I&apos;ll get back to you as soon as possible.</p>
        </div>
        <form className="contact-form">
          <input
            className="form__input"
            type="text"
            name="name"
            id="name"
            placeholder="NAME"
            aria-label="Name"
            aria-required="true"
          />
          <input
            className="form__input"
            type="email"
            name="email"
            id="email"
            placeholder="EMAIL"
            aria-label="Email"
            aria-required="true"
          />
          <textarea
            className="form__input form__textarea"
            name="message"
            id="message"
            placeholder="MESSAGE"
            aria-label="Message"
            aria-required="true"
            rows={5}
          />

          <button type="submit" className="form__button">
            Send Message
          </button>
        </form>
      </div>
      <br />
      <br />
      <Topbar />
    </div>
  )
}

export default Contact