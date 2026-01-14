import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Web Designing in Moradabad | Zentrix Infotech",
  description: "Expert web designing in Moradabad using Tailwind CSS & React. Stunning business sites, e-commerce designs, branding for local companies. Creative, fast, mobile-optimized!",
  keywords: "web designing in Moradabad, website designing Moradabad, UI design Moradabad, graphic design Moradabad, e-commerce designing, responsive web designing, creative website designing Moradabad, professional web designer, custom web design",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/web-designing-in-moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Web Designing in Moradabad | Zentrix Infotech",

    description:
      "Expert web designing in Moradabad using Tailwind CSS & React. Stunning business sites, e-commerce designs, branding for local companies. Creative, fast, mobile-optimized!",

    url: "https://www.zentrixinfotech.com/cities/moradabad/web-designing-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Web Designing in Moradabad | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Web Designing in Moradabad | Zentrix Infotech",

    description:
      "Leading digital marketing agency in Moradabad offering SEO, social media marketing, PPC, content marketing, and web design services. Get measurable results and grow your business online with proven strategies.",

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