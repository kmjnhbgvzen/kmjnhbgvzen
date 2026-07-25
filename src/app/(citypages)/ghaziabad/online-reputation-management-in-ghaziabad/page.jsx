import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Online Reputation Management in Ghaziabad | ORM Services",
  description:
    "Expert Online Reputation Management in Ghaziabad. Remove negative reviews, build brand trust, and rank higher with proven ORM strategies. Get a free audit today.",
  keywords:
    "online reputation management in Ghaziabad, ORM services Ghaziabad, online reputation management company Ghaziabad, reputation management agency Ghaziabad, negative review removal Ghaziabad, brand reputation management Ghaziabad, ORM company near me, best ORM services in Ghaziabad, online reputation management agency UP, digital reputation management Ghaziabad, review management services Ghaziabad, online brand management Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/online-reputation-management-in-ghaziabad",
  },
  openGraph: {
    title: "Online Reputation Management in Ghaziabad | ORM Services",
    description:
      "Expert Online Reputation Management in Ghaziabad. Remove negative reviews, build brand trust, and rank higher with proven ORM strategies. Get a free audit today.",
    url: "https://www.zentrixinfotech.com/ghaziabad/online-reputation-management-in-ghaziabad",
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
    title: "Online Reputation Management in Ghaziabad | ORM Services",
    description:
      "Expert Online Reputation Management in Ghaziabad. Remove negative reviews, build brand trust, and rank higher with proven ORM strategies. Get a free audit today.",
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