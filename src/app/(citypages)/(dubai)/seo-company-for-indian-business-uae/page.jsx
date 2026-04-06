import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "SEO Company for Indian Business in UAE | Zentrix Infotech – Grow Your UAE Business Online",
  description: "Zentrix Infotech is the trusted SEO company for Indian businesses in UAE. We understand your market, your customers, and your goals. Get more leads, rank higher on Google UAE, and grow faster. Free SEO audit available.",
  keywords: "seo company for indian business uae, seo for indian businesses in dubai, indian business seo uae, seo services for indian entrepreneurs uae, digital marketing for indian business dubai, seo company uae indian community, best seo agency for indian business dubai, indian owned business seo dubai, seo uae indian expat business",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/seo-company-for-indian-business-uae",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "SEO Company for Indian Businesses in UAE | Zentrix Infotech",

    description:
      "Zentrix Infotech is a trusted Indian SEO agency in UAE delivering data-driven SEO strategies, higher Google rankings, and measurable ROI for businesses across UAE. Get a FREE audit today.",

    url: "https://www.zentrixinfotech.com/seo-company-for-indian-business-uae",
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
      "SEO Company for Indian Businesses in UAE | Zentrix Infotech",

    description:
      "Zentrix Infotech is a trusted Indian SEO agency in UAE delivering data-driven SEO strategies, higher Google rankings, and measurable ROI for businesses across UAE. Get a FREE audit today.",

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