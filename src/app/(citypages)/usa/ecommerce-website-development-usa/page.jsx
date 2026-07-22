import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Ecommerce Website Development USA | Zentrix Infotech",
  description:
    "Zentrix Infotech builds high-converting ecommerce websites for USA brands with secure payments, fast performance, and SEO-ready architecture designed to drive sales.",
  keywords:
    "ecommerce website development USA, ecommerce development company USA, hire ecommerce developers USA, custom ecommerce website USA, online store development company USA, ecommerce web design services USA, affordable ecommerce development USA, ecommerce platform development for small business, best ecommerce development agency USA, ecommerce website development for startups",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/ecommerce-website-development-usa",
  },
  openGraph: {
    title: "Ecommerce Website Development USA | Zentrix Infotech",
    description:
      "Zentrix Infotech builds high-converting ecommerce websites for USA brands with secure payments, fast performance, and SEO-ready architecture designed to drive sales.",
    url: "https://www.zentrixinfotech.com/usa/ecommerce-website-development-usa",
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
    title: "Ecommerce Website Development USA | Zentrix Infotech",
    description:
      "Zentrix Infotech builds high-converting ecommerce websites for USA brands with secure payments, fast performance, and SEO-ready architecture designed to drive sales.",
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