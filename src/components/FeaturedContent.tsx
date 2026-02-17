export default function FeaturedContent() {
  return (
    <section className="featuredSection">
      <h2>Featured Content</h2>

      <p className="featuredDesc">
        A selection of top-performing content including cinematic edits, brand
        projects, and high-engagement social media videos.
      </p>

      <div className="featuredGrid">
        {/* ⭐ 100K STORYTELLING REEL — TOP PERFORMER */}
        <a
          href="https://www.instagram.com/reel/DUxEz_JiPTi/"
          target="_blank"
          className="reelCard"
        >
          <img
            src="/images/clients/client-work6.jpeg"
            alt="100K Storytelling Reel"
          />

          {/* Performance Badge */}
          <div className="performanceBadge">🔥 100K in 48h</div>

          <div className="playBtn">▶</div>

          <span>Storytelling Reel — 100K reach</span>
        </a>
        {/* Instagram Reel 1 */}
        <a
          href="https://www.instagram.com/reel/DQMRa-6EpJv/"
          target="_blank"
          className="reelCard"
        >
          <img src="/images/reel2.jpeg" alt="Instagram Reel" />
          <div className="playBtn">▶</div>
          <span>Instagram Reel — client project</span>
        </a>

        {/* Instagram Reel 2 */}
        <a
          href="https://www.instagram.com/reel/DO5zppekhN5/"
          target="_blank"
          className="reelCard"
        >
          <img src="/images/reel1.jpeg" alt="Instagram Reel" />
          <div className="playBtn">▶</div>
          <span>Instagram Reel — client project/Cinematic Edit</span>
        </a>

        {/* Facebook */}
        <div className="videoCard">
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/61577866562642/videos/1219355613379896/"
            allowFullScreen
          />
          <p>Facebook — Reaction Project</p>
        </div>

        {/* YouTube */}
        <div className="videoCard">
          <iframe
            src="https://www.youtube.com/embed/wKKDTfdb2Cg"
            allowFullScreen
          />
          <p>YouTube Short — Creative Edit</p>
        </div>
      </div>
    </section>
  );
}
