import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Indian Digital Marketing Agency for USA Businesses (2026 Guide)",
  description:
    "Looking for the best Indian digital marketing agency for USA clients? Compare pricing, services, time zones & results to find your ideal growth partner in 2026.",
  keywords:
    "best Indian digital marketing agency for USA, Indian digital marketing agency USA clients, affordable digital marketing agency India for US business, top digital marketing company India USA, SEO agency India for USA",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/best-indian-digital-marketing-agency-for-usa-businesses",
  },
  openGraph: {
    title: "Best Indian Digital Marketing Agency for USA Businesses (2026 Guide)",
    description:
      "Looking for the best Indian digital marketing agency for USA clients? Compare pricing, services, time zones & results to find your ideal growth partner in 2026.",
    url: "https://www.zentrixinfotech.com/usa/best-indian-digital-marketing-agency-for-usa-businesses",
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
    title: "Best Indian Digital Marketing Agency for USA Businesses (2026 Guide)",
    description:
      "Looking for the best Indian digital marketing agency for USA clients? Compare pricing, services, time zones & results to find your ideal growth partner in 2026.",
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