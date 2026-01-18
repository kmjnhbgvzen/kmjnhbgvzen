import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Digital Marketing Services Near Me | Local Experts in Moradabad",
  description: "Looking for digital marketing services near you? Zentrix Infotech helps businesses in Moradabad grow with local SEO, Google Ads, and social media marketing. Get a free consultation today.",
  keywords: "digital marketing services near me, digital marketing agency Moradabad, local digital marketing services, SEO services near me, online marketing Moradabad",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/digital-marketing-services-near-me",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Digital Marketing Services Near Me | Local Experts in Moradabad",

    description:
      "Looking for digital marketing services near you? Zentrix Infotech helps businesses in Moradabad grow with local SEO, Google Ads, and social media marketing. Get a free consultation today.",

    url: "https://www.zentrixinfotech.com/cities/moradabad/digital-marketing-services-near-me",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ecommerce Website Development in Moradabad | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Digital Marketing Services Near Me | Local Experts in Moradabad",

    description:
      "Looking for digital marketing services near you? Zentrix Infotech helps businesses in Moradabad grow with local SEO, Google Ads, and social media marketing. Get a free consultation today.",

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