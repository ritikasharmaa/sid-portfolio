export default function Hero() {
  return (
    <section className="hero">
      <div className="heroInner">
        {/* LEFT IMAGE */}
        <div className="heroImageWrap">
          <img src="/images/profile.png" alt="profile" />
        </div>

        {/* RIGHT TEXT */}
        <div className="heroContent">
          <h1>
            Content Creator, Editor,
            <br />
            and Storytelling Enthusiast
          </h1>

          <p>
            Experienced content creator specializing in brand storytelling,
            video editing, and engaging social media content. Creating for
            humans, not algorithms.
          </p>

          <h3>Always human created, never AI generated.</h3>
        </div>
      </div>
    </section>
  );
}
