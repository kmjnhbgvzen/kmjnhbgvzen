import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Ecommerce Marketing Services in Ayodhya | Sell Online to India & Beyond",
  description:
    "Grow your online store with expert ecommerce marketing services in Ayodhya. SEO, paid ads, social selling, and conversion optimization to turn browsers into buyers.",
  keywords:
    "ecommerce marketing services in Ayodhya, ecommerce SEO Ayodhya, online store marketing Ayodhya, ecommerce website development Ayodhya, religious products ecommerce, online selling services Ayodhya, ecommerce PPC ads, Shopify marketing Ayodhya, ecommerce digital marketing company, prasad and puja items online store",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ayodhya/ecommerce-marketing-services-in-ayodhya",
  },
  openGraph: {
    title: "Ecommerce Marketing Services in Ayodhya | Sell Online to India & Beyond",
    description:
      "Grow your online store with expert ecommerce marketing services in Ayodhya. SEO, paid ads, social selling, and conversion optimization to turn browsers into buyers.",
    url: "https://www.zentrixinfotech.com/ayodhya/ecommerce-marketing-services-in-ayodhya",
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
    title: "Ecommerce Marketing Services in Ayodhya | Sell Online to India & Beyond",
    description:
      "Grow your online store with expert ecommerce marketing services in Ayodhya. SEO, paid ads, social selling, and conversion optimization to turn browsers into buyers.",
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