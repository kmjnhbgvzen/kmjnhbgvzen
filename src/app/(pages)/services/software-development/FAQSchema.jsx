import Script from "next/script";

export default function FAQSchema() {
  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What services does Zentrix Infotech offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Zentrix Infotech provides digital marketing, web development, software development, mobile app development, UI/UX design, and cloud solutions tailored for business growth."
              }
            },
            {
              "@type": "Question",
              "name": "Is Zentrix Infotech suitable for small businesses and startups?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Zentrix Infotech works with startups, small businesses, and growing enterprises by offering scalable and affordable digital and IT solutions."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide customized solutions based on business needs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Every project is tailored according to the client’s goals, industry requirements, and target audience to ensure practical and effective results."
              }
            },
            {
              "@type": "Question",
              "name": "How does Zentrix Infotech ensure project quality?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We follow structured development processes, clear communication, and regular quality checks to ensure reliable and high-performance solutions."
              }
            },
            {
              "@type": "Question",
              "name": "How can I get started with Zentrix Infotech?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can contact Zentrix Infotech through the website to discuss your requirements and receive guidance on the best digital or IT solution for your business."
              }
            }
          ]
        })
      }}
    />
  );
}
