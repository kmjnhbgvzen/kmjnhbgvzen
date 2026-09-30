import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Enterprise Software Development Company Near Me | Zentrix",
  description:
    "Need an enterprise software development company near you? Zentrix Infotech builds custom, scalable software from Moradabad and Ghaziabad. Get a free quote.",
  keywords:
    "enterprise software development company near me, enterprise software development company, custom enterprise software development, enterprise software solutions, software development company near me, enterprise application development, custom software development company Moradabad, software development company Ghaziabad, enterprise software development Delhi NCR, ERP and CRM development, business software solutions company, enterprise web application development, enterprise mobile app development, cloud-based enterprise software, Zentrix Infotech",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/enterprise-software-development-company-near-me",
  },
  openGraph: {
    title: "Enterprise Software Development Company Near Me | Zentrix",
    description:
      "Need an enterprise software development company near you? Zentrix Infotech builds custom, scalable software from Moradabad and Ghaziabad. Get a free quote.",
    url: "https://www.zentrixinfotech.com/enterprise-software-development-company-near-me",
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
    title: "Enterprise Software Development Company Near Me | Zentrix",
    description:
      "Need an enterprise software development company near you? Zentrix Infotech builds custom, scalable software from Moradabad and Ghaziabad. Get a free quote.",
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
