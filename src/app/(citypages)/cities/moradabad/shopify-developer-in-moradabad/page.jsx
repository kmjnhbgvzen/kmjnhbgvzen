import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Shopify Developer in Moradabad | Zentrix Infotech",
  description: "Expert Shopify developer in Moradabad for custom stores, themes, apps. Brassware exports, fashion retail, mobile-optimized Shopify solutions. Fast launch!",
  keywords: "Shopify developer in Moradabad, Shopify expert Moradabad, Shopify store development Moradabad, custom Shopify theme Moradabad, Shopify app developer, Shopify Plus Moradabad, ecommerce Shopify Moradabad, Shopify migration Moradabad",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/shopify-developer-in-moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Shopify Developer in Moradabad | Zentrix Infotech",

    description:
      "Expert Shopify developer in Moradabad for custom stores, themes, apps. Brassware exports, fashion retail, mobile-optimized Shopify solutions. Fast launch!",

    url: "https://www.zentrixinfotech.com/cities/moradabad/shopify-developer-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Shopify Developer in Moradabad | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Shopify Developer in Moradabad | Zentrix Infotech",

    description:
      "Expert Shopify developer in Moradabad for custom stores, themes, apps. Brassware exports, fashion retail, mobile-optimized Shopify solutions. Fast launch!",

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