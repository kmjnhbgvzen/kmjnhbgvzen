import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Website Development in Moradabad | Zentrix Infotech",
  
  description:
    "Expert website development in Moradabad with React & Next.js. Custom business sites, e-commerce, apps for local companies. Fast, SEO-ready, affordable. Free quote!",

  keywords:
    "website development Moradabad, web development services Moradabad, website company Moradabad, e-commerce website Moradabad, custom website development, React website Moradabad, Next.js development, local website developers, SEO optimized websites, business website Moradabad, web design Moradabad",


  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/website-development-in-moradabad",
  },
  

  // ✅ OPEN GRAPH (SOCIAL SHARING)
  openGraph: {
    title:
      "Website Development in Moradabad | Zentrix Infotech",

    description:
      "Expert website development in Moradabad with React & Next.js. Custom business sites, e-commerce, apps for local companies. Fast, SEO-ready, affordable. Free quote!",

    url: "https://www.zentrixinfotech.com/cities/moradabad/website-development-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Website Development in Moradabad | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Website Development in Moradabad | Zentrix Infotech",

    description:
      "Expert website development in Moradabad with React & Next.js. Custom business sites, e-commerce, apps for local companies. Fast, SEO-ready, affordable. Free quote!",

    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  // ✅ FAVICON
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