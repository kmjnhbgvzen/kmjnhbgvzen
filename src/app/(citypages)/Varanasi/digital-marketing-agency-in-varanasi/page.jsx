import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency in Varanasi | Zentrix Infotech",
  description:
    "Looking for a trusted digital marketing agency in Varanasi? Zentrix Infotech offers SEO, PPC, social media & web development to help local businesses grow online. Get a free consultation.",
  keywords:
    "digital marketing agency in Varanasi, digital marketing company Varanasi, SEO services Varanasi, social media marketing Varanasi, PPC agency Varanasi, website development company Varanasi, online marketing services Varanasi, best digital marketing agency Varanasi",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/varanasi/digital-marketing-agency-in-varanasi",
  },
  openGraph: {
    title: "Digital Marketing Agency in Varanasi | Zentrix Infotech",
    description:
      "Looking for a trusted digital marketing agency in Varanasi? Zentrix Infotech offers SEO, PPC, social media & web development to help local businesses grow online. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/varanasi/digital-marketing-agency-in-varanasi",
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
    title: "Digital Marketing Agency in Varanasi | Zentrix Infotech",
    description:
      "Looking for a trusted digital marketing agency in Varanasi? Zentrix Infotech offers SEO, PPC, social media & web development to help local businesses grow online. Get a free consultation.",
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