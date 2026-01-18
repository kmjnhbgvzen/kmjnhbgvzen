import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "WordPress Developer in Moradabad | Zentrix Infotech",
  description: "Expert WordPress developer in Moradabad for custom sites, WooCommerce stores, plugins. Fast, secure, mobile-optimized WordPress solutions for local businesses.",
  keywords: "WordPress developer in Moradabad, WooCommerce developer Moradabad, custom WordPress Moradabad, WordPress plugin developer, WordPress theme customization Moradabad, WordPress speed optimization, WordPress migration Moradabad, local WordPress expert",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/wordpress-developer-in-moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "WordPress Developer in Moradabad | Zentrix Infotech",

    description:
      "Expert WordPress developer in Moradabad for custom sites, WooCommerce stores, plugins. Fast, secure, mobile-optimized WordPress solutions for local businesses.",

    url: "https://www.zentrixinfotech.com/cities/moradabad/wordpress-developer-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "WordPress Developer in Moradabad | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "WordPress Developer in Moradabad | Zentrix Infotech",

    description:
      "Expert WordPress developer in Moradabad for custom sites, WooCommerce stores, plugins. Fast, secure, mobile-optimized WordPress solutions for local businesses.",

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