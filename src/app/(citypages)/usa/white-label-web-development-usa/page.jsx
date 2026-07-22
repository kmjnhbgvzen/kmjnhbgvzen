import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "White Label Web Development USA | Zentrix Infotech",
  description:
    "Zentrix Infotech offers white label web development services for USA agencies and freelancers, delivering custom websites under your brand name with full confidentiality.",
  keywords:
    "white label web development USA, white label web design agency USA, white label website development company, white label web development for agencies USA, outsource white label web development, white label development partner USA, private label web development services, white label ecommerce development USA, white label web design for freelancers, best white label web development company",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/white-label-web-development-usa",
  },
  openGraph: {
    title: "White Label Web Development USA | Zentrix Infotech",
    description:
      "Zentrix Infotech offers white label web development services for USA agencies and freelancers, delivering custom websites under your brand name with full confidentiality.",
    url: "https://www.zentrixinfotech.com/usa/white-label-web-development-usa",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "White Label Web Development USA | Zentrix Infotech",
    description:
      "Zentrix Infotech offers white label web development services for USA agencies and freelancers, delivering custom websites under your brand name with full confidentiality.",
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