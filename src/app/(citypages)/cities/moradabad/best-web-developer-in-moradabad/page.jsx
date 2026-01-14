import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Best Web Developer in Moradabad | Zentrix Infotech",
  description: "Hire Moradabad's best web developer for React/Next.js websites. E-commerce, business sites, web apps for local companies. Fast, SEO-optimized, expert coding",
  keywords: "best web developer in Moradabad, top web developer Moradabad, React developer Moradabad, Next.js developer Moradabad, e-commerce developer, freelance web developer Moradabad, full stack developer Moradabad, website developer Moradabad, professional web developer, expert web developer Moradabad",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/best-web-developer-in-moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Best Web Developer in Moradabad | Zentrix Infotech",

    description:
      "Hire Moradabad's best web developer for React/Next.js websites. E-commerce, business sites, web apps for local companies. Fast, SEO-optimized, expert coding",

    url: "https://www.zentrixinfotech.com/cities/moradabad/best-web-developer-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Web Developer in Moradabad | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Best Web Developer in Moradabad | Zentrix Infotech",

    description:
      "Hire Moradabad's best web developer for React/Next.js websites. E-commerce, business sites, web apps for local companies. Fast, SEO-optimized, expert coding",

    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
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