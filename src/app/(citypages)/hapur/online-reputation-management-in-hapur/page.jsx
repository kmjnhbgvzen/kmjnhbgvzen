import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Online Reputation Management in Muzaffarnagar | Best ORM Services 2026",
  description:
    "Looking for Online Reputation Management in Muzaffarnagar? Get expert ORM services to remove negative reviews, build brand trust, and rank higher on Google. Free consultation.",
  keywords:
    "online reputation management in Muzaffarnagar, ORM services Muzaffarnagar, reputation management company Muzaffarnagar, brand reputation management Muzaffarnagar, negative review removal Muzaffarnagar, online reputation management agency near me, best ORM company in UP, digital marketing company Muzaffarnagar, google review management Muzaffarnagar, business reputation building services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/muzaffarnagar/online-reputation-management-muzaffarnagar",
  },
  openGraph: {
    title:
      "Online Reputation Management in Muzaffarnagar | Best ORM Services 2026",
    description:
      "Looking for Online Reputation Management in Muzaffarnagar? Get expert ORM services to remove negative reviews, build brand trust, and rank higher on Google. Free consultation.",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/online-reputation-management-muzaffarnagar",
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
    title:
      "Online Reputation Management in Muzaffarnagar | Best ORM Services 2026",
    description:
      "Looking for Online Reputation Management in Muzaffarnagar? Get expert ORM services to remove negative reviews, build brand trust, and rank higher on Google. Free consultation.",
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