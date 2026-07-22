import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Web Development Services for USA Clients | Zentrix Infotech",
  description:
    "Zentrix Infotech offers custom web development services for USA clients — responsive, scalable, SEO-friendly websites built with modern tech to grow your US-based business online.",
  keywords:
    "web development services for USA clients, web development company for US clients, custom website development USA, hire web developers for USA business, US based web development agency, affordable web development for American businesses, offshore web development USA, react node web development USA, ecommerce website development USA, responsive website design USA clients",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/web-development-services-for-usa-clients",
  },
  openGraph: {
    title: "Web Development Services for USA Clients | Zentrix Infotech",
    description:
      "Zentrix Infotech offers custom web development services for USA clients — responsive, scalable, SEO-friendly websites built with modern tech to grow your US-based business online.",
    url: "https://www.zentrixinfotech.com/web-development-services-for-usa-clients",
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
    title: "Web Development Services for USA Clients | Zentrix Infotech",
    description:
      "Zentrix Infotech offers custom web development services for USA clients — responsive, scalable, SEO-friendly websites built with modern tech to grow your US-based business online.",
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