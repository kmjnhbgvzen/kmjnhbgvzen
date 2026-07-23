import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Online Reputation Management in Varanasi | ORM Experts",
  description:
    "Trusted online reputation management in Varanasi — fix negative reviews, build 5-star credibility & monitor your brand online. Free reputation audit.",
  keywords:
    "online reputation management in Varanasi, ORM services Varanasi, negative review removal Varanasi, review management company Varanasi, brand reputation agency Varanasi, Google reviews management Varanasi, reputation management for doctors Varanasi, reputation management for businesses UP, crisis management agency Varanasi",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/online-reputation-management-varanasi",
  },
  openGraph: {
    title: "Online Reputation Management in Varanasi | ORM Experts",
    description:
      "Trusted online reputation management in Varanasi — fix negative reviews, build 5-star credibility & monitor your brand online. Free reputation audit.",
    url: "https://www.zentrixinfotech.com/varanasi/online-reputation-management-varanasi",
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
    title: "Online Reputation Management in Varanasi | ORM Experts",
    description:
      "Trusted online reputation management in Varanasi — fix negative reviews, build 5-star credibility & monitor your brand online. Free reputation audit.",
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