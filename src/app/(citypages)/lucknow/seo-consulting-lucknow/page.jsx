import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Consulting in Lucknow | Strategy and Audit | Zentrix",

  description:
    "Get expert SEO consulting in Lucknow. Zentrix Infotech offers SEO audits, keyword strategy and clear growth roadmaps for your business. Book a free review.",

  keywords:
    "SEO consulting Lucknow, SEO consultant in Lucknow, SEO consultancy Lucknow, SEO consulting services Lucknow, SEO audit Lucknow, SEO strategy Lucknow, SEO expert Lucknow, SEO advice for small business Lucknow, website SEO audit, keyword research and strategy, SEO roadmap, technical SEO consulting, local SEO consulting, SEO training for teams, content strategy, SEO for startups, SEO review, search visibility plan",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/seo-consulting-lucknow",
  },

  openGraph: {
    title: "SEO Consulting in Lucknow | Strategy and Audit | Zentrix",

    description:
      "Get expert SEO consulting in Lucknow. Zentrix Infotech offers SEO audits, keyword strategy and clear growth roadmaps for your business. Book a free review.",

    url: "https://www.zentrixinfotech.com/lucknow/seo-consulting-lucknow",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SEO Consulting in Lucknow | Strategy and Audit | Zentrix",

    description:
      "Get expert SEO consulting in Lucknow. Zentrix Infotech offers SEO audits, keyword strategy and clear growth roadmaps for your business. Book a free review.",

    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },

  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function Page() {
  return (
    <>
      <Banner />
      <Client />
      <Content />
      <WhyChooseUs />
      <LandingServices />
      <Portfolio />
      <LovedByClients />
    </>
  );
}