import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency in Ayodhya Reviews 2026 – Best & Trusted Picks",
  description:
    "Looking for a Digital Marketing Agency in Ayodhya? Read genuine reviews, ratings, pricing insights, and a checklist to pick the best agency for your business in 2026.",
  keywords:
    "digital marketing agency in ayodhya, digital marketing agency in ayodhya reviews, best digital marketing company ayodhya, seo agency ayodhya, digital marketing services ayodhya, top digital marketing agency near me, affordable digital marketing agency ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-in-ayodhya-reviews",
  },
  openGraph: {
    title: "Digital Marketing Agency in Ayodhya Reviews 2026 – Best & Trusted Picks",
    description:
      "Looking for a Digital Marketing Agency in Ayodhya? Read genuine reviews, ratings, pricing insights, and a checklist to pick the best agency for your business in 2026.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-in-ayodhya-reviews",
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
    title: "Digital Marketing Agency in Ayodhya Reviews 2026 – Best & Trusted Picks",
    description:
      "Looking for a Digital Marketing Agency in Ayodhya? Read genuine reviews, ratings, pricing insights, and a checklist to pick the best agency for your business in 2026.",
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