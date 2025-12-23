import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Corporate Website Developer in Moradabad | Zentrix Infotech",
  description: "Professional corporate website developer in Moradabad for hospitals, IT firms, manufacturers. Executive design, enterprise security, lead generation. React/Next.js corporate sites.",
  keywords: "corporate website developer in Moradabad, enterprise website development Moradabad, executive website design, B2B website developer Moradabad, corporate CMS Moradabad, business website developer, professional corporate sites Moradabad",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/corporate-website-developer-in-moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Corporate Website Developer in Moradabad | Zentrix Infotech",

    description:
      "Professional corporate website developer in Moradabad for hospitals, IT firms, manufacturers. Executive design, enterprise security, lead generation. React/Next.js corporate sites.",

    url: "https://www.zentrixinfotech.com/cities/moradabad/corporate-website-developer-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Website Developer in Moradabad | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Corporate Website Developer in Moradabad | Zentrix Infotech",

    description:
      "Professional corporate website developer in Moradabad for hospitals, IT firms, manufacturers. Executive design, enterprise security, lead generation. React/Next.js corporate sites.",

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