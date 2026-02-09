export default function ServicesPage() {
  const services = [
    {
      title: "Video Editing",
      icon: "🎬",
      desc: "Cinematic edits, reels, shorts, storytelling videos, and engaging content optimized for social media growth.",
      tools: "Premiere Pro • After Effects • CapCut",
    },
    {
      title: "Social Media Management",
      icon: "📱",
      desc: "Content planning, posting strategy, audience growth, engagement optimization, and performance tracking.",
      tools: "Instagram Insights • Meta Ads • Analytics",
    },
    {
      title: "Canva Design",
      icon: "🎨",
      desc: "Professional static posts, brand creatives, product visuals, and clean social media graphics.",
      tools: "Canva • Photoshop",
    },
    {
      title: "Content Strategy",
      icon: "🧠",
      desc: "Brand storytelling, viral content structure, growth planning, and audience psychology-based content creation.",
      tools: "Research • Strategy • Execution",
    },
    {
      title: "Digital Marketing",
      icon: "📢",
      desc: "Performance marketing, ad creatives, targeting, and campaign optimization for brand growth.",
      tools: "Google Ads • Meta Ads • SEO • Analytics",
    },
    {
      title: "Brand Growth",
      icon: "🚀",
      desc: "Helping brands grow through consistent content, creative visuals, and strategic digital presence.",
      tools: "Content • Branding • Growth",
    },
  ];

  return (
    <section className="servicesPage">
      <div className="servicesHeader">
        <h1>Services</h1>
        <p>
          I help brands and creators grow through powerful content, strategic
          storytelling, and visually engaging digital experiences.
        </p>
      </div>

      <div className="servicesGrid">
        {services.map((service, i) => (
          <div key={i} className="serviceCard">
            <div className="serviceIcon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <span className="serviceTools">{service.tools}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
