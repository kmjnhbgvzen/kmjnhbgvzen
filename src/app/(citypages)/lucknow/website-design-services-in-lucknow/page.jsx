import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Design Services in Lucknow | Zentrix Infotech",
  description:
    "Explore website design services in Lucknow from Zentrix Infotech: custom, e-commerce, landing page and redesign services built for speed, mobile and SEO.",
  keywords:
    "website design services in lucknow, website designing services in lucknow, web design services lucknow, custom website design services lucknow, ecommerce website design services lucknow, website redesign services lucknow, landing page design services lucknow, responsive website design services lucknow, UI UX design services lucknow, business website design services lucknow, affordable website design services lucknow, professional web design services lucknow, SEO friendly website design services lucknow, website design packages lucknow, website maintenance services lucknow, website design company lucknow",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/website-design-services-in-lucknow",
  },

  openGraph: {
    title: "Website Design Services in Lucknow | Zentrix Infotech",
    description:
      "Explore website design services in Lucknow from Zentrix Infotech: custom, e-commerce, landing page and redesign services built for speed, mobile and SEO.",
    url: "https://www.zentrixinfotech.com/lucknow/website-design-services-in-lucknow",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Website Design Services in Lucknow | Zentrix Infotech",
    description:
      "Explore website design services in Lucknow from Zentrix Infotech: custom, e-commerce, landing page and redesign services built for speed, mobile and SEO.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },

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