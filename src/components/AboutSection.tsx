import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="aboutPage">
      <div className="aboutInner">
        {/* LEFT IMAGE */}
        <div className="aboutImage">
          <img src="/images/about.jpg" alt="About Siddharth" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="aboutContent">
          <h1>About Siddharth</h1>
          <p>
            I believe growth comes from learning, experimenting, and evolving.
            My journey across different experiences helped me understand
            creativity, clarity, and the power of structured thinking. Today, I
            create meaningful digital content through storytelling, strategy,
            and smart tools.
          </p>

          <p>
            I focus on content creation, video editing, and brand storytelling
            that connects emotionally with people. My goal is simple — create
            content that inspires, engages, and delivers real value.
          </p>

          {/* CONTACT */}
          <div className="aboutContact aboutContactCentered">
            <a href="mailto:sidsam60@gmail.com" className="emailBtn">
              <Mail size={18} />
            </a>
            <a href="tel:9888755520" className="contactIconBtn">
              <Phone size={18} />
            </a>
            <a
              href="https://www.instagram.com/zaaliiim_/"
              className="contactIconBtn"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://www.facebook.com/people/Zaaliiim/61577866562642/"
              className="contactIconBtn"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
