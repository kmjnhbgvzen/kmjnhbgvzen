import Script from "next/script";

export default function FAQSchema() {
  return (
    <Script
      id="web-development-faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What web development services does Zentrix Infotech offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Zentrix Infotech offers custom web development services including business websites, service websites, landing pages, and scalable web solutions designed for performance and growth."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide affordable web development services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Zentrix Infotech focuses on delivering affordable and cost-effective web development solutions suitable for startups, small businesses, and growing enterprises."
              }
            },
            {
              "@type": "Question",
              "name": "Are your websites mobile-friendly and responsive?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All websites developed by Zentrix Infotech are fully responsive and optimized to work smoothly across mobile, tablet, and desktop devices."
              }
            },
            {
              "@type": "Question",
              "name": "Can you build custom websites based on business needs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, every website is custom-built based on business goals, target audience, and functional requirements to ensure practical and effective results."
              }
            },
            {
              "@type": "Question",
              "name": "How do you ensure website performance and quality?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We follow best development practices, performance optimization, security checks, and testing to ensure fast-loading, secure, and reliable websites."
              }
            }
          ]
        })
      }}
    />
  );
}
