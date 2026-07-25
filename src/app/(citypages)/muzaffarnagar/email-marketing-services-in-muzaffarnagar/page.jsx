import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Email Marketing Services in Muzaffarnagar | Boost Sales & Retention",
  description:
    "Affordable Email Marketing Services in Muzaffarnagar with automation, newsletters & campaigns designed to increase leads, sales, and customer loyalty.",
  keywords:
    "email marketing services in muzaffarnagar, email marketing agency muzaffarnagar, bulk email marketing muzaffarnagar, email automation services company, newsletter marketing agency near me, ecommerce email marketing muzaffarnagar, best email marketing company muzaffarnagar, email campaign management services, digital marketing agency muzaffarnagar, b2b email marketing india, drip campaign marketing services, email marketing for small business",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/muzaffarnagar/email-marketing-services-in-muzaffarnagar",
  },
  openGraph: {
    title: "Email Marketing Services in Muzaffarnagar | Boost Sales & Retention",
    description:
      "Affordable Email Marketing Services in Muzaffarnagar with automation, newsletters & campaigns designed to increase leads, sales, and customer loyalty.",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/email-marketing-services-in-muzaffarnagar",
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
    title: "Email Marketing Services in Muzaffarnagar | Boost Sales & Retention",
    description:
      "Affordable Email Marketing Services in Muzaffarnagar with automation, newsletters & campaigns designed to increase leads, sales, and customer loyalty.",
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