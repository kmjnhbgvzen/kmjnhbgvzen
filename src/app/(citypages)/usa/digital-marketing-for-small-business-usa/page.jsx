import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Small Business USA | 2026 Growth Guide",
  description:
    "Practical digital marketing strategies for small businesses in the USA — SEO, local search, social media, and paid ads to grow on a real-world budget.",
  keywords:
    "digital marketing for small business USA, small business digital marketing services, local SEO for small business USA, affordable digital marketing agency for small business, small business marketing strategies 2026",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/digital-marketing-for-small-business-usa",
  },
  openGraph: {
    title: "Digital Marketing for Small Business USA | 2026 Growth Guide",
    description:
      "Practical digital marketing strategies for small businesses in the USA — SEO, local search, social media, and paid ads to grow on a real-world budget.",
    url: "https://www.zentrixinfotech.com/usa/digital-marketing-for-small-business-usa",
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
    title: "Digital Marketing for Small Business USA | 2026 Growth Guide",
    description:
      "Practical digital marketing strategies for small businesses in the USA — SEO, local search, social media, and paid ads to grow on a real-world budget.",
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