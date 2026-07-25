import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Digital Marketing Agency in Ghaziabad | Zentrix Infotech",
  description:
    "Looking for a trusted digital marketing agency in Ghaziabad? Get SEO, PPC, social media & web solutions that drive real leads. Call Zentrix Infotech today.",
  keywords:
    "digital marketing agency in Ghaziabad, best digital marketing company Ghaziabad, SEO services Ghaziabad, social media marketing agency Ghaziabad, PPC agency Ghaziabad, web development company Ghaziabad, affordable digital marketing services Ghaziabad, digital marketing agency near me, online marketing company Ghaziabad, local SEO Ghaziabad, top digital marketing company UP",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-agency-in-ghaziabad",
  },
  openGraph: {
    title: "Best Digital Marketing Agency in Ghaziabad | Zentrix Infotech",
    description:
      "Looking for a trusted digital marketing agency in Ghaziabad? Get SEO, PPC, social media & web solutions that drive real leads. Call Zentrix Infotech today.",
    url: "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-agency-in-ghaziabad",
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
    title: "Best Digital Marketing Agency in Ghaziabad | Zentrix Infotech",
    description:
      "Looking for a trusted digital marketing agency in Ghaziabad? Get SEO, PPC, social media & web solutions that drive real leads. Call Zentrix Infotech today.",
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