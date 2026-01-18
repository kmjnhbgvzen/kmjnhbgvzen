import FAQSection from "./FAQSection";

export const metadata = {
  title: "FAQs – Zentrix Infotech | IT Services & Digital Solutions",
  description:
    "Find answers to common questions about Zentrix Infotech services including website development, custom software, SEO, digital marketing, and ongoing support.",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/faqs",
  },

  openGraph: {
    title: "FAQs – Zentrix Infotech",
    description:
      "Clear answers about our IT services, project process, security, and post-launch support.",
    url: "https://www.zentrixinfotech.com/faqs",
    siteName: "Zentrix Infotech",
    type: "website",

    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Privacy Policy",
      },
    ],
  }
};

export default function FAQPage() {
  const faqs = [
    {
      q: "Why should businesses choose Zentrix Infotech?",
      a: "Zentrix Infotech focuses on delivering reliable, scalable, and result-oriented digital solutions. We combine modern technologies, strategic planning, and transparent communication to help businesses grow online with confidence and long-term value."
    },
    {
      q: "What services does Zentrix Infotech offer?",
      a: "We offer website development, custom software development, mobile app solutions, UI/UX design, cloud services, SEO, and complete digital marketing services tailored to different business goals and industries."
    },
    {
      q: "Do you provide custom website and software development?",
      a: "Yes, we specialize in custom website and software development. Every solution is built from scratch based on your business requirements, workflows, scalability needs, and future growth plans."
    },
    {
      q: "Are your websites SEO-optimized and mobile-friendly?",
      a: "Absolutely. All our websites are built with SEO-friendly architecture, fast loading speed, clean code, and responsive design to ensure optimal performance across mobile, tablet, and desktop devices."
    },
    {
      q: "Can you redesign an existing website?",
      a: "Yes, we redesign and enhance existing websites by improving UI/UX, performance, security, SEO structure, and overall user experience while preserving important business data and content."
    },
    {
      q: "How does your project process work?",
      a: "Our process includes requirement analysis, planning, design, development, testing, and deployment. Clients receive regular updates and milestone reviews to ensure transparency and alignment throughout the project lifecycle."
    },
    {
      q: "Do you provide support after project launch?",
      a: "Yes, we offer post-launch support including updates, performance monitoring, security improvements, backups, and feature enhancements to keep your digital product stable and up to date."
    },
    {
      q: "How do you ensure data security?",
      a: "We follow secure development practices, encrypted data storage, role-based access control, regular updates, and security checks to ensure complete protection of client data and digital assets."
    },
    {
      q: "How can I get started with Zentrix Infotech?",
      a: "You can get started by contacting us through our website. Our team will understand your requirements, suggest the right solution, and guide you through the next steps with complete clarity."
    }
  ];

  // ✅ FAQ Schema (Generated on SERVER)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      {/* SEO FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Pass FAQs to Client Component */}
      <FAQSection faqs={faqs} />
    </>
  );
}
