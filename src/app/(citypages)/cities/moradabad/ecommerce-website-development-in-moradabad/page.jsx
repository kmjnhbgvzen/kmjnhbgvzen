import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Ecommerce Website Development in Moradabad | Zentrix Infotech",
  description: "Professional ecommerce website development in Moradabad. React/Next.js stores for brassware, retail, exports. Secure payments, mobile-ready, SEO-optimized.",
  keywords: "ecommerce website development in Moradabad, online store Moradabad, e-commerce developers Moradabad, shopping cart Moradabad, Razorpay integration Moradabad, multi-vendor marketplace Moradabad, export ecommerce website, mobile ecommerce Moradabad",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/ecommerce-website-development-in-moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Ecommerce Website Development in Moradabad | Zentrix Infotech",

    description:
      "Professional ecommerce website development in Moradabad. React/Next.js stores for brassware, retail, exports. Secure payments, mobile-ready, SEO-optimized.",

    url: "https://www.zentrixinfotech.com/cities/moradabad/ecommerce-website-development-in-moradabad",
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
      "Ecommerce Website Development in Moradabad | Zentrix Infotech",

    description:
      "Professional ecommerce website development in Moradabad. React/Next.js stores for brassware, retail, exports. Secure payments, mobile-ready, SEO-optimized.",

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