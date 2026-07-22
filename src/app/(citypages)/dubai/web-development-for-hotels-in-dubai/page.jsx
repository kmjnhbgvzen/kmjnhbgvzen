import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Web Development for Restaurants in Dubai | Restaurant Websites",
  description:
    "Custom web development for restaurants in Dubai. Online ordering, table reservations, menu design & SEO-ready websites that bring in more diners.",
  keywords:
    "web development for restaurants in Dubai, restaurant website development Dubai, restaurant web design UAE, online food ordering website Dubai, restaurant reservation website Dubai, cafe website design Dubai, restaurant SEO services Dubai, restaurant website company Dubai, menu website design Dubai, hire restaurant web developer Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/web-development-for-restaurants-in-dubai",
  },

  openGraph: {
    title: "Web Development for Restaurants in Dubai | Restaurant Websites",
    description:
      "Custom web development for restaurants in Dubai. Online ordering, table reservations, menu design & SEO-ready websites that bring in more diners.",
    url: "https://www.zentrixinfotech.com/dubai/web-development-for-restaurants-in-dubai",
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
    title: "Web Development for Restaurants in Dubai | Restaurant Websites",
    description:
      "Custom web development for restaurants in Dubai. Online ordering, table reservations, menu design & SEO-ready websites that bring in more diners.",
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