import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable Web Development Company USA | Zentrix Infotech",
  description:
    "Zentrix Infotech is an affordable web development company for US businesses, delivering custom, high-quality, SEO-friendly websites without the high price tag of local agencies.",
  keywords:
    "affordable web development company USA, cheap web development company for US business, low cost website development USA, budget friendly web design company USA, affordable website developers for small business USA, cost effective web development agency USA, affordable custom website development company, best affordable web development company for startups USA, low budget ecommerce website development USA, hire affordable web developers USA",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/affordable-web-development-company-usa",
  },
  openGraph: {
    title: "Affordable Web Development Company USA | Zentrix Infotech",
    description:
      "Zentrix Infotech is an affordable web development company for US businesses, delivering custom, high-quality, SEO-friendly websites without the high price tag of local agencies.",
    url: "https://www.zentrixinfotech.com/usa/affordable-web-development-company-usa",
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
    title: "Affordable Web Development Company USA | Zentrix Infotech",
    description:
      "Zentrix Infotech is an affordable web development company for US businesses, delivering custom, high-quality, SEO-friendly websites without the high price tag of local agencies.",
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