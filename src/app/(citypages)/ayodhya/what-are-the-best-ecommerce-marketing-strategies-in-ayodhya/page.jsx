import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Ecommerce Marketing Strategies in Ayodhya (2026 Guide)",
  description:
    "Discover the best ecommerce marketing strategies in Ayodhya to boost sales, rank higher on Google, and reach local buyers and pilgrims effectively.",
  keywords:
    "best ecommerce marketing strategies in Ayodhya, ecommerce marketing strategy Ayodhya, digital marketing strategies Ayodhya, online business growth Ayodhya, ecommerce SEO strategy Ayodhya, ecommerce promotion Ayodhya, social media marketing Ayodhya, ecommerce advertising Ayodhya, local ecommerce strategy Ayodhya, ecommerce marketing agency Ayodhya, digital marketing company Ayodhya",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ayodhya/ecommerce-marketing-strategies-ayodhya",
  },
  openGraph: {
    title: "Best Ecommerce Marketing Strategies in Ayodhya (2026 Guide)",
    description:
      "Discover the best ecommerce marketing strategies in Ayodhya to boost sales, rank higher on Google, and reach local buyers and pilgrims effectively.",
    url: "https://www.zentrixinfotech.com/ayodhya/ecommerce-marketing-strategies-ayodhya",
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
    title: "Best Ecommerce Marketing Strategies in Ayodhya (2026 Guide)",
    description:
      "Discover the best ecommerce marketing strategies in Ayodhya to boost sales, rank higher on Google, and reach local buyers and pilgrims effectively.",
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