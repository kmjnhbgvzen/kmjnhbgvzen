import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Indian SEO Agency in Dubai | Zentrix Infotech – Results-Driven SEO Services UAE",
  description: "Zentrix Infotech is a trusted Indian SEO agency in Dubai delivering data-driven SEO strategies, higher Google rankings, and measurable ROI for businesses across UAE. Get a FREE audit today.",
  keywords: "indian seo agency dubai, indian seo company dubai, seo agency dubai, best seo company dubai, seo services dubai, dubai seo experts, indian digital marketing agency dubai, seo company uae, affordable seo dubai, top seo agency dubai",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/indian-seo-agency-dubai",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Indian SEO Agency in Dubai | Zentrix Infotech",

    description:
      "Zentrix Infotech is a trusted Indian SEO agency in Dubai delivering data-driven SEO strategies, higher Google rankings, and measurable ROI for businesses across UAE. Get a FREE audit today.",

    url: "https://www.zentrixinfotech.com/indian-seo-agency-dubai",
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

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Indian SEO Agency in Dubai | Zentrix Infotech",

    description:
      "Zentrix Infotech is a trusted Indian SEO agency in Dubai delivering data-driven SEO strategies, higher Google rankings, and measurable ROI for businesses across UAE. Get a FREE audit today.",

    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },

  // ✅ ✅ ✅ FAVICON
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