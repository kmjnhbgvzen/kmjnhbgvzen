import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Enterprise Software Development Agency Moradabad | Zentrix",
  description:
    "Zentrix Infotech is an enterprise software development agency in Moradabad. Strategy, design, development, cloud and support in one team. Book a free consultation.",
  keywords:
    "enterprise software development agency moradabad, enterprise software agency moradabad, software development agency moradabad, custom software agency moradabad, enterprise application development agency, ERP development agency moradabad, enterprise software development company moradabad, full service software agency moradabad, enterprise software agency vs freelancer, hire software agency moradabad, enterprise software solutions moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-agency-moradabad",
  },

  openGraph: {
    title: "Enterprise Software Development Agency Moradabad | Zentrix",
    description:
      "Zentrix Infotech is an enterprise software development agency in Moradabad. Strategy, design, development, cloud and support in one team. Book a free consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-agency-moradabad",
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
    title: "Enterprise Software Development Agency Moradabad | Zentrix",
    description:
      "Zentrix Infotech is an enterprise software development agency in Moradabad. Strategy, design, development, cloud and support in one team. Book a free consultation.",
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