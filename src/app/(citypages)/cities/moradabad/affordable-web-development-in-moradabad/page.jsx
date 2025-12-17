import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Affordable Web Development in Moradabad | Zentrix Infotech",
  description: "Cost-effective web development in Moradabad using React/Next.js. Business sites, e-commerce, mobile-optimized for local companies. Fast launch, great value.",
  keywords: "affordable web development in Moradabad, cheap website Moradabad, budget web developer Moradabad, cost-effective web development, low cost website Moradabad, value web development Moradabad, economical website design, startup web development Moradabad, small business website Moradabad",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/affordable-web-development-in-moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Affordable Web Development in Moradabad | Zentrix Infotech",

    description:
      "Cost-effective web development in Moradabad using React/Next.js. Business sites, e-commerce, mobile-optimized for local companies. Fast launch, great value.",

    url: "https://www.zentrixinfotech.com/cities/moradabad/affordable-web-development-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Web Development in Moradabad | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Affordable Web Development in Moradabad | Zentrix Infotech",

    description:
      "Cost-effective web development in Moradabad using React/Next.js. Business sites, e-commerce, mobile-optimized for local companies. Fast launch, great value.",

    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  // ✅ ✅ ✅ FAVICON
  icons: {
    icon: "/favicon.ico",
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