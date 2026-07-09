import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing Agency in Ghaziabad | Zentrix Infotech",
  description:
    "Looking for a trusted social media marketing agency in Ghaziabad? Zentrix Infotech offers result-driven SMM, content, and ad strategies for local businesses.",
  keywords:
    "social media marketing company Ghaziabad, SMM services Ghaziabad, digital marketing agency Ghaziabad, social media marketing for small business Ghaziabad, Instagram marketing agency Ghaziabad, Facebook ads agency Ghaziabad, best social media agency near me, local SEO and social media services Ghaziabad",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/social-media-marketing-agency-in-ghaziabad",
  },

  openGraph: {
    title: "Social Media Marketing Agency in Ghaziabad | Zentrix Infotech",
    description:
      "Looking for a trusted social media marketing agency in Ghaziabad? Zentrix Infotech offers result-driven SMM, content, and ad strategies for local businesses.",
    url: "https://www.zentrixinfotech.com/ghaziabad/social-media-marketing-agency-in-ghaziabad",
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
    title: "Social Media Marketing Agency in Ghaziabad | Zentrix Infotech",
    description:
      "Looking for a trusted social media marketing agency in Ghaziabad? Zentrix Infotech offers result-driven SMM, content, and ad strategies for local businesses.",
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