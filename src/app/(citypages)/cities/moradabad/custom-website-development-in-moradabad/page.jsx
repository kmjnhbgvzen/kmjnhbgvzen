import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Custom Website Development in Moradabad | Zentrix Infotech",
  
  description:
    "Zentrix Infotech offers custom website development in Moradabad for businesses looking to grow online. SEO-friendly, scalable, and fully customized websites.",

  keywords:
    "custom website development in Moradabad, bespoke web development Moradabad, custom web applications Moradabad, React custom development, enterprise website Moradabad, 3D configurator Moradabad, custom booking system Moradabad, scalable web apps Moradabad, custom website development company in Moradabad, professional website development in Moradabad,local website developer in Moradabad, affordable custom websites Moradabad",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/custom-website-development-in-moradabad",
  },
  

  // ✅ OPEN GRAPH (SOCIAL SHARING)
  openGraph: {
    title:
      "Custom Website Development in Moradabad | Grow Your Business Online",

    description:
      "Zentrix Infotech offers custom website development in Moradabad for businesses looking to grow online. SEO-friendly, scalable, and fully customized websites.",

    url: "https://www.zentrixinfotech.com/cities/moradabad/custom-website-development-in-moradabad ",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Website Development in Moradabad",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Custom Website Development in Moradabad | Business Growth Websites",

    description:
      "Zentrix Infotech offers custom website development in Moradabad for businesses looking to grow online. SEO-friendly, scalable, and fully customized websites.",

    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
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