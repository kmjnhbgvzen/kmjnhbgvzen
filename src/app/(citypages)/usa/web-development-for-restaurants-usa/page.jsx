import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Web Development for Restaurants USA | Online Ordering & Menu Websites",
  description:
    "Professional web development for restaurants in USA. Fast, mobile-friendly websites with online ordering, menus, and reservations built to drive more orders. Get a free quote today.",
  keywords:
    "web development for restaurants USA, restaurant website development company, online food ordering website development, restaurant website design agency, restaurant reservation website, custom restaurant website, restaurant web design USA, food delivery website development, cafe website development services, best web developers for restaurants",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/web-development-for-restaurants-usa",
  },
  openGraph: {
    title: "Web Development for Restaurants USA | Online Ordering & Menu Websites",
    description:
      "Professional web development for restaurants in USA. Fast, mobile-friendly websites with online ordering, menus, and reservations built to drive more orders. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/usa/web-development-for-restaurants-usa",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development for Restaurants USA | Online Ordering & Menu Websites",
    description:
      "Professional web development for restaurants in USA. Fast, mobile-friendly websites with online ordering, menus, and reservations built to drive more orders. Get a free quote today.",
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