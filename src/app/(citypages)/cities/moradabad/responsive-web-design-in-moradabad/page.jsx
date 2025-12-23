import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Responsive Web Design in Moradabad | Zentrix Infotech",
  description: "Mobile-first responsive web design in Moradabad. Perfect display on 91% smartphone traffic. Tailwind CSS, React sites for business, e-commerce. Fast, SEO-optimized",
  keywords: "responsive web design in Moradabad, mobile website design Moradabad, mobile-first design Moradabad, responsive e-commerce Moradabad, Tailwind responsive design, cross-device web design, mobile optimized websites Moradabad, adaptive web design Moradabad",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/responsive-web-design-in-moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Responsive Web Design in Moradabad | Zentrix Infotech",

    description:
      "Mobile-first responsive web design in Moradabad. Perfect display on 91% smartphone traffic. Tailwind CSS, React sites for business, e-commerce. Fast, SEO-optimized",

    url: "https://www.zentrixinfotech.com/cities/moradabad/responsive-web-design-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Responsive Web Design in Moradabad | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Responsive Web Design in Moradabad | Zentrix Infotech",

    description:
      "Mobile-first responsive web design in Moradabad. Perfect display on 91% smartphone traffic. Tailwind CSS, React sites for business, e-commerce. Fast, SEO-optimized",

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