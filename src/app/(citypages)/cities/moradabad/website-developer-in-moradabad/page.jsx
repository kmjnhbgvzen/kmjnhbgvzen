import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Website Developer in Moradabad | Zentrix Infotech",
  
  description:
    "Hire expert website developers in Moradabad for React/Next.js sites. Business, e-commerce, apps for local companies. Fast delivery, SEO-ready. Free consultation!",

  keywords:
    "website developer in Moradabad, web developer Moradabad, React developer Moradabad, Next.js developer, e-commerce developer Moradabad, custom website developer, local web developer, affordable website developer Moradabad, SEO developer Moradabad, freelance web developer Moradabad",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/website-developer-in-moradabad",
  },
  

  // ✅ OPEN GRAPH (SOCIAL SHARING)
  openGraph: {
    title:
      "Website Developer in Moradabad | Zentrix Infotech",

    description:
      "Hire expert website developers in Moradabad for React/Next.js sites. Business, e-commerce, apps for local companies. Fast delivery, SEO-ready. Free consultation!",

    url: "https://www.zentrixinfotech.com/cities/moradabad/website-developer-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Website Developer in Moradabad | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Website Developer in Moradabad | Zentrix Infotech",

    description:
      "Hire expert website developers in Moradabad for React/Next.js sites. Business, e-commerce, apps for local companies. Fast delivery, SEO-ready. Free consultation!",

    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  // ✅ FAVICON
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