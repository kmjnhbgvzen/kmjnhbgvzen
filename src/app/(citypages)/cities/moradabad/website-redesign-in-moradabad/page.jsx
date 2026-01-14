import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Website Redesign in Moradabad | Zentrix Infotech ",
  description: "Professional website redesign in Moradabad. Fix slow sites, mobile issues, outdated designs. Modern, fast, SEO-friendly redesigns for local businesses. Free audit! Call 7248800839",
  keywords: "website redesign in Moradabad, web redesign Moradabad, mobile website redesign, website speed optimization Moradabad, responsive redesign Moradabad, website refresh Moradabad",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/website-redesign-in-moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Website Redesign in Moradabad | Zentrix Infotech ",

    description:
      "Professional website redesign in Moradabad. Fix slow sites, mobile issues, outdated designs. Modern, fast, SEO-friendly redesigns for local businesses. Free audit! Call 7248800839.",

    url: "https://www.zentrixinfotech.com/cities/moradabad/website-redesign-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Website Redesign in Moradabad | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Website Redesign in Moradabad | Zentrix Infotech ",

    description:
      "Professional website redesign in Moradabad. Fix slow sites, mobile issues, outdated designs. Modern, fast, SEO-friendly redesigns for local businesses. Free audit! Call 7248800839.",

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