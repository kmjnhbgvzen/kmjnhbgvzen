import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Best Digital Marketing Agency in Moradabad | SEO, SMM, PPC Services",
  description: "Leading digital marketing agency in Moradabad offering SEO, social media marketing, PPC, content marketing, and web design services. Get measurable results and grow your business online with proven strategies.",
  keywords: "best digital marketing in moradabad, digital marketing agency moradabad, SEO services moradabad, social media marketing moradabad, PPC services moradabad",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/best-digital-marketing-in-moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Best Digital Marketing Agency in Moradabad | SEO, SMM, PPC Services",

    description:
      "Leading digital marketing agency in Moradabad offering SEO, social media marketing, PPC, content marketing, and web design services. Get measurable results and grow your business online with proven strategies.",

    url: "https://www.zentrixinfotech.com/cities/moradabad/best-digital-marketing-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Digital Marketing Agency in Moradabad | SEO, SMM, PPC Services",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Best Digital Marketing Agency in Moradabad | SEO, SMM, PPC Services",

    description:
      "Leading digital marketing agency in Moradabad offering SEO, social media marketing, PPC, content marketing, and web design services. Get measurable results and grow your business online with proven strategies.",

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