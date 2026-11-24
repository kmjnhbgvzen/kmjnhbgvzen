import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Custom Web Development Lucknow | Zentrix Infotech",
  description:
    "Looking for custom web development in Lucknow? Zentrix Infotech builds fast, secure, SEO-ready websites and web apps that turn visitors into customers.",
  keywords:
    "custom web development Lucknow, web development company in Lucknow, website development Lucknow, custom website development Lucknow, web application development Lucknow, ecommerce website development Lucknow, website designers in Lucknow, affordable web development Lucknow, React and Next.js development Lucknow, responsive website development Lucknow, SEO friendly website development Lucknow, web development services Uttar Pradesh, best web development company Lucknow, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/custom-web-development-lucknow",
  },

  openGraph: {
    title: "Custom Web Development Lucknow | Zentrix Infotech",
    description:
      "Looking for custom web development in Lucknow? Zentrix Infotech builds fast, secure, SEO-ready websites and web apps that turn visitors into customers.",
    url: "https://www.zentrixinfotech.com/lucknow/custom-web-development-lucknow",
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
    title: "Custom Web Development Lucknow | Zentrix Infotech",
    description:
      "Looking for custom web development in Lucknow? Zentrix Infotech builds fast, secure, SEO-ready websites and web apps that turn visitors into customers.",
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