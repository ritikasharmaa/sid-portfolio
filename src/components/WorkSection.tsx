"use client";

const reels = [
  {
    url: "https://www.instagram.com/reel/DOyD9d1ku14/?igsh=bXE4emVqYTA3ZXY1",
    thumb: "/images/reels/work-reel1.jpeg",
  },
  {
    url: "https://www.instagram.com/reel/DSoYeguE0d6/",
    thumb: "/images/reels/work-reel2.jpeg",
  },
  {
    url: "https://www.instagram.com/reel/DEgf4lgzOZO/",
    thumb: "/images/reels/work-reel3.jpeg",
  },
  {
    url: "https://www.instagram.com/reel/DAOA8b6qnTT/",
    thumb: "/images/reels/work-reel4.jpeg",
  },
  {
    url: "https://www.instagram.com/reel/DSzTi5okw1K/?igsh=MWNkYzUxYjQ4emxkOQ%3D%3D",
    thumb: "/images/reels/work-reel5.jpeg",
  },
  {
    url: "https://www.instagram.com/reel/DO5zppekhN5/?igsh=M3AweWJxcnp1c20w",
    thumb: "/images/reel1.jpeg",
  },
];

/* CLIENT WORK DATA */

const clientReels = [
  {
    url: "https://www.instagram.com/reel/DRE32oZE3W5/",
    thumb: "/images/clients/client-work1.jpeg",
  },
  {
    url: "https://www.instagram.com/reel/DSXKiwZk_3b/",
    thumb: "/images/clients/client-work2.jpeg",
  },
  {
    url: "https://www.instagram.com/reel/DCYeArhq0jV/?igsh=MXE4c3h5OTZmZ2ZnMA%3D%3D",
    thumb: "/images/clients/client-work3.jpeg",
  },
  {
    url: "https://www.instagram.com/reel/DCrTxXoz3ZL/",
    thumb: "/images/clients/client-work4.jpeg",
  },
  {
    url: "https://www.instagram.com/reel/C_ZexNqqCdT/",
    thumb: "/images/clients/client-work5.jpeg",
  },
  {
    url: "https://www.instagram.com/reel/DQMRa-6EpJv/",
    thumb: "/images/reel2.jpeg",
  },
];

export default function WorkSection() {
  return (
    <section className="workPage">
      <div className="workHeader">
        <h1>Work</h1>
        <p>
          A collection of creative edits, brand collaborations, and social media
          growth work.
        </p>
      </div>

      <div className="workBlock">
        <h2>Featured Reels</h2>

        <div className="workGrid">
          {reels.map((r, i) => (
            <a key={i} href={r.url} target="_blank" className="workCard">
              <img src={r.thumb} alt="Reel" loading="lazy" />
              <div className="playOverlay">▶</div>
              <span>Instagram Reel</span>
            </a>
          ))}
        </div>
      </div>
      {/* CLIENT WORK */}

      <div className="workBlock">
        <h2>Client Work</h2>

        <p className="brandDesc">
          Professional content created for brands including video editing,
          storytelling, and engagement-focused execution.
        </p>

        <div className="workGrid">
          {clientReels.map((r, i) => (
            <a key={i} href={r.url} target="_blank" className="workCard">
              <img src={r.thumb} alt="Client Work" loading="lazy" />
              <div className="playOverlay">▶</div>
              <span>Client Project</span>
            </a>
          ))}
        </div>
      </div>
      {/* SOCIAL PRESENCE */}

      <div className="workBlock">
        <h2>Social Presence</h2>

        <p className="brandDesc">
          Personal and brand accounts contributing to content creation, growth,
          and engagement strategy.
        </p>

        <div className="socialLinks">
          <a
            href="https://www.instagram.com/zaaliiim_/"
            target="_blank"
            className="socialCard"
          >
            <span>Personal</span>
            <strong>@zaaliiim_</strong>
          </a>

          <a
            href="https://www.instagram.com/speed_breakers__/"
            target="_blank"
            className="socialCard"
          >
            <span>Brand Growth</span>
            <strong>@speed_breakers__</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
