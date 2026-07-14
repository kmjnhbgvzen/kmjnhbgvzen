import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Email Marketing Services in Meerut | Automated Campaigns That Convert",
  description:
    "Looking for reliable email marketing services in Meerut? We build automated campaigns, newsletters & drip sequences that boost sales & customer retention. Get a free consultation today.",
  keywords:
    "email marketing services in Meerut, email marketing company Meerut, email marketing agency Uttar Pradesh, automated email campaigns Meerut, newsletter marketing services, email marketing for small business, drip campaign services Meerut, bulk email marketing Meerut, e-commerce email marketing, email automation agency, best email marketing agency near me",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/email-marketing-services-in-meerut",
  },
  openGraph: {
    title: "Email Marketing Services in Meerut | Automated Campaigns That Convert",
    description:
      "Looking for reliable email marketing services in Meerut? We build automated campaigns, newsletters & drip sequences that boost sales & customer retention. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/meerut/email-marketing-services-in-meerut",
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
    title: "Email Marketing Services in Meerut | Automated Campaigns That Convert",
    description:
      "Looking for reliable email marketing services in Meerut? We build automated campaigns, newsletters & drip sequences that boost sales & customer retention. Get a free consultation today.",
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