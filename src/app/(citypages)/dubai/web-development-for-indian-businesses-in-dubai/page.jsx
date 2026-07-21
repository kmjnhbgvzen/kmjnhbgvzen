import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Web Development for Indian Businesses in Dubai | Website Experts",
  description:
    "Custom web development for Indian businesses in Dubai. Affordable, culturally-aware websites with multilingual support & SEO to grow your UAE presence.",
  keywords:
    "web development for Indian businesses in Dubai, website development for Indian companies UAE, Indian business website designer Dubai, affordable web design for Indian entrepreneurs Dubai, multilingual website development Dubai, Hindi Arabic website developer Dubai, Indian expat business website UAE, ecommerce website for Indian brands Dubai, website company for Indian community Dubai, hire web developer for Indian business Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/web-development-for-indian-businesses-in-dubai",
  },

  openGraph: {
    title: "Web Development for Indian Businesses in Dubai | Website Experts",
    description:
      "Custom web development for Indian businesses in Dubai. Affordable, culturally-aware websites with multilingual support & SEO to grow your UAE presence.",
    url: "https://www.zentrixinfotech.com/dubai/web-development-for-indian-businesses-in-dubai",
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
    title: "Web Development for Indian Businesses in Dubai | Website Experts",
    description:
      "Custom web development for Indian businesses in Dubai. Affordable, culturally-aware websites with multilingual support & SEO to grow your UAE presence.",
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