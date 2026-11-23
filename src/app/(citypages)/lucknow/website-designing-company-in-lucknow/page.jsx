import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Designing Company in Lucknow | Zentrix Infotech",

  description:
    "Need a website designing company in Lucknow? Zentrix Infotech designs modern, mobile-friendly, conversion-focused websites. Get a free design consultation.",

  keywords:
    "Website Designing Company in Lucknow, website design company in Lucknow, website designers in Lucknow, professional website designing in Lucknow, custom website design in Lucknow, responsive website design in Lucknow, business website design in Lucknow, ecommerce website design in Lucknow, website redesign in Lucknow, UI/UX design company in Lucknow, affordable website designing in Lucknow, corporate website design in Lucknow, landing page design in Lucknow, modern website design, mobile-friendly website design, conversion-focused design, user experience design, user interface design, wireframes and prototypes, brand-consistent website design, fast-loading website design, how much does website design cost in Lucknow, signs your website needs a redesign, how to choose a website designing company",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/website-designing-company-in-lucknow",
  },

  openGraph: {
    title: "Website Designing Company in Lucknow | Zentrix Infotech",
    description:
      "Need a website designing company in Lucknow? Zentrix Infotech designs modern, mobile-friendly, conversion-focused websites. Get a free design consultation.",
    url:
      "https://www.zentrixinfotech.com/lucknow/website-designing-company-in-lucknow",
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
    title: "Website Designing Company in Lucknow | Zentrix Infotech",
    description:
      "Need a website designing company in Lucknow? Zentrix Infotech designs modern, mobile-friendly, conversion-focused websites. Get a free design consultation.",
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