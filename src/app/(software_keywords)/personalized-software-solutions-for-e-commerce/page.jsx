import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Personalized Software Solutions for E-commerce | Zentrix Infotech",
  description:
    "Explore personalized software solutions for e-commerce in India: custom storefronts, omnichannel inventory, recommendation engines, and mobile shopping apps built by Zentrix Infotech.",
  keywords:
    "personalized software solutions for e-commerce, custom ecommerce software development, custom ecommerce website development, headless ecommerce solutions, ecommerce inventory management software, custom b2b ecommerce portal, ecommerce software development company, ecommerce software in Moradabad, Zentrix Infotech",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/personalized-software-solutions-for-e-commerce",
  },
  openGraph: {
    title: "Personalized Software Solutions for E-commerce | Zentrix Infotech",
    description:
      "Explore personalized software solutions for e-commerce in India: custom storefronts, omnichannel inventory, recommendation engines, and mobile shopping apps built by Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/personalized-software-solutions-for-e-commerce",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Personalized Software Solutions for E-commerce | Zentrix Infotech",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personalized Software Solutions for E-commerce | Zentrix Infotech",
    description:
      "Explore personalized software solutions for e-commerce in India: custom storefronts, omnichannel inventory, recommendation engines, and mobile shopping apps built by Zentrix Infotech.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function PersonalizedSoftwareSolutionsEcommercePage() {
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
