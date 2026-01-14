import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Website Maintenance in Moradabad | Zentrix Infotech ",
  description: "Professional website maintenance in Moradabad. Security, speed optimization, backups, 24/7 monitoring for WordPress, custom sites. Keep your site fast & secure. Free audit! Call 7248800839.",
  keywords: "website maintenance in Moradabad, web maintenance Moradabad, WordPress maintenance, website security Moradabad, website speed optimization, monthly website maintenance",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/website-maintenance-in-moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Website Maintenance in Moradabad | Zentrix Infotech ",

    description:
      "Professional website maintenance in Moradabad. Security, speed optimization, backups, 24/7 monitoring for WordPress, custom sites. Keep your site fast & secure. Free audit! Call 7248800839.",

    url: "https://www.zentrixinfotech.com/cities/moradabad/website-maintenance-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Website Maintenance in Moradabad | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Website Maintenance in Moradabad | Zentrix Infotech",

    description:
      "Professional website maintenance in Moradabad. Security, speed optimization, backups, 24/7 monitoring for WordPress, custom sites. Keep your site fast & secure. Free audit! Call 7248800839.",

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