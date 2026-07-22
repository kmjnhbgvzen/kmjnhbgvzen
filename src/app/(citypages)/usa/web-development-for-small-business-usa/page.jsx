import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Web Development for Small Business USA | Zentrix Infotech",
  description:
    "Zentrix Infotech offers affordable web development for small businesses in the USA, building professional, mobile-friendly, and SEO-ready websites that attract customers.",
  keywords:
    "web development for small business USA, small business website development company USA, affordable website for small business USA, hire web developer for small business USA, small business web design services USA, custom website for small business owners, best web development company for small business, small business ecommerce website development, local small business website builder USA, budget friendly website development for startups",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/web-development-for-small-business-usa",
  },
  openGraph: {
    title: "Web Development for Small Business USA | Zentrix Infotech",
    description:
      "Zentrix Infotech offers affordable web development for small businesses in the USA, building professional, mobile-friendly, and SEO-ready websites that attract customers.",
    url: "https://www.zentrixinfotech.com/usa/web-development-for-small-business-usa",
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
    title: "Web Development for Small Business USA | Zentrix Infotech",
    description:
      "Zentrix Infotech offers affordable web development for small businesses in the USA, building professional, mobile-friendly, and SEO-ready websites that attract customers.",
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