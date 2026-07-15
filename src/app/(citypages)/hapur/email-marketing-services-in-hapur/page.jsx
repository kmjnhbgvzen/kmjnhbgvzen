import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Email Marketing Services in Hapur | Boost Sales & Customer Retention",
  description:
    "Looking for email marketing services in Hapur? Zentrix Infotech creates targeted email campaigns that build customer relationships and drive sales.",
  keywords:
    "email marketing services in Hapur, email marketing company Hapur, digital marketing agency Hapur, email campaign management services, bulk email marketing company, email automation services near me, newsletter marketing agency, e-commerce email marketing services, B2B email marketing company, email marketing for small business, best email marketing agency UP, promotional email services Hapur, email marketing strategy company, customer retention email services, email marketing agency Delhi NCR",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/email-marketing-services-hapur",
  },
  openGraph: {
    title: "Email Marketing Services in Hapur | Boost Sales & Customer Retention",
    description:
      "Looking for email marketing services in Hapur? Zentrix Infotech creates targeted email campaigns that build customer relationships and drive sales.",
    url: "https://www.zentrixinfotech.com/hapur/email-marketing-services-hapur",
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
    title: "Email Marketing Services in Hapur | Boost Sales & Customer Retention",
    description:
      "Looking for email marketing services in Hapur? Zentrix Infotech creates targeted email campaigns that build customer relationships and drive sales.",
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