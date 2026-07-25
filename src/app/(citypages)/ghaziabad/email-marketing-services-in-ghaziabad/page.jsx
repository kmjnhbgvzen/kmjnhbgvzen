import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Email Marketing Services in Ghaziabad | Zentrix Infotech",
  description:
    "Professional email marketing services in Ghaziabad to boost leads, sales, and customer retention. Custom campaigns, automation, and analytics. Get a free quote.",
  keywords:
    "email marketing services in Ghaziabad, email marketing company Ghaziabad, bulk email marketing Ghaziabad, email campaign management Ghaziabad, email marketing agency Ghaziabad, newsletter marketing services Ghaziabad, automated email marketing Ghaziabad, best email marketing company Ghaziabad, email marketing services near me, lead nurturing email campaigns Ghaziabad, ecommerce email marketing Ghaziabad, B2B email marketing Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/email-marketing-services-in-ghaziabad",
  },
  openGraph: {
    title: "Email Marketing Services in Ghaziabad | Zentrix Infotech",
    description:
      "Professional email marketing services in Ghaziabad to boost leads, sales, and customer retention. Custom campaigns, automation, and analytics. Get a free quote.",
    url: "https://www.zentrixinfotech.com/ghaziabad/email-marketing-services-in-ghaziabad",
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
    title: "Email Marketing Services in Ghaziabad | Zentrix Infotech",
    description:
      "Professional email marketing services in Ghaziabad to boost leads, sales, and customer retention. Custom campaigns, automation, and analytics. Get a free quote.",
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