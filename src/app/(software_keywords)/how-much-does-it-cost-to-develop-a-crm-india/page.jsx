import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How Much Does It Cost to Develop a CRM in India? (2026 Guide) | Zentrix Infotech",

  description:
    "Find out how much it costs to develop a custom CRM in India. Transparent cost breakdown, features, pricing factors, comparison vs SaaS, and free cost estimation from Zentrix Infotech.",

  keywords: [
    "how much does it cost to develop a CRM India",
    "CRM development cost in India",
    "cost to build custom CRM software",
    "custom CRM development price India",
    "CRM software development cost",
    "custom CRM pricing India",
    "cost of CRM software development",
    "CRM development company India",
    "CRM development cost Moradabad",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/how-much-does-it-cost-to-develop-a-crm-india",
  },

  openGraph: {
    title: "How Much Does It Cost to Develop a CRM in India? (2026 Guide) | Zentrix Infotech",
    description:
      "Find out how much it costs to develop a custom CRM in India. Transparent cost breakdown, features, pricing factors, comparison vs SaaS, and free cost estimation from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/how-much-does-it-cost-to-develop-a-crm-india",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How Much Does It Cost to Develop a CRM in India | Zentrix Infotech",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "How Much Does It Cost to Develop a CRM in India? (2026 Guide) | Zentrix Infotech",
    description:
      "Find out how much it costs to develop a custom CRM in India. Transparent cost breakdown, features, pricing factors, comparison vs SaaS, and free cost estimation from Zentrix Infotech.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },

  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function Page() {
  return (
    <main>
      <Banner />
      <Client />
      <Content />
      <WhyChooseUs />
      <LandingServices />
      <Portfolio />
      <LovedByClients />
    </main>
  );
}
