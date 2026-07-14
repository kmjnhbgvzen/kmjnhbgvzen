import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Online Reputation Management in Meerut | Zentrix Infotech",
  description:
    "Protect and grow your brand with expert online reputation management in Meerut from Zentrix Infotech. Improve reviews, ratings, and search visibility today.",
  keywords:
    "online reputation management in Meerut, ORM services Meerut, Google review management Meerut, brand reputation agency UP, reputation management company Meerut, review generation services, search reputation management India, business reputation agency Meerut, Zentrix Infotech Meerut, online reputation services UP, negative review management, Google Business Profile optimization Meerut, digital reputation agency, crisis management services Meerut, ORM agency Uttar Pradesh",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/online-reputation-management-meerut",
  },
  openGraph: {
    title: "Online Reputation Management in Meerut | Zentrix Infotech",
    description:
      "Protect and grow your brand with expert online reputation management in Meerut from Zentrix Infotech. Improve reviews, ratings, and search visibility today.",
    url: "https://www.zentrixinfotech.com/meerut/online-reputation-management-meerut",
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
    title: "Online Reputation Management in Meerut | Zentrix Infotech",
    description:
      "Protect and grow your brand with expert online reputation management in Meerut from Zentrix Infotech. Improve reviews, ratings, and search visibility today.",
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