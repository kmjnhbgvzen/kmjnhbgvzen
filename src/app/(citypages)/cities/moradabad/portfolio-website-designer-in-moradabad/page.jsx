import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Portfolio Website Designer in Moradabad - Showcase Your Work",
  description: "Professional portfolio website designer in Moradabad for photographers, designers, freelancers. Clean, mobile-optimized portfolios that attract high-paying clients. Fast loading, easy updates. Call 7248800839!",
  keywords: "portfolio website designer in Moradabad, photography portfolio Moradabad, designer portfolio website, freelance portfolio Moradabad, creative portfolio designer, wedding photographer portfolio, web designer portfolio Moradabad.",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/portfolio-website-designer-in-moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Portfolio Website Designer in Moradabad - Showcase Your Work",

    description:
      "Professional portfolio website designer in Moradabad for photographers, designers, freelancers. Clean, mobile-optimized portfolios that attract high-paying clients. Fast loading, easy updates. Call 7248800839!",

    url: "https://www.zentrixinfotech.com/cities/moradabad/portfolio-website-designer-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Website Designer in Moradabad | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Portfolio Website Designer in Moradabad - Showcase Your Work",

    description:
      "Professional portfolio website designer in Moradabad for photographers, designers, freelancers. Clean, mobile-optimized portfolios that attract high-paying clients. Fast loading, easy updates. Call 7248800839!",

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