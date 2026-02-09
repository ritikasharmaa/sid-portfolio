import { Mail, Phone, Linkedin, Instagram, Facebook } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="contactPage">
      <div className="contactCard">
        <h1>Contact</h1>

        <p className="contactDesc">
          Let’s connect, collaborate, or build something meaningful together.
        </p>

        {/* CONTACT INFO */}
        <div className="contactInfo">
          <a href="tel:+919888755520" className="contactItem">
            <Phone size={18} />
            <span>+91 9888755520</span>
          </a>

          <a href="mailto:sidsam60@gmail.com" className="contactItem">
            <Mail size={18} />
            <span>sidsam60@gmail.com</span>
          </a>
        </div>

        {/* SOCIAL */}
        <div className="contactSocial">
          <a href="https://www.instagram.com/zaaliiim_/" target="_blank">
            <Instagram size={20} />
          </a>

          <a
            href="https://www.facebook.com/people/Zaaliiim/61577866562642/"
            target="_blank"
          >
            <Facebook size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/siddharth-sharma-975612160/"
            target="_blank"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
