export default function BrandSection() {
  return (
    <section className="brandPage">
      {/* HERO */}
      <div className="brandHeroCenter">
        <h1>Zarparan Dryfruit Wala</h1>

        <p>
          A premium dry fruit brand focused on quality, packaging, and digital
          presence. I contributed by creating visual content, editing videos,
          and designing static posts using Canva to strengthen the brand’s
          identity and engagement.
        </p>
      </div>

      {/* VIDEO + TEXT */}
      <div className="brandShowcase">
        {/* LEFT VIDEO */}
        <div className="brandVideo">
          <iframe
            src="https://www.youtube.com/embed/vLlhfkFeoz8"
            allowFullScreen
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="brandText">
          <h2>My Contribution</h2>

          <p>
            I worked on building the brand’s digital presence through video
            editing, storytelling, and visual branding. Static posts were
            created using Canva to maintain consistent and appealing
            presentation.
          </p>

          <p>
            The goal was to create engaging content that builds trust, improves
            product perception, and supports growth across social media and
            marketplaces.
          </p>
        </div>
      </div>

      {/* MARKETPLACE */}
      <div className="brandMarketplace">
        <h2>Available On</h2>

        <div className="marketGrid">
          <a
            href="https://www.flipkart.com/"
            target="_blank"
            className="marketCard"
          >
            <span>Flipkart</span>
          </a>

          <a
            href="https://www.meesho.com/"
            target="_blank"
            className="marketCard"
          >
            <span>Meesho</span>
          </a>

          <a
            href="https://www.instagram.com/zarparandryfruitwala/"
            target="_blank"
            className="marketCard"
          >
            <span>Instagram</span>
          </a>

          <a
            href="https://www.youtube.com/channel/UCe4a5PDdid-fCzk_LnXQAlg"
            target="_blank"
            className="marketCard"
          >
            <span>YouTube</span>
          </a>
        </div>

        <p className="brandCredit">
          Static Instagram posts designed by Siddharth using Canva.
        </p>
      </div>

      {/* PRODUCT SHOWCASE */}
      {/* BRAND + PRODUCT SHOWCASE */}

      <div className="brandProductShowcase">
        {/* RIGHT PRODUCT + LINKS */}
        <div className="brandProductInfo">
          <h2>Product & Marketplace Presence</h2>

          <p>
            Zarparan Dryfruit Wala products are available across major
            marketplaces. Below is a featured listing showcasing brand packaging
            and presentation.
          </p>

          {/* PRODUCT CARD */}
          <div className="productMiniCard">
            <img src="/images/flipkart.jpeg" alt="Flipkart Product" />

            <div>
              <h3>Kashmiri Badam — Premium Almonds (250g)</h3>

              <div className="productLinks">
                <a href="https://www.flipkart.com/" target="_blank">
                  View on Flipkart
                </a>

                <a href="https://www.meesho.com/" target="_blank">
                  View on Meesho
                </a>

                <a
                  href="https://www.google.com/search?kgmid=/g/11tct_2bcj&q=Zarparan+Dryfruit+Wala"
                  target="_blank"
                >
                  Google Business
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brandVisual">
          <img src="/images/brand.jpeg" alt="Zarparan Brand" />
        </div>
      </div>
    </section>
  );
}
